'use client';

import Image, { ImageLoaderProps } from 'next/image';
import AvatarBackground from './AvatarBackground';
import classNames from '@package/lib/utils/classNames';
import { TClassName } from '@package/lib/types/components';
import './index.css';

const cdnImageLoader = ({ src, width }: ImageLoaderProps) => {
    return `https://ucarecdn.com${src}/-/preview/${width}x${width}/-/format/auto/-`;
};

const Avatar = ({ wrapperClassName }: { wrapperClassName: TClassName }) => {
    return (
        <div className={classNames('relative', wrapperClassName)}>
            <div className="absolute -right-20 -top-16 z-0 max-w-max sm:-right-28 ">
                <AvatarBackground className="h-[480px] w-[550px] fill-custom-primary sm:h-[600px] sm:w-[700px]" />
            </div>
            <div className="image-outline">
                <picture className="relative z-10 block h-80 w-80 sm:h-96 sm:w-96">
                    <Image
                        alt="My avatar"
                        src="/0e9ee6cc-ab20-43e2-ae88-b1f521796ac6"
                        loader={cdnImageLoader}
                        fill
                        priority={false}
                        quality={70}
                        placeholder="empty"
                        sizes="(max-width: 640px) 100vw, (max-width: 640px) 50vw, 30vw"
                        className="items-center object-cover"
                    />
                </picture>
            </div>
        </div>
    );
};

export default Avatar;
