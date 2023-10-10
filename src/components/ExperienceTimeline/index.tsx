import { ExperienceItem } from './ExperienceItem';
import { experienceContent } from 'data/content/experience';

const ExperienceTimeline = () => {
    return (
        <section className="h-full w-full max-w-screen-max p-16" id="experience-section">
            <div className="center-col lg:p-8">
                <h1 className="section-heading text-center">Experience</h1>
                <span className="divider center"></span>
                <p className="center section-subheading">
                    I have been working as a software engineer for 3 years. I have experience in
                    building web applications, mobile applications, and desktop applications.
                </p>
            </div>
            <div className="relative my-10">
                <span className="absolute left-12 top-0 h-full w-0 border border-custom-primary sm:left-52 lg:left-[calc(50%-1px)]" />
                {experienceContent.map((item, index) => (
                    <ExperienceItem key={item.id} item={item} isReverse={index % 2 === 0} />
                ))}

                <i className="arrow-down absolute -bottom-4 left-[41px] border-t-custom-primary sm:left-[201px] lg:left-[calc(50%-8px)]"></i>
            </div>
        </section>
    );
};
export default ExperienceTimeline;
