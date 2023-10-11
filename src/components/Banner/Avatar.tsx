import Image from 'next/image';
import AvatarBackground from './AvatarBackground';
import classNames from '@package/lib/utils/classNames';
import { TClassName } from '@package/lib/types/components';
import './index.css';

const Avatar = ({ wrapperClassName }: { wrapperClassName: TClassName }) => {
    return (
        <div className={classNames('relative', wrapperClassName)}>
            <div className="absolute -right-28 -top-16 z-0 max-w-max">
                <AvatarBackground className="h-[580px] w-[700px] fill-custom-primary" />
            </div>
            <picture className="image-outline max-w-screen relative z-10 block h-max w-max dark:border-grey-100">
                <Image
                    alt="My avatar"
                    src="/images/avatar.png"
                    width={400}
                    height={400}
                    priority={false}
                    placeholder="empty"
                    className="items-center object-cover"
                />
            </picture>
        </div>
    );
};

export default Avatar;
