'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '@components/MainLayout';
import { useRouter } from 'next/navigation';
import { logout } from '@store/actions/userActions';
import Button from '../../../package/lib/components/Button';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function ProfilePage() {
    const router = useRouter();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);

    const { mutate } = useMutation({
        mutationFn: ({ email, password }) => {
            return logout({ email, password });
        },
        onSuccess: () => {
            toast.success('Logout successfull');
        },
    });

    console.log('user state', userState);

    const logoutHandler = () => {
        dispatch(logout());
        mutate();
    };

    //if user is logged in, then redirect to the home page
    useEffect(() => {
        if (!userState.userInfo) {
            router.push('/');
        }
    }, [router, userState.userInfo]);

    return (
        <MainLayout>
            <section className="container mx-auto px-5 py-10">
                <div className="mx-auto w-full max-w-sm text-center">
                    {/* <ProfilePicture avatar={profileData?.avatar} /> */}
                    <h3 className="my-8 text-2xl font-bold italic text-custom-primary">
                        <span className="font-roboto text-2xl font-normal">Hello, </span>
                        {userState?.userInfo?.name}
                    </h3>

                    <Button onClick={logoutHandler}>Logout</Button>
                </div>
            </section>
        </MainLayout>
    );
}

export default ProfilePage;
