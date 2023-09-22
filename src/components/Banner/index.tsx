import Image from 'next/image';

const Banner = () => {
    return (
        <section className="h-max w-full">
            <div className="center-row bg-primary-blue lg:bg-gradient-primary">
                <div className="my-60 flex h-max w-full justify-evenly">
                    <article className="lg:max-w-[30vw]">
                        <h1 className="pr-4  text-7xl text-primary-green">Frontend Developer.</h1>
                        <p className="my-6 text-xl leading-relaxed text-white">
                            I like to craft solid and scalable frontend products with great user
                            experiences.
                        </p>
                    </article>
                    <figure className="relative hidden h-max w-max lg:block">
                        <Image
                            alt="avatar-background"
                            src="/images/avatar-bg.svg"
                            width={701}
                            height={935}
                            className="absolute -right-36 -top-1/4 max-w-max"
                        />
                        <picture className="relative z-10 block h-96 w-96 border border-white">
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
            <div className="flex  items-center justify-center bg-primary-green p-36 lg:hidden">
                <figure className="relative h-max w-max">
                    <Image
                        alt="avatar-background"
                        src="/images/avatar-bg.svg"
                        width={701}
                        height={935}
                        className="absolute -right-36 -top-1/4 max-w-max"
                    />
                    <picture className="relative z-10 block h-96 w-96 border border-white">
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
