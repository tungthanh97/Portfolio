import About from '@components/AboutSection';
import CertificationSection from '@components/CertificationsSection';
import ExperienceTimeline from '@components/ExperienceTimeline';

const AboutPage = () => {
    return (
        <section className="center-col w-full pt-32">
            <About />
            <ExperienceTimeline />
            <CertificationSection />
        </section>
    );
};

export default AboutPage;
