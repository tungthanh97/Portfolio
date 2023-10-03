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
                    'ri-sun-fill rotate-z-0 inset-0 translate-y-0 text-[#ffdb01] opacity-100',
                    isDarkTheme && 'rotate-z-90 translate-y-10 opacity-0'
                )}
            />
            <i
                className={classNames(
                    'ri-moon-fill rotate-z-90 inset-0 translate-y-10 opacity-0',
                    isDarkTheme && 'rotate-z-0 translate-y-0 text-primary-white opacity-100'
                )}
            />
            <audio ref={audioRef} src="/audio/switch-toggle.mp3" />
        </div>
    );
};

export default ThemeToggle;
