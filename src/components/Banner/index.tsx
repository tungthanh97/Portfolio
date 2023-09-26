import Avatar from './Avatar';

const Banner = () => {
    return (
        <section className="h-screen w-full">
            <div className="center-row bg-primary-white h-full dark:bg-primary-black">
                <div className="my-[20vh] flex h-max w-full items-center justify-evenly lg:my-60 lg:h-screen">
                    <article className="lg:max-w-[30vw]">
                        <h1 className="pr-4 text-7xl text-custom-primary">Frontend Developer.</h1>
                        <p className="my-6 text-xl leading-relaxed text-white mix-blend-difference">
                            I like to craft solid and scalable frontend products with great user
                            experiences.
                        </p>
                    </article>
                    <Avatar wrapperClassName="hidden h-max w-max lg:block" />
                </div>
            </div>
            <div className="bg-primary-white flex items-center justify-center p-36 dark:bg-primary-black lg:hidden">
                <Avatar wrapperClassName="h-max w-max" />
            </div>
        </section>
    );
};

export default Banner;
