'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@store/reducers/userReducer';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { login } from '@services/users';
import Button from '../../../package/lib/components/Button';
import MainLayout from '../../components/MainLayout/MainLayout';
import { KEY_AUTH_TOKEN } from 'constants/common';
import { setLocalStorage } from 'utils/localStorage';

function LoginPage() {
    const router = useRouter();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);

    const { mutate, isLoading } = useMutation({
        mutationFn: ({ email, password }) => {
            return login({ email, password });
        },
        onSuccess: (data) => {
            if (data && data?.status !== 'error') {
                toast.success('Login successfull');
                dispatch(userActions.setUserInfo(data?.metadata?.user));
                setLocalStorage(KEY_AUTH_TOKEN, JSON.stringify(data.metadata));
            } else toast.error('Something when wrong');
        },
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
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
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    // const password = watch('password');

    //form submit handler
    const submitHandler = (data) => {
        const { email, password } = data;
        mutate({ email, password });
    };

    return (
        <MainLayout>
            <section className="container mx-auto px-5 py-10">
                <div className="mx-auto w-full max-w-sm">
                    <h1 className="font-roboto mb-8 text-center text-2xl font-bold text-custom-primary">
                        Login
                    </h1>
                    <form onSubmit={handleSubmit(submitHandler)}>
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
                        <Link
                            href="/forget-password"
                            className="block text-sm font-semibold text-[#5a7184]"
                        >
                            Forget Password?
                        </Link>
                        <Button type="submit" disabled={!isValid || isLoading} className="my-8">
                            Sign In
                        </Button>
                        <p className="text-sm font-semibold text-[#5a7184]">
                            Don&apos;t have an account ?{' '}
                            <Link href="/register" className="text-custom-primary">
                                Register
                            </Link>
                        </p>
                    </form>
                    {/* <div className="text-xs text-slate-700 ">
                    <p>Demo account</p>
                    <p>
                        <span className="font-bold">username:</span>
                        aryan1@gmail.com
                    </p>
                    <p>
                        <span className="font-bold">password:</span> 123456
                    </p>
                </div> */}
                </div>
            </section>
        </MainLayout>
    );
}

export default LoginPage;
