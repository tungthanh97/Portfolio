'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import NavBarItem from './NavBarItem';

const navBarContent = Object.freeze([
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Projects',
        link: '/projects',
    },
    {
        title: 'Blogs',
        link: '/blogs',
    },
    {
        title: 'Articles',
        link: '/articles',
    },
]);

const NavBar = (): JSX.Element => {
    const [selectedNavIndex, setSelectedNavIndex] = useState<number | null>(null);
    const navRef = useRef<HTMLElement>(null);

    const handleSelectNavItem = (index: number) => {
        setSelectedNavIndex(index);
    };

    const handleUnSelectNavItem = () => {
        setSelectedNavIndex(null);
    };

    const animationStyle = useMemo(() => {
        if (navRef.current) {
            const listNavItems = navRef.current.querySelectorAll('#nav-items > li');
            const selectedNavItem = selectedNavIndex !== null && listNavItems?.[selectedNavIndex];

            if (selectedNavItem) {
                const itemRect = selectedNavItem.getBoundingClientRect();

                return {
                    width: itemRect.width,
                    height: itemRect.height,

                    left:
                        itemRect.left -
                        (selectedNavItem.parentElement?.getBoundingClientRect()?.left ?? 0),
                };
            }
        }

        return { width: '120px', height: '54px', left: '30px' };
    }, [selectedNavIndex]);

    return (
        <section className="mx-auto max-w-screen-max px-4 sticky top-3 z-50">
            <nav ref={navRef} className="rounded-4lx hidden lg:block">
                <div className="flex w-full items-center justify-center">
                    {/* logo */}
                    <div className="relative bg-white font-matter rounded-3xl border-2 border-primary-700 uppercase z-20">
                        <ul
                            id="nav-items"
                            data-orientation="horizontal"
                            className="flex group [&>li:nth-child(2)]:ml-0 [&>li:last-child]:mr-0 w-full"
                        >
                            <div
                                id="animation"
                                style={animationStyle}
                                className="bg-primary-700 rounded-3xl absolute border-2 duration-600 ease-in-out transition-all opacity-0 group-hover:opacity-100 group-focus:opacity-100 focus:opacity-100 -z-10"
                            />
                            {navBarContent.map((item, index) => (
                                <NavBarItem
                                    link={item.link}
                                    title={item.title}
                                    onMouseEnter={() => handleSelectNavItem(index)}
                                    onMouseLeave={handleUnSelectNavItem}
                                    onFocus={() => handleSelectNavItem(index)}
                                    onBlur={handleUnSelectNavItem}
                                    onTouchStart={() => handleSelectNavItem(index)}
                                    onTouchEnd={handleUnSelectNavItem}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default NavBar;
