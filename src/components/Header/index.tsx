'use client';

import NavBar from '@package/lib/components/NavBar';
import RollingBox from '@components/RollingBox/RollingBox';
import classNames from '@package/lib/utils/classNames';
import { navBarContent } from 'data/content/navigation';
import Logo from '@package/lib/components/Logo';
import MenuToggle from '@components/MenuToggle';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const ThemeToggle = dynamic(() => import('@components/ThemeToggle'), { ssr: false });

const PageHeader = () => {
    const userState = useSelector((state: any) => state.user);

    return (
        <section className="absolute top-4 z-20 mx-auto flex w-full px-4 lg:px-10">
            <div className="grid w-full grid-cols-2 grid-rows-1 px-4 py-6 lg:grid-cols-3">
                <div className="flex flex-row items-center justify-start gap-4 md:gap-6 lg:gap-14">
                    <div
                        className={classNames(
                            'pl- relative z-[99999] flex items-center py-1 text-custom-primary'
                        )}
                    >
                        <Logo />
                    </div>
                </div>

                <div className="center hidden w-max lg:block">
                    <NavBar navBarContent={navBarContent} />
                </div>

                <div className="flex flex-row items-center justify-end gap-4 md:gap-6 lg:gap-14">
                    <ThemeToggle />
                    <Link
                        href={userState?.userInfo ? '/profile' : '/login'}
                        className={classNames('lg:center-row hidden h-full')}
                    >
                        <RollingBox />
                    </Link>
                    {/* mobile menu toggle */}
                    <div className="mr-2 flex items-center lg:hidden">
                        <MenuToggle navBarContent={navBarContent} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
