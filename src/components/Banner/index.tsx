import { FULLNAME } from 'data/constants/common';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="flex items-center justify-center bg-gradient-primary">
            <div className="my-60 flex h-max w-full justify-evenly">
                <article className="lg:max-w-[30vw]">
                    <h1 className="text-primary-green  pr-4 text-7xl">Frontend Developer.</h1>
                    <p className="my-6 text-xl leading-relaxed text-white">
                        I like to craft solid and scalable frontend products with great user
                        experiences.
                    </p>
                </article>
                <figure className="relative h-max w-max">
                    <Image
                        alt="avatar-background"
                        src="/images/avatar-bg.svg"
                        width={701}
                        height={935}
                        className="max-w-max absolute -right-36 -top-1/4"
                    />
                    <picture className="relative z-10 block h-96 w-96 border border-white">
                        <Image
                            alt="My avatar"
                            src="/images/avatar.png"
                            fill={true}
                            // sizes="(max-width: 1023px) 80vw, (min-width: 1024px) and (max-width: 1279px) 50vw, (min-width: 1280px) 900px"
                            className="absolute !-top-10 !right-8 items-center object-cover"
                        />
                    </picture>
                </figure>
            </div>
        </section>
    );
};

export default Banner;
