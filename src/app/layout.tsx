import PageHeader from '@components/Header';
import classNames from '@lib/classNames';
import '@styles/global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
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

export const metadata: Metadata = {
    title: 'Tom Portfolio',
    description: 'Portfolio created by Tom',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={classNames(calFont.className, inter.className)}>
                <PageHeader />
                {children}
            </body>
        </html>
    );
}
