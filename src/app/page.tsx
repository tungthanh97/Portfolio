import { FULLNAME } from 'data/constants/common';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="relative mx-[10vw] min-h-screen max-w-screen-max">
            <section className="max-h-75vh flex h-full w-full flex-col place-items-center gap-x-4 lg:flex-row-reverse lg:px-0">
                <picture className="relative flex h-full items-center overflow-hidden lg:h-2/3 ">
                    <Image
                        alt="My avatar"
                        src="/images/avatar.png"
                        width={480}
                        height={480}
                        // sizes="(max-width: 1023px) 80vw, (min-width: 1024px) and (max-width: 1279px) 50vw, (min-width: 1280px) 900px"
                        className="h-auto w-full items-center object-cover"
                    />
                </picture>
                <article className=" flex w-full flex-col">
                    <div>Hello! I am</div>
                    <div>{FULLNAME}</div>
                    <div>Frontend Developer</div>
                </article>
            </section>
        </main>
    );
}
