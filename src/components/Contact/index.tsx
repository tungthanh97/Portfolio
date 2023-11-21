'use client';

import classNames from '@package/lib/utils/classNames';
import contactItems from 'data/content/contact';
import useScrollDirection from 'hooks/useScrollDirection';
import Link from 'next/link';
import { useCallback, useState } from 'react';

const Contact = () => {
    const [isScrollUp, setIsScrollUp] = useState(false);

    const handleScrollUp = useCallback(() => setIsScrollUp(true), []);

    const handleScrollDown = useCallback(() => setIsScrollUp(false), []);

    useScrollDirection({
        onScrollUp: handleScrollUp,
        onScrollDown: handleScrollDown,
    });

    return (
        <div
            className={classNames(
                'center-row glass fixed bottom-0 z-50 w-screen pb-1 opacity-100',
                isScrollUp && 'opacity-60 hover:opacity-100'
            )}
        >
            <nav className="center-row cursor-pointer gap-5 p-2">
                {contactItems.map((item) => (
                    <Link
                        key={item.title}
                        href={item.link}
                        className="group flex h-max flex-row items-center justify-start font-sans text-lg text-custom-primary filter hover:brightness-110"
                    >
                        <span className="hidden leading-3 lg:inline-block">{item.title}</span>
                        <figure className="ml-[5px] inline-block  transition-opacity duration-200 ease-in-out lg:opacity-0 lg:group-hover:opacity-100 [&>svg]:w-6 [&>svg]:fill-custom-primary [&>svg]:lg:w-4">
                            {item.icon}
                        </figure>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Contact;
