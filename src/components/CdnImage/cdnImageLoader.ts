import { ImageLoaderProps } from 'next/image';

const cdnImageLoader = ({ src, width }: ImageLoaderProps) => {
    const previewWidth = width > 3000 ? 3000 : width;

    return `https://ucarecdn.com/${src}/-/preview/${previewWidth}x${previewWidth}/-/quality/smart/-/format/auto/`;
};

export default cdnImageLoader;
