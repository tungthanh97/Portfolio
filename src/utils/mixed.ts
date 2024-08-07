export const isDev = process.env.NODE_ENV === 'development';

export const isProd = process.env.NODE_ENV === 'production';

export function isClient() {
    return typeof window !== 'undefined';
}
