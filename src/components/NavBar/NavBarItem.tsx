import Link from 'next/link';
import { HTMLProps, LegacyRef, forwardRef } from 'react';

interface INavBarItemProps extends HTMLProps<HTMLLIElement> {
    link: string;
    title: string;
}

const NavBarItem = forwardRef(
    ({ link, title, ...props }: INavBarItemProps, ref: LegacyRef<HTMLLIElement>) => {
        return (
            <li className="flex -mx-2" ref={ref} {...props}>
                <Link
                    className="cursor-pointer px-7 py-4 mix-blend-difference text-white"
                    href={link}
                >
                    {title}
                </Link>
            </li>
        );
    }
);

export default NavBarItem;
