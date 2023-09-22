import { FULLNAME } from 'data/constants/common';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link className="underlined font-quantum text-3xl font-bold" href="/">
            {FULLNAME}
        </Link>
    );
};

export default Logo;
