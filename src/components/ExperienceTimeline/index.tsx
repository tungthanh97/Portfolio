import { ExperienceItem } from './ExperienceItem';
import { experienceContent } from 'data/constants/experienceContent';

const ExperienceTimeline = () => {
    return (
        <section className="relative h-full w-full max-w-screen-max">
            <span className="absolute left-12 top-0 h-full w-0 border border-custom-primary sm:left-52 lg:left-[50%]" />
            {experienceContent.map((item, index) => (
                <ExperienceItem key={item.id} item={item} isReverse={index % 2 === 0} />
            ))}
        </section>
    );
};
export default ExperienceTimeline;
