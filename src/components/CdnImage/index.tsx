'use client';

import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import cdnImageLoader from './cdnImageLoader';
import { HTMLAttributes } from 'react';

interface ICdnImageProps {
    src: string;
    alt: string;
    width?: number | `${number}`;
    height?: number | `${number}`;
    fill?: boolean;
    quality?: number | `${number}`;
    priority?: boolean;
    loading?: 'eager' | 'lazy';
    placeholder?: PlaceholderValue;
    blurDataURL?: string;
    layout?: string;
    objectFit?: string;
    objectPosition?: string;
    sizes?: string;
    className?: HTMLAttributes<HTMLImageElement>['className'];
}

const CdnImage = ({ alt, ...props }: ICdnImageProps) => (
    <Image {...props} loader={cdnImageLoader} alt={alt} />
);

export default CdnImage;
