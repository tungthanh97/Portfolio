import Link from 'next/link';
import { HTMLProps, LegacyRef, forwardRef } from 'react';

interface ILinkItemProps extends HTMLProps<HTMLLIElement> {
    link: string;
    title: string;
}

const NavBarItem = forwardRef(
    ({ link, title, ...props }: ILinkItemProps, ref: LegacyRef<HTMLLIElement>) => {
        return (
            <li className="-mx-2 flex" ref={ref} {...props}>
                <Link
                    className="cursor-pointer px-7 py-4 font-sans text-white mix-blend-difference"
                    href={link}
                >
                    {title}
                </Link>
            </li>
        );
    }
);

NavBarItem.displayName = 'NavBarItem';

export default NavBarItem;
