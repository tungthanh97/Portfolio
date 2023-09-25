import PageHeader from '@components/Header';
import classNames from '@package/lib/utils/classNames';
import '@styles/global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Providers from 'providers';
import { Suspense } from 'react';

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
        <Providers>
            <html lang="en">
                <body
                    className={classNames(
                        'relative bg-primary-black',
                        interFont.variable,
                        quantumFont.variable,
                        calFont.variable
                    )}
                >
                    <Suspense>
                        <PageHeader />
                        {children}
                    </Suspense>
                </body>
            </html>
        </Providers>
    );
}
