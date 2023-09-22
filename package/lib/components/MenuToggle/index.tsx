'use client';

import { INavBarItem } from '@package/lib/types/components';
import classNames from '@package/lib/utils/classNames';
import Link from 'next/link';
import { useState } from 'react';

const MenuToggle = ({ navBarContent }: { navBarContent: INavBarItem[] }) => {
    const [isMenuOpenned, setIsMenuOpenned] = useState(false);

    return (
        <button
            className={classNames(
                'relative z-50 flex h-5 w-7 lg:hidden [&>span]:bg-primary-green [&>span]:transition-all'
            )}
            onClick={() => setIsMenuOpenned((prev) => !prev)}
        >
            <span
                className={classNames(
                    'absolute left-0 top-0 z-10 block h-[2px] w-full origin-right rotate-0',
                    isMenuOpenned && '-top-1 -rotate-45'
                )}
            ></span>
            {/* <span
                className={classNames(
                    'absolute left-0 top-0 z-10 block h-[2px] w-full origin-right rotate-0',
                    isMenuOpenned && '-top-1 -rotate-45'
                )}
            ></span> */}
            <span
                className={classNames(
                    'absolute right-0 top-4 z-10 block h-[2px] w-3/4 origin-right rotate-0',
                    isMenuOpenned && 'w-full rotate-45'
                )}
            ></span>

            <div
                className={classNames(
                    'fixed inset-0 flex max-h-full w-full flex-col bg-primary-blue  transition-all duration-150',
                    !isMenuOpenned && 'max-h-0'
                )}
            >
                <ul
                    className={classNames(
                        ' flex flex-col text-primary-green opacity-100 transition-opacity duration-300',
                        !isMenuOpenned && 'opacity-0'
                    )}
                >
                    {navBarContent.map((item) => (
                        <li>
                            <Link href={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </button>
    );
};

export default MenuToggle;
