import Link from 'next/link';
import NavBar from './NavBar';

const PageHeader = () => {
    return (
        <section className="sticky top-4 z-50 mx-auto flex w-full px-4">
            <div className="flex w-full justify-between px-4 py-6">
                <div className="relative flex items-center bg-white py-1 pl-[5vw]">
                    <Link className="underlined text-2xl font-medium" href="/">
                        Tung T.Pham
                    </Link>
                </div>

                <NavBar />

                <button className="-m-2 ml-auto p-2 lg:hidden" aria-label="Open menu">
                    Menu
                </button>
                <Link
                    className="rounded-4xl flex h-14 items-center justify-center bg-primary-700 px-8 uppercase text-white transition-all duration-200 ease-in-out hover:rounded-2xl"
                    href="/login"
                >
                    Login
                </Link>
            </div>
            1
        </section>
    );
};

export default PageHeader;
