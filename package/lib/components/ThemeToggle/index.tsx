'use client';

import { useRef } from 'react';
import classNames from '../../utils/classNames';

const ThemeToggle = ({
    theme = 'dark',
    onClick,
}: {
    theme: 'dark' | 'light';
    onClick: () => void;
}) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const isDarkTheme = theme === 'dark';

    const handleChangeTheme = () => {
        onClick();
        audioRef.current?.play();
    };

    return (
        <div
            onClick={handleChangeTheme}
            className="relative h-8 w-8 cursor-pointer overflow-visible text-2xl lg:text-4xl [&>i]:absolute [&>i]:block [&>i]:h-max [&>i]:w-max [&>i]:transition-all [&>i]:duration-500 [&>i]:ease-in-out"
        >
            <i
                className={classNames(
                    'ri-sun-fill text-primary-light inset-0 translate-y-0 opacity-100 rotate-z-0',
                    isDarkTheme && 'translate-y-10 opacity-0 rotate-z-90'
                )}
            />
            <i
                className={classNames(
                    'ri-moon-fill inset-0 translate-y-10 opacity-0 rotate-z-90',
                    isDarkTheme && 'translate-y-0 text-primary-white opacity-100 rotate-z-0'
                )}
            />
            <audio ref={audioRef} src="/audio/switch-toggle.mp3" />
        </div>
    );
};

export default ThemeToggle;
