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
        title: 'Blog',
        link: '/blog',
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
        <nav ref={navRef} className="rounded-4lx hidden lg:block lg:py-0">
            <div className="font-matter rounded-4xl relative z-20 m-1 border-[3px] border-primary-700 bg-white  uppercase">
                <ul
                    id="nav-items"
                    data-orientation="horizontal"
                    className="group flex w-full [&>li:last-child]:mr-0 [&>li:nth-child(2)]:ml-0"
                >
                    <div
                        id="animation"
                        style={animationStyle}
                        className="rounded-4xl absolute -z-10 border-2 bg-primary-700 opacity-0 transition-all duration-500 ease-in-out focus:opacity-100 group-hover:opacity-100 group-focus:opacity-100"
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
        </nav>
    );
};

export default NavBar;