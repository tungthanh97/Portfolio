import Link from 'next/link';
import { HTMLProps, LegacyRef, forwardRef } from 'react';

interface INavBarItemProps extends HTMLProps<HTMLLIElement> {
    link: string;
    title: string;
}

const NavBarItem = forwardRef(
    ({ link, title, ...props }: INavBarItemProps, ref: LegacyRef<HTMLLIElement>) => {
        return (
            <li className="-mx-2 flex" ref={ref} {...props}>
                <Link
                    className="text-primary cursor-pointer px-7 py-4 text-white mix-blend-difference"
                    href={link}
                >
                    {title}
                </Link>
            </li>
        );
    }
);

export default NavBarItem;
