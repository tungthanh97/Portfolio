import PageHeader from '@components/Header';
import classNames from '@package/lib/utils/classNames';
import '@styles/global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const interFont = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    preload: true,
    display: 'swap',
});

const calFont = localFont({
    src: '../../fonts/CalSans-SemiBold.woff2',
    variable: '--font-cal',
    preload: true,
    display: 'swap',
});

const quantumFont = localFont({
    src: '../../fonts/Quantum_regular.otf',
    variable: '--font-quant',
    preload: true,
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Tom Portfolio',
    description: 'Portfolio created by Tom',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            {/* <style global>{`
                html {
                    --font-quant:${quantumFont.className};
                    --font-cal:${calFont.className};
                    --font-inter:${interFont.className};
                }
            `}</style> */}
            <body
                className={classNames(
                    'bg-white dark:bg-gray-900',
                    interFont.variable,
                    quantumFont.variable,
                    calFont.variable
                )}
            >
                <PageHeader />
                {children}
            </body>
        </html>
    );
}
