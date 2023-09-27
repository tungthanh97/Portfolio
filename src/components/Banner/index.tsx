import Avatar from './Avatar';
import BioDescription from './BioDescription';

const Banner = () => {
    return (
        <section className="h-max w-full lg:h-screen">
            <div className="center-row h-full bg-primary-white dark:bg-primary-black">
                <div className="my-[15vh] flex h-max w-full items-center justify-evenly py-32 lg:my-60 lg:h-screen">
                    <BioDescription />
                    <Avatar wrapperClassName="hidden h-max w-max lg:block" />
                </div>
            </div>
            <div className="flex items-center justify-center bg-primary-white p-36 dark:bg-primary-black lg:hidden">
                <Avatar wrapperClassName="min-h-max w-max" />
            </div>
        </section>
    );
};

export default Banner;
