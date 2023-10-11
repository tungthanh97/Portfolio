'use client';

import NavBar from '@package/lib/components/NavBar';
import RollingBox from '@components/RollingBox/RollingBox';
import classNames from '@package/lib/utils/classNames';
import MenuToggle from '@package/lib/components/MenuToggle';
import { navBarContent } from 'data/content/navigation';
import Logo from '@package/lib/components/Logo';
import { useState } from 'react';
import { useTheme } from 'providers/ThemeProvider';
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('@package/lib/components/ThemeToggle'), { ssr: false });

const PageHeader = () => {
    const [isMenuOpenned, setIsMenuOpenned] = useState(false);
    const { toggleTheme, theme } = useTheme();

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
                    <ThemeToggle theme={theme} onClick={() => toggleTheme()} />{' '}
                    <div className={classNames('lg:center-row hidden h-full')}>
                        <RollingBox />
                    </div>
                    {/* mobile menu toggle */}
                    <div className="mr-2 flex items-center lg:hidden">
                        <MenuToggle
                            isShown={isMenuOpenned}
                            toggleMenu={() => setIsMenuOpenned((prev) => !prev)}
                            navBarContent={navBarContent}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
