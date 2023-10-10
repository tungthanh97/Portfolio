import Image from 'next/image';

const About = () => {
    return (
        <section className="w-full max-w-screen-max">
            <div className="grid w-full grid-cols-12 px-5 text-custom-inverted md:py-10 lg:py-24">
                <article className="col-span-12 px-4 md:p-8 lg:col-span-8">
                    <div>
                        <h1 className="section-heading">Hi, I&apos;m Tung</h1>
                        <p className="section-subheading">
                            I&apos;m a design-minded, detail oriented software engineer passionate
                            about combining beautiful code with beautiful design.
                        </p>
                    </div>
                    <span className="divider"></span>

                    <figure className="my-10 h-[300px] w-[300px] overflow-hidden rounded-[50%] lg:hidden">
                        <Image src="/images/me.png" alt="me" width={300} height={300} />
                    </figure>

                    <div className="content-base pr-10">
                        I&apos;m a fourth year student at Northeastern University in Boston studying
                        computer science and interaction design. I have experience developing and
                        designing software for the web, from simple landing pages to progressive web
                        applications. I strive to create software that not only functions
                        efficiently under the hood, but also provides intuitive, pixel-perfect user
                        experiences. I love learning new and better ways to create seamless user
                        experiences with clean, efficient, and scalable code. I consider work an
                        ongoing education, and I&apos;m always looking for opportunities to work
                        with those who are willing to share their knowledge as much as I want to
                        learn. At the end of the day, my primary goal is to create something
                        beautiful with people that bring out the best in me. When I&apos;m not in
                        front of a computer screen, I&apos;m probably snowboarding, traveling,
                        petting dogs, or learning a new song on my uke.
                    </div>
                </article>
                <div className="lg:center-col col-span-4 hidden xl:col-start-9 2xl:col-start-10">
                    <figure className="relative h-[30vw] max-h-[500px] min-h-[380px] w-[26vw] min-w-[320px] max-w-[430px] overflow-hidden rounded-[50%]">
                        <Image src="/images/me.png" alt="me" fill />
                    </figure>
                </div>{' '}
            </div>
        </section>
    );
};

export default About;
