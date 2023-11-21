import Image from 'next/image';

const techStacksContent = [
    'html,css',
    'js,ts',
    'react,next',
    'tailwind,styledcomponents',
    'nodejs,nestjs',
];

const TechStack = () => {
    return (
        <article className=" z-10 flex flex-col items-center lg:items-start">
            <p className="py-4 leading-7 tracking-wide">TECH STACK</p>
            <ul className="flex w-full flex-row flex-wrap items-center justify-center gap-6 lg:justify-start ">
                {techStacksContent.map((item) => (
                    <li key={item} className="group cursor-pointer">
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
