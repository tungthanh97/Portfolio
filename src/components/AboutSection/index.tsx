import aboutImage from './aboutImage';
import CdnImage from '@components/CdnImage';

const About = () => {
    return (
        <section className="w-full max-w-screen-max" id="about-section">
            <div className="grid w-full grid-cols-12 px-2 sm:px-5 md:py-10 lg:py-24">
                <article className="col-span-12 px-2 sm:px-4 md:p-8 lg:col-span-8">
                    <div>
                        <h1 className="section-heading">Hi, I&apos;m Tung</h1>
                        <p className="section-subheading">
                            I&apos;m a tireless seeker of knowledge, occassional purveyor of wisdom
                            and also, coincidentally a web developer.
                        </p>
                    </div>
                    <span className="divider"></span>

                    <figure className="my-10 h-[300px] max-h-[90vw] w-[280px] max-w-[90vw] overflow-hidden rounded-[50%] lg:hidden">
                        <CdnImage {...aboutImage} quality={60} alt="me" width={280} height={280} />
                    </figure>

                    <div className="content-base text-left lg:pr-10 [&>p]:pt-2">
                        <p>
                            I have experience <strong>developing software for the web</strong>,
                            ranging from basic <strong>landing pages</strong> to advanced
                            progressive <strong>web applications</strong>. My passion lies in{' '}
                            <strong>crafting software</strong> to tackle{' '}
                            <strong>others &apos;s problems</strong> and in delivering{' '}
                            <strong>flawless</strong>, <strong>user-friendly</strong> interfaces.
                        </p>

                        <p>
                            I&apos;m enthusiastic about continually expanding my knowledge and
                            adopting more effective methods to produce seamless user experiences
                            through <strong>clean, efficient, and scalable</strong> code. In my
                            freetime, I enjoy <strong>exploring</strong> new technologies, or{' '}
                            <strong>diving deep</strong> into the ones I utilized by either{' '}
                            <strong>reading or rewriting</strong> my own version of it to gain
                            insights into problem-solving approaches.
                        </p>

                        <p>
                            When I&apos;m not at the computer, I&apos;m usually hanging out with my
                            wife and kid, running or cooking.
                        </p>
                    </div>
                </article>
                <div className="lg:center-col col-span-4 hidden xl:col-start-9 2xl:col-start-10">
                    <figure className="relative h-[clamp(380px,30vw,500px)] w-[clamp(320px,26vw,430px)] overflow-hidden rounded-[50%]">
                        <CdnImage {...aboutImage} alt="me" fill />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default About;
