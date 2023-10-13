import Image from 'next/image';
import AvatarBackground from './AvatarBackground';
import classNames from '@package/lib/utils/classNames';
import { TClassName } from '@package/lib/types/components';
import './index.css';

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
                        src="/images/avatar.png"
                        fill
                        priority={false}
                        quality={70}
                        placeholder="empty"
                        className="items-center object-cover"
                    />
                </picture>
            </div>
        </div>
    );
};

export default Avatar;
