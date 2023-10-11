import Image from 'next/image';

const techStacksContent = ['html,css', 'js,ts', 'react,next', 'tailwind,styledcomponents'];

const TechStack = () => {
    return (
        <article className=" z-10 flex flex-col items-center lg:items-start">
            <p className="py-4 leading-7 tracking-wide">TECH STACK</p>
            <ul className="gap flex w-full flex-row flex-wrap items-center justify-center lg:justify-start ">
                {techStacksContent.map((item) => (
                    <li key={item} className="group mb-4 mr-6 cursor-pointer">
                        <Image
                            src={`https://skillicons.dev/icons?i=${item}`}
                            alt={item}
                            width={92}
                            height={46}
                            className="group-hover:animate-bounce"
                        />
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default TechStack;
