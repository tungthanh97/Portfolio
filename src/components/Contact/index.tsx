'use client';

import classNames from '@package/lib/utils/classNames';
import contactItems from 'data/content/contact';
import useScrollDirection from 'hooks/useScrollDirection';
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
                    <a
                        key={item.title}
                        href={item.link}
                        className="group font-sans text-custom-primary filter hover:brightness-110"
                    >
                        <span className="hidden lg:inline-block">{item.title}</span>
                        <i
                            className={`ri-${item.icon}-line ml-[5px] mt-[2px] text-2xl transition-opacity duration-200 ease-in-out  lg:text-base lg:opacity-0 lg:group-hover:opacity-100`}
                        />
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Contact;
