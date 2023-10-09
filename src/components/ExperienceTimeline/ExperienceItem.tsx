import classNames from '@package/lib/utils/classNames';
import { IExperienceItem } from './type';
import Image from 'next/image';

export const ExperienceItem = ({
    item,
    isReverse,
}: {
    item: IExperienceItem;
    isReverse: boolean;
}) => {
    return (
        <div
            key={item.id}
            className={classNames(
                'mx-6 my-4 flex max-w-screen-max justify-evenly gap-6 p-8 ',
                isReverse && 'flex-row-reverse'
            )}
        >
            <article className="glass flex min-w-[500px] flex-1 flex-col gap-2 rounded-md p-4">
                <p className="text-2xl font-bold uppercase text-custom-inverted">{item.title}</p>
                <p className="cursor-help text-base text-custom-primary">{item.company}</p>
                <p className="font-sans text-base text-custom-inverted">{item.description}</p>
                <div className="flex flex-row gap-2 font-sans">
                    {item.tags.map((tag) => (
                        <span
                            key={tag}
                            className="h-max w-max rounded-2xl bg-custom-primary/20 px-2 py-1 text-sm text-custom-primary "
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </article>

            <div className="center-row relative h-14 w-14 text-custom-inverted translate-z-8">
                <Image
                    src={`/images/${item.icon}`}
                    alt={item.icon}
                    fill={true}
                    className="relative h-10 w-10"
                />
            </div>

            <div className={classNames('min-w-[500px] flex-1 p-4', isReverse && 'text-right')}>
                <p className="text-base text-custom-inverted">{item.date}</p>
            </div>
        </div>
    );
};
