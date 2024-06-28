import UserRepository from '@services/user.repository';
import { RootState } from '@store/index';
import { userActions } from '@store/reducers/userReducer';
import { KEY_AUTH_TOKEN } from 'constants/common';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthInfo } from 'utils/auth';
import { setLocalStorage, removeLocalStorage } from 'utils/localStorage';

const AUTH_BLACKLIST = ['/blog'];

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const session = getAuthInfo();
    const dispatch = useDispatch();
    const pathName = usePathname();
    const userState = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (session) {
            if (!userState.userInfo) {
                UserRepository.getUserInfo().then((res) => {
                    if (!res.error) {
                        dispatch(userActions.setUserInfo);
                        setLocalStorage(
                            KEY_AUTH_TOKEN,
                            JSON.stringify({ ...session, user: res.data })
                        );
                        router.push('/');
                    } else {
                        dispatch(userActions.resetUserInfo());
                        removeLocalStorage(KEY_AUTH_TOKEN);
                    }
                });
            }

            return;
        }

        if (AUTH_BLACKLIST.some((item) => pathName.startsWith(item))) {
            router.push('/login');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session, pathName, dispatch, router]);

    return children;
};
