import Avatar from './Avatar';
import BioDescription from './BioDescription';
import TechStack from './TechStack';

const Banner = () => {
    return (
        <section className="center-col h-max w-screen lg:h-screen lg:overflow-clip">
            <div className="center-row h-full w-full max-w-[2000px] bg-custom-background">
                <div className="flex h-max  w-full items-center justify-evenly py-32 lg:my-[4vw] ">
                    <div className="flex h-[70vh] flex-col px-2 py-10 lg:max-h-[1200px] lg:max-w-[36vw]">
                        <div className="center-col flex-grow">
                            <BioDescription />
                        </div>
                        <TechStack />
                    </div>

                    <Avatar wrapperClassName="hidden h-3/4 w-max lg:block pb-12 py-10" />
                </div>
            </div>
            <div className="flex items-center justify-center bg-custom-background p-36 lg:hidden ">
                <Avatar wrapperClassName="min-h-max w-max" />
            </div>
        </section>
    );
};

export default Banner;
