import Image from 'next/image';
import AvatarBackground from './AvatarBackground';
import classNames from '@package/lib/utils/classNames';
import { TClassName } from '@package/lib/types/components';

const Avatar = ({ wrapperClassName }: { wrapperClassName: TClassName }) => {
    return (
        <figure className={classNames('relative', wrapperClassName)}>
            <div className="absolute -right-28 -top-16 z-0 max-w-max">
                <AvatarBackground className="h-[580px] w-[700px] fill-custom-primary" />
            </div>
            <picture className="relative z-10 block h-96 w-96 border border-primary-black bg-blend-difference dark:border-grey-100 ">
                <Image
                    alt="My avatar"
                    src="/images/avatar.png"
                    fill={true}
                    priority={false}
                    placeholder="empty"
                    sizes='width="22rem" height="22rem"'
                    className="absolute !-left-8 !-top-10 items-center object-cover"
                />
            </picture>
        </figure>
    );
};

export default Avatar;
