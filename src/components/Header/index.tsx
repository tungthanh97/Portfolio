import Link from 'next/link';
import NavBar from './NavBar';
import RollingBox from './RollingBox/RollingBox';
import { FULLNAME } from 'data/constants/common';

const PageHeader = () => {
    return (
        <section className="fixed top-4 z-50 mx-auto flex w-full px-4">
            <div className="flex w-full justify-between px-4 py-6">
                <div className="relative flex items-center  py-1 pl-[5vw]">
                    <Link className="underlined text-primary-green text-2xl font-medium" href="/">
                        {FULLNAME}
                    </Link>
                </div>

                <NavBar />

                {/* <button className="-m-2 ml-auto p-2 lg:hidden" aria-label="Open menu">
                    Menu
                </button> */}

                <RollingBox />
            </div>
        </section>
    );
};

export default PageHeader;
