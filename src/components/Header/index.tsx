'use client';

import NavBar from '@package/lib/components/NavBar';
import RollingBox from '@components/RollingBox/RollingBox';
import classNames from '@package/lib/utils/classNames';
import MenuToggle from '@package/lib/components/MenuToggle';
import { navBarContent } from 'data/constants/navigationItems';
import Logo from '@package/lib/components/Logo';
import { useState } from 'react';
import { useTheme } from 'providers/ThemeProvider';
import ThemeToggle from '@package/lib/components/ThemeToggle';

const PageHeader = () => {
    const [isMenuOpenned, setIsMenuOpenned] = useState(false);
    const { toggleTheme, theme } = useTheme();

    return (
        <section className="absolute top-4 z-50 mx-auto flex w-full px-4">
            <div className="flex w-full justify-between px-4 py-6">
                <div
                    className={classNames(
                        'relative z-[99999] flex items-center py-1 pl-[5vw] text-custom-primary'
                    )}
                >
                    <Logo />
                </div>

                <NavBar navBarContent={navBarContent} />

                <div className={classNames('lg:center-row hidden h-full gap-7')}>
                    <ThemeToggle theme={theme} onClick={() => toggleTheme()} />
                    <RollingBox />
                </div>

                {/* mobile menu toggle */}
                <div className="flex items-center pr-[5vw] lg:hidden">
                    <MenuToggle
                        isShown={isMenuOpenned}
                        toggleMenu={() => setIsMenuOpenned((prev) => !prev)}
                        navBarContent={navBarContent}
                    />
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
