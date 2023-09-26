import Image from 'next/image';
import AvatarBackground from './AvatarBackground';

const Banner = () => {
    return (
        <section className="h-screen w-full">
            <div className="center-row h-full bg-white dark:bg-primary-black">
                <div className="my-[20vh] flex h-max w-full items-center justify-evenly lg:my-60 lg:h-screen">
                    <article className="lg:max-w-[30vw]">
                        <h1 className="pr-4 text-7xl text-custom-primary">Frontend Developer.</h1>
                        <p className="my-6 text-xl leading-relaxed text-white mix-blend-difference">
                            I like to craft solid and scalable frontend products with great user
                            experiences.
                        </p>
                    </article>
                    <figure className="relative hidden h-max w-max lg:block">
                        <div className="absolute -right-36 -top-1/4 max-w-max">
                            <AvatarBackground className="fill-custom-primary" />
                        </div>
                        <picture className="dark:border-grey-100 relative z-10 block h-96 w-96 border border-primary-black bg-blend-difference">
                            <Image
                                alt="My avatar"
                                src="/images/avatar.png"
                                fill={true}
                                className="absolute !-left-8 !-top-10 items-center object-cover"
                            />
                        </picture>
                    </figure>
                </div>
            </div>
            <div className="flex items-center justify-center bg-white p-36 dark:bg-primary-black lg:hidden">
                <figure className="relative h-max w-max">
                    <div className="absolute -right-36 -top-1/4  max-w-max">
                        <AvatarBackground className="fill-custom-primary" />
                    </div>
                    {/* <Image
                        alt="avatar-background"
                        src="/images/avatar-bg.svg"
                        width={701}
                        height={935}
                        className="absolute -right-36 -top-1/4 max-w-max"
                    /> */}
                    <picture className="dark:border-grey-100 relative z-10 block h-96 w-96 border border-primary-black bg-blend-difference ">
                        <Image
                            alt="My avatar"
                            src="/images/avatar.png"
                            fill={true}
                            className="absolute !-left-8 !-top-10 items-center object-cover"
                        />
                    </picture>
                </figure>
            </div>
        </section>
    );
};

export default Banner;
