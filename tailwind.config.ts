import type { Config } from 'tailwindcss'

const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './package/lib/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: '#4831d4',
                    green: '#ccf381',
                    black: '#151417',
                },
                custom: {
                    primary: 'var(--color-primary)',
                    secondary: 'var(--color-secondary)',
                },
                grey: {
                    100: '#e5e7eb',
                    900: '#1F2124',
                },
            },
            maxWidth: {
                'screen-max': '1440px',
            },
            breakpoint: {
                '2xl': '1440px',
            },
            borderRadius: {
                '4xl': '2rem',
            },

            lineHeight: {
                standard: '144%',
            },

            fontSize: {
                standard: '22px',
            },
        },

        fontFamily: {
            cal: ['var(--font-cal)', ...fontFamily.serif],
            sans: ['var(--font-inter)', ...fontFamily.sans],
            quantum: ['var(--font-quant)'],
            mono: ['Roboto Mono', 'monospace'],
        },

        backgroundImage: {
            'gradient-primary': 'linear-gradient(90deg, #4831d4 67%, #ccf381 33%);',
        },

        keyframes: {
            wiggle: {
                '0%': { scale: '100%' },
                '50%': { scaleX: '50%', scaleY: '200%' },
                '100%': { scaleX: '0%', scaleY: '0' },
            },
        },
    },
    plugins: [],
};

export default config
