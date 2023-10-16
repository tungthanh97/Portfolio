import { ExperienceItem } from './ExperienceItem';
import { experienceContent } from 'data/content/experience';

const ExperienceTimeline = () => {
    return (
        <section className="section-wrapper" id="experience-section">
            <div className="center-col lg:p-8">
                <h1 className="section-heading text-center">Experience</h1>
                <span className="divider center"></span>
                <p className="center section-subheading">
                    I have three years of experience in web development, specializing in HTML5,
                    CSS3, React, and TypeScript.
                </p>
            </div>
            <div className="relative my-10 pt-1">
                <span className="absolute left-16 top-0 h-full w-0 border border-custom-primary ssm:left-12 sm:left-52 lg:left-[calc(50%-1px)]" />
                {experienceContent.map((item, index) => (
                    <ExperienceItem key={item.id} item={item} isReverse={index % 2 === 0} />
                ))}

                <i className="arrow-up absolute -top-4 left-[33px]  border-b-custom-primary ssm:left-[41px] sm:left-[201px] lg:left-[calc(50%-8px)]"></i>
            </div>
        </section>
    );
};
export default ExperienceTimeline;
