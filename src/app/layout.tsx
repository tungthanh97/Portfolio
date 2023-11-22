import BackgroundEffect from '@components/BackgroundEffect';
import PageHeader from '@components/Header';
import LoadingOverlay from '@package/lib/components/LoadingOverlay';
import classNames from '@package/lib/utils/classNames';
import '@styles/global.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Providers from 'providers';
import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import GoogleAnalytics from '@components/GoogleAnalytics';
import { isProd } from 'utils/common';
import { Toaster } from 'react-hot-toast';

// If loading a variable font, you don't need to specify the font weight
const interFont = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    preload: true,
    display: 'swap',
});

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

export const metadata: Metadata = {
    title: 'Tung Pham',
    description: 'Portfolio created by Tung',
    creator: 'Tung',
    icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <head>
                <script src="/scripts/theme.js" async />
            </head>

            <body
                className={classNames(
                    'relative bg-primary-white text-custom-inverted dark:bg-primary-black',
                    bioFont.variable,
                    calFont.variable,
                    interFont.variable
                )}
            >
                {isProd && (
                    <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
                )}
                <Suspense fallback={<LoadingOverlay />}>
                    <Providers>
                        <PageHeader />
                        <BackgroundEffect />
                        {children}
                        <Toaster />
                    </Providers>
                </Suspense>
            </body>
        </html>
    );
}
