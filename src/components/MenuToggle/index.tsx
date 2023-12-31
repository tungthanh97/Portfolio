'use client';

import { ILinkItem } from '@package/lib/types/common';
import classNames from '@package/lib/utils/classNames';
import Link from 'next/link';
import { useState } from 'react';

export interface IMenuToggle {
    navBarContent: ILinkItem[];
}

const MenuToggle = ({ navBarContent }: IMenuToggle) => {
    const [isShown, setIsShown] = useState(false);

    const toggleMenu = () => setIsShown((prev) => !prev);

    return (
        <button
            className={classNames(
                'relative z-50 flex h-5 w-7 lg:hidden [&>span]:bg-custom-primary [&>span]:transition-all'
            )}
            onClick={toggleMenu}
        >
            <span
                className={classNames(
                    'absolute left-0 top-0 z-10 block h-[2px] w-full origin-right rotate-0',
                    isShown && '-top-1 -rotate-45'
                )}
            ></span>

            <span
                className={classNames(
                    'absolute right-0 top-4 z-10 block h-[2px] w-3/4 origin-right rotate-0',
                    isShown && 'w-full rotate-45'
                )}
            ></span>

            <div
                className={classNames(
                    'center fixed inset-0 z-0 max-h-full w-full bg-custom-background bg-opacity-90 pt-24 backdrop-blur transition-all duration-500',
                    !isShown && 'max-h-0 w-0 opacity-0 delay-300'
                )}
            >
                <ul
                    className={classNames(
                        'text-primary blue auto-flow-y-auto flex max-h-full w-full flex-col items-start border-t-2 border-custom-primary text-standard font-bold opacity-100 transition-all',
                        !isShown && 'max-h-0 opacity-0 delay-300'
                    )}
                >
                    {navBarContent.map((item) => (
                        <Link
                            key={item.title}
                            href={item.link}
                            className={classNames(
                                'block h-0 w-0 -translate-x-9 overflow-hidden border-b-2 border-dashed border-custom-primary p-4 text-left leading-standard text-custom-primary transition-all duration-500 ease-in-out hover:bg-custom-primary hover:text-custom-secondary hover:opacity-70 md:px-6',
                                isShown && 'h-full w-full translate-x-0'
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </ul>
            </div>
        </button>
    );
};

export default MenuToggle;
