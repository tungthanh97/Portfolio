'use client';

import { useMemo, useRef, useState } from 'react';
import NavBarItem from './NavBarItem';
import { ILinkItem } from '@package/lib/types/common';

const NavBar = ({ navBarContent }: { navBarContent: ILinkItem[] }): JSX.Element => {
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
            <div className="font-matter dark:border-grey-100 bg-primary-white relative z-20 m-1 rounded-4xl border-[3px] border-primary-black uppercase dark:bg-primary-black">
                <ul
                    id="nav-items"
                    data-orientation="horizontal"
                    className="group flex w-full [&>li:last-child]:mr-0 [&>li:nth-child(2)]:ml-0"
                >
                    <div
                        id="animation"
                        style={animationStyle}
                        className="dark:bg-grey-100 absolute -z-10 rounded-4xl border-2 bg-primary-black opacity-0 transition-all duration-500 ease-in-out focus:opacity-100 group-hover:opacity-100 group-focus:opacity-100"
                    />
                    {navBarContent.map((item, index) => (
                        <NavBarItem
                            key={item.title}
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
