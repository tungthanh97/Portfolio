'use client';

import Script from 'next/script';

const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID?: string }) => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
                strategy="afterInteractive"
                id="google-analytics"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                   
                    gtag('config', '${GA_TRACKING_ID}',{
                        page_path: window.location.pathname,
                    });
                `,
                }}
            />
        </>
    );
};

export default GoogleAnalytics;
