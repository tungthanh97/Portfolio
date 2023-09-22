import Link from 'next/link';
import NavBar from '@package/lib/components/NavBar';
import RollingBox from '@package/lib/components/RollingBox/RollingBox';
import { FULLNAME } from 'data/constants/common';
import classNames from '@package/lib/utils/classNames';
import MenuToggle from '@package/lib/components/MenuToggle';
import { navBarContent } from 'data/constants/navigationItems';

const PageHeader = () => {
    return (
        <section className="fixed top-4 z-50 mx-auto flex w-full px-4">
            <div className="flex w-full justify-between px-4 py-6">
                <div className="relative flex items-center  py-1 pl-[5vw]">
                    <Link className="underlined text-2xl font-medium text-primary-green" href="/">
                        {FULLNAME}
                    </Link>
                </div>

                <NavBar navBarContent={navBarContent} />

                {/* mobile menu toggle */}
                <div className="flex items-center pr-[5vw] lg:hidden">
                    <MenuToggle navBarContent={navBarContent} />
                </div>

                <div className={classNames('lg:center-row hidden h-full')}>
                    <RollingBox />
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
