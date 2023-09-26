'use client';

import { ILinkItem } from '@package/lib/types/common';
import classNames from '@package/lib/utils/classNames';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../Logo';

export interface IMenuToggle {
    navBarContent: ILinkItem[];
    isShown: boolean;
    toggleMenu: () => void;
}

const MenuToggle = ({ navBarContent, isShown, toggleMenu }: IMenuToggle) => {
    return (
        <button
            className={classNames(
                'relative z-50 flex h-5 w-7 lg:hidden [&>span]:bg-custom-primary [&>span]:transition-all'
            )}
            onClick={() => toggleMenu()}
        >
            <span
                className={classNames(
                    'absolute left-0 top-0 z-10 block h-[2px] w-full origin-right rotate-0',
                    isShown && '-top-1 -rotate-45'
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
                    isShown && 'w-full rotate-45'
                )}
            ></span>

            <div
                className={classNames(
                    'bg-primary-white fixed inset-0 flex max-h-full w-full flex-col items-center justify-start pt-24 opacity-100 transition-opacity duration-300 dark:bg-primary-black',
                    !isShown && 'max-h-0 opacity-0'
                )}
            >
                <ul
                    className={classNames(
                        'text-primary blue auto-flow-y-auto flex max-h-full w-full flex-col items-start border-t-2 border-custom-primary text-standard font-bold opacity-100',
                        !isShown && 'max-h-0 opacity-0'
                    )}
                >
                    {isShown &&
                        navBarContent.map((item) => (
                            <Link
                                href={item.link}
                                className="w-full border-b-2 border-dashed border-custom-primary p-4 text-left leading-standard text-custom-primary hover:bg-primary-blue hover:text-custom-secondary hover:opacity-70 md:px-6"
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
