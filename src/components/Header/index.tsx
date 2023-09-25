'use client';

import Link from 'next/link';
import NavBar from '@package/lib/components/NavBar';
import RollingBox from '@package/lib/components/RollingBox/RollingBox';
import { FULLNAME } from 'data/constants/common';
import classNames from '@package/lib/utils/classNames';
import MenuToggle from '@package/lib/components/MenuToggle';
import { navBarContent } from 'data/constants/navigationItems';
import Logo from '@package/lib/components/Logo';
import { useState } from 'react';
import { useTheme } from 'providers/ThemeProvider';

const PageHeader = () => {
    const [isMenuOpenned, setIsMenuOpenned] = useState(false);
    const { toggleTheme } = useTheme();

    return (
        <section className="absolute top-4 z-50 mx-auto flex w-full px-4">
            <div className="flex w-full justify-between px-4 py-6">
                <div
                    className={classNames(
                        'text-custom-primary relative z-[99999] flex items-center py-1 pl-[5vw]'
                    )}
                >
                    <Logo />
                </div>

                <NavBar navBarContent={navBarContent} />

                {/* mobile menu toggle */}
                <div className="flex items-center pr-[5vw] lg:hidden">
                    <MenuToggle
                        isShown={isMenuOpenned}
                        toggleMenu={() => setIsMenuOpenned((prev) => !prev)}
                        navBarContent={navBarContent}
                    />
                </div>

                <div className={classNames('lg:center-row hidden h-full')}>
                    <RollingBox onClick={() => toggleTheme()} />
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
