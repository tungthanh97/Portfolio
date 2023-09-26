import Banner from '@components/Banner';
import Contact from '@components/Contact';

export default function Home() {
    return (
        <main className="relative">
            <Banner />
            <div className="center-row fixed bottom-4 z-50 w-screen">
                <Contact />
            </div>
        </main>
    );
}
