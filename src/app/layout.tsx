import BackgroundEffect from '@components/BackgroundEffect';
import PageHeader from '@components/Header';
import LoadingOverlay from '@package/lib/components/LoadingOverlay';
import classNames from '@package/lib/utils/classNames';
import '@styles/global.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Providers from 'providers';
import { Suspense } from 'react';

const bioFont = localFont({
    src: '../../fonts/Biotif.ttf',
    variable: '--font-bio',
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
    creator: 'Tom',
    icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="en" className="dark">
                <head>
                    <script src="/script/theme.js" async />
                </head>

                <body
                    className={classNames(
                        'relative bg-primary-white dark:bg-primary-black',
                        bioFont.variable,
                        quantumFont.variable,
                        calFont.variable
                    )}
                >
                    <Suspense fallback={<LoadingOverlay />}>
                        <Providers>
                            <PageHeader />
                            <BackgroundEffect />
                            {children}
                        </Providers>
                    </Suspense>
                </body>
            </html>
        </>
    );
}
