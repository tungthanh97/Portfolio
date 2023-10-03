import Avatar from './Avatar';
import BioDescription from './BioDescription';
import TechStack from './TechStack';

const Banner = () => {
    return (
        <section className="h-max min-h-[500px] w-full lg:h-screen">
            <div className="center-row bg-custom-background h-full">
                <div className="flex h-max w-full items-center justify-evenly py-32 lg:my-60 lg:h-screen">
                    <div className="flex h-[70vh] flex-col px-2 py-10 lg:max-w-[36vw]">
                        <div className="center-col flex-grow">
                            <BioDescription />
                        </div>
                        <TechStack />
                    </div>

                    <Avatar wrapperClassName="hidden h-3/4 w-max lg:block pb-12" />
                </div>
            </div>
            <div className="bg-custom-background flex items-center justify-center p-36 lg:hidden">
                <Avatar wrapperClassName="min-h-max w-max" />
            </div>
        </section>
    );
};

export default Banner;
