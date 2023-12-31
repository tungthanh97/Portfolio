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
                'mx-6 my-4 flex max-w-screen-max gap-2 lg:justify-evenly lg:gap-6 lg:p-8 even:lg:flex-row-reverse'
            )}
        >
            <div
                className={classNames(
                    'hidden max-w-[90vw] sm:block sm:min-w-[150px] sm:py-6 lg:min-w-[380px] lg:flex-1 lg:p-6 lg:text-right',
                    isReverse && 'lg:text-left'
                )}
            >
                <p className="text-base">{item.date}</p>
            </div>

            <div className="center-row relative z-10 mt-2 h-14 min-w-[50px]">
                <Image
                    src={`/images/${item.icon}`}
                    alt={item.icon}
                    fill={true}
                    sizes="50px"
                    className="relative h-10 w-10"
                />
            </div>

            <article
                className={classNames(
                    'glass flex max-w-[90vw] flex-grow flex-col gap-2 rounded-md p-4 sm:min-w-[380px] lg:flex-1 lg:p-6 [&>p]:break-words'
                    // "before:absolute before:right-0 before:top-4 before:h-6 before:w-6 before:border-8 before:border-cus before:content-['']"
                )}
            >
                <p className="block text-base text-[#777] sm:hidden">{item.date}</p>
                <p className="whitespace-pre-line text-2xl font-bold uppercase">{item.title}</p>
                <p className="cursor-help text-base text-custom-primary">{item.company}</p>
                <div className="content-base">
                    {item.descriptions.map((description) => (
                        <p className="py-1" key={description}>
                            {description}
                        </p>
                    ))}
                </div>
                <div className="flex flex-row flex-wrap gap-2 font-sans">
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
        </div>
    );
};
