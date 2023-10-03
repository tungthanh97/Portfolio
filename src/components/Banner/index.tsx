import Avatar from './Avatar';
import BioDescription from './BioDescription';

const Banner = () => {
    return (
        <section className="h-max w-full lg:h-screen">
            <div className="center-row bg-custom-background h-full">
                <div className="my-[15vh] flex h-max w-full items-center justify-evenly py-32 lg:my-60 lg:h-screen">
                    <BioDescription />
                    <Avatar wrapperClassName="hidden h-max w-max lg:block" />
                </div>
            </div>
            <div className="bg-custom-background flex items-center justify-center p-36 lg:hidden">
                <Avatar wrapperClassName="min-h-max w-max" />
            </div>
        </section>
    );
};

export default Banner;
