import type { Config } from 'tailwindcss'

const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './package/lib/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    700: 'rgb(20 20 20)',
                    blue: '#4831d4',
                    green: '#ccf381',
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
        },

        fontFamily: {
            cal: ['var(--font-cal)', ...fontFamily.serif],
            sans: ['var(--font-inter)', ...fontFamily.sans],
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
