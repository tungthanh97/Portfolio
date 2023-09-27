import { useEffect, useRef } from 'react';

const getInitialScrollY = () => {
    if (typeof window !== 'undefined') {
        return window.scrollY;
    }
    return 0;
};

interface IUseScrollDirection {
    onScrollUp?: () => void;
    onScrollDown?: () => void;
}

const useScrollDirection = ({ onScrollUp, onScrollDown }: IUseScrollDirection) => {
    const scrollY = useRef(getInitialScrollY());

    useEffect(() => {
        const handleScroll = (event: Event) => {
            const currentScrollY = (event?.target as HTMLDivElement)?.scrollTop || 0;
            if (currentScrollY > scrollY.current) {
                onScrollDown?.();
            } else {
                onScrollUp?.();
            }
            scrollY.current = currentScrollY;
        };

        document.body.addEventListener('scroll', handleScroll);

        return () => {
            document.body.removeEventListener('scroll', handleScroll);
        };
    }, []);
};

export default useScrollDirection;
