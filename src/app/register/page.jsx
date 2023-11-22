'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '@components/MainLayout';
import { signUp } from '@services/users';
import { userActions } from '@store/reducers/userReducer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '../../../package/lib/components/Button';

function RegisterPage() {
    const router = useRouter();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);
    const { mutate, isLoading } = useMutation({
        mutationFn: ({ name, email, password }) => {
            return signUp({ name, email, password });
        },
        onSuccess: (data) => {
            if (data && data?.status !== 'error') {
                toast.success('Registration successfull');

                dispatch(userActions.setUserInfo(data?.metadata?.metadata?.user));
                localStorage.setItem('account', JSON.stringify(data));
            } else toast.error('Something when wrong');
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    //if user is logged in, then redirect to the home page
    useEffect(() => {
        if (userState.userInfo) {
            router.push('/');
        }
    }, [router, userState.userInfo]);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        mode: 'onChange',
    });

    const password = watch('password');

    //form submit handler
    const submitHandler = async (data) => {
        const { name, email, password } = data;
        mutate({ name, email, password });
    };

    return (
        <MainLayout>
            <section className="container mx-auto px-5 py-10">
                <div className="mx-auto w-full max-w-sm">
                    <h1 className="font-roboto mb-8 text-center text-2xl font-bold text-custom-primary">
                        Sign Up
                    </h1>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className="mb-6 flex w-full flex-col">
                            <label
                                htmlFor="name"
                                className="block font-semibold text-custom-primary"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                {...register('name', {
                                    minLength: {
                                        value: 1,
                                        message: 'Name length must be at least 1 character',
                                    },
                                    required: {
                                        value: true,
                                        message: 'Name is required',
                                    },
                                })}
                                placeholder="Enter Name"
                                className={`mt-3 block rounded-lg border px-5 py-4 font-semibold text-black outline-none placeholder:text-[#9591ead]
                                ${errors.name ? 'border-red-600' : ' border-[#c3cad9]'}`}
                            />
                            {errors.name?.message && (
                                <p className="pt-1 text-xs text-red-500">{errors.name?.message}</p>
                            )}
                        </div>
                        <div className="mb-6 flex w-full flex-col">
                            <label
                                htmlFor="email"
                                className="block font-semibold text-custom-primary"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Enter a valid email',
                                    required: {
                                        value: true,
                                        message: 'Email is required',
                                    },
                                })}
                                placeholder="Enter email"
                                className={`mt-3 block rounded-lg border px-5 py-4 font-semibold text-black outline-none placeholder:text-[#9591ead]
                                ${errors.email ? 'border-red-600' : ' border-[#c3cad9]'}`}
                            />
                            {errors.email?.message && (
                                <p className="pt-1 text-xs text-red-500">{errors.email?.message}</p>
                            )}
                        </div>
                        <div className="mb-6 flex w-full flex-col">
                            <label
                                htmlFor="password"
                                className="block font-semibold text-custom-primary"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Password is required',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'password must be at least 6 character',
                                    },
                                })}
                                placeholder="Enter password"
                                className={`mt-3 block rounded-lg border px-5 py-4 font-semibold text-black outline-none placeholder:text-[#9591ead]
                                ${errors.password ? 'border-red-600' : ' border-[#c3cad9]'}`}
                            />
                            {errors.password?.message && (
                                <p className="pt-1 text-xs text-red-500">
                                    {errors.password?.message}
                                </p>
                            )}
                        </div>

                        <div className="mb-6 flex w-full flex-col">
                            <label
                                htmlFor="confirmPassword"
                                className="block font-semibold text-custom-primary"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                {...register('confirmPassword', {
                                    required: {
                                        value: true,
                                        message: 'Confirm Password is required',
                                    },
                                    validate: (value) => {
                                        if (value != password) {
                                            return 'Passwords do not match';
                                        }
                                    },
                                })}
                                placeholder="Enter confirm password"
                                className={`mt-3 block rounded-lg  border px-5 py-4 font-semibold text-black outline-none placeholder:text-[#9591ead]
                                ${errors.confirmPassword ? 'border-red-600' : ' border-[#c3cad9]'}`}
                            />
                            {errors.confirmPassword?.message && (
                                <p className="pt-1 text-xs text-red-500">
                                    {errors.confirmPassword?.message}
                                </p>
                            )}
                        </div>
                        <Button type="submit" disabled={!isValid || isLoading} className="my-8">
                            Register
                        </Button>
                        <p className="text-sm font-semibold text-[#5a7184]">
                            You have an account ?{' '}
                            <Link href="/login" className="text-custom-primary">
                                Login Now
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </MainLayout>
    );
}

export default RegisterPage;
