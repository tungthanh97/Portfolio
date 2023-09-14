import type { Config } from 'tailwindcss'

const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
    content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    700: 'rgb(20 20 20)',
                },
            },
        },
        maxWidth: {
            'screen-max': '1440px',
        },
        breakpoint: {
            '2xl': '1440px',
        },
        fontFamily: {
            cal: ['var(--font-cal)', ...fontFamily.serif],
            sans: ['var(--font-inter)', ...fontFamily.sans],
            mono: ['Roboto Mono', 'monospace'],
        },
        borderRadius: {
            '4xl': '2rem',
        },
        backgroundImage: {
            'gradient-primary':
                'radial-gradient(162.05% 170% at 109.58% 35%, #667593 0%, #E3E3E3 100%)',
        },
    },
    plugins: [],
};

export default config
