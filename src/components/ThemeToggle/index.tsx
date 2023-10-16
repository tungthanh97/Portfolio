'use client';

import { useRef } from 'react';
import classNames from '../../../package/lib/utils/classNames';
import { useTheme } from 'providers/ThemeProvider';
import SunIcon from '@assets/icons/sun-fill.svg';
import MoonIcon from '@assets/icons/moon-fill.svg';

const ThemeToggle = () => {
    const { toggleTheme, theme } = useTheme();
    const audioRef = useRef<HTMLAudioElement>(null);
    const isDarkTheme = theme === 'dark';

    const handleChangeTheme = () => {
        toggleTheme();
        audioRef.current?.play();
    };

    return (
        <div
            onClick={handleChangeTheme}
            className="relative h-8 w-8 cursor-pointer overflow-visible text-2xl lg:text-4xl [&>svg]:absolute [&>svg]:block [&>svg]:h-max [&>svg]:w-max [&>svg]:transition-all [&>svg]:duration-500 [&>svg]:ease-in-out"
        >
            <SunIcon
                className={classNames(
                    'inset-0 translate-y-0 fill-primary-light opacity-100 rotate-z-0',
                    isDarkTheme && 'translate-y-10 opacity-0 rotate-z-90'
                )}
            />
            <MoonIcon
                className={classNames(
                    ' inset-0 translate-y-10 opacity-0 rotate-z-90',
                    isDarkTheme && 'translate-y-0 fill-primary-white opacity-100 rotate-z-0'
                )}
            />
            <audio ref={audioRef} src="/audio/switch-toggle.mp3" />
        </div>
    );
};

export default ThemeToggle;
