import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config = {
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
                    white: '#ffffff',
                    light: 'rgba(var(--color-light), <alpha-value>)',
                },
                custom: {
                    primary: 'rgba(var(--color-primary), <alpha-value>)',
                    secondary: 'rgba(var(--color-secondary), <alpha-value>)',
                    background: 'rgba(var(--color-bkg), <alpha-value>)',
                    inverted: 'rgba(var(--color-inverted), <alpha-value>)',
                },
                grey: {
                    100: '#e5e7eb',
                    200: 'd1d1d1',
                    700: '#777777',
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
                circle: '50%',
            },

            lineHeight: {
                standard: '144%',
            },

            fontSize: {
                standard: '22px',
            },

            keyframes: {
                wiggle: {
                    '0%': { scale: '100%' },
                    '50%': { scaleX: '50%', scaleY: '200%' },
                    '100%': { scaleX: '0%', scaleY: '0' },
                },
            },
            screens: {
                ssm: '350px',
            },
        },

        fontFamily: {
            cal: ['var(--font-cal)', ...fontFamily.serif],
            sans: ['var(--font-bio)', ...fontFamily.sans],
            inter: ['var(--font-inter)'],
            mono: ['Roboto Mono', 'monospace'],
            montesat: ['Montserrat-Regular', 'sans-serif'],
        },

        backgroundImage: {
            'gradient-primary': 'linear-gradient(90deg, #4831d4 67%, #ccf381 33%);',
        },

        boxShadow: {
            fill: '0 4px 0 rgba(var(--color-inverted), 1)',
            grow: '0 6px 0 rgba(var(--color-inverted), 1)',
            shrink: '0 2px 0 rgba(var(--color-inverted), 1)',
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'translate-z': (value) => ({
                        '--tw-translate-z': value,
                        transform: `translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
                    }),
                },
                { values: theme('translate') }
            );
        }),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'rotate-z': (value) => ({
                        '--tw-rotate-z': `${value}`,
                        transform: `translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
                    }),
                },
                { values: theme('rotate') }
            );
        }),
    ],
};

export default config;
