'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '@components/MainLayout';
import Button from '../../../package/lib/components/Button';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import UserRepository from '@services/user.repository';
import { userActions } from '@store/reducers/userReducer';
import { RootState } from '@store/index';

function ProfilePage() {
    const dispatch = useDispatch();
    const userState = useSelector((state: RootState) => state.user);

    const { mutate } = useMutation({
        mutationFn: () => {
            return UserRepository.logout();
        },
        onSuccess: () => {
            toast.success('Logout successfull');
        },
    });

    const logoutHandler = () => {
        dispatch(userActions.resetUserInfo());
        mutate();
    };

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
