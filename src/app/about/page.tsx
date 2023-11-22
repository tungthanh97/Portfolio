import About from '@components/AboutSection';
import CertificationSection from '@components/CertificationsSection';
import ExperienceTimeline from '@components/ExperienceTimeline';
import MainLayout from '../../components/MainLayout/MainLayout';

const AboutPage = () => {
    return (
        <MainLayout>
            <About />
            <ExperienceTimeline />
            <CertificationSection />
        </MainLayout>
    );
};

export default AboutPage;
