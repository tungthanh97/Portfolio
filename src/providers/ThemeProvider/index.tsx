'use client';

import React, { createContext, useCallback, useEffect, useMemo } from 'react';

type ThemeValue = 'dark' | 'light';

const ThemeContext = createContext<{ theme: ThemeValue; toggleTheme: () => void }>({
    theme: 'dark',
    toggleTheme: () => {},
});

export const useTheme = () => React.useContext(ThemeContext);

const useDarkTheme = (defaultTheme: ThemeValue = 'dark') => {
    const [theme, setTheme] = React.useState(defaultTheme);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        if (typeof window !== 'undefined') localStorage.setItem('color-theme', theme);
    }, [theme]);

    return [theme, toggleTheme] as const;
};

const getInitColorMode = () => {
    const isDarkMode =
        typeof window !== 'undefined' &&
        (localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches));

    return isDarkMode ? 'dark' : 'light';
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const initColorMode = getInitColorMode();
    const [theme, toggleTheme] = useDarkTheme(initColorMode);

    const themeValue = useMemo(() => {
        return { theme, toggleTheme };
    }, [theme, toggleTheme]);

    return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
