import React from 'react';

interface IMousePosition {
    x: number | null;
    y: number | null;
}

const useMousePosition = ({ includeTouch = true }) => {
    const [mousePosition, setMousePosition] = React.useState<IMousePosition>({ x: null, y: null });

    React.useEffect(() => {
        const updateMousePosition = (e: MouseEvent | TouchEvent) => {
            let x, y;
            const { touches } = e as TouchEvent;
            const { clientX, clientY } = e as MouseEvent;
            if (touches !== undefined) {
                const touch = touches[0];
                [x, y] = [touch.clientX, touch.clientY];
            } else {
                [x, y] = [clientX, clientY];
            }
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', updateMousePosition);
        if (includeTouch) {
            window.addEventListener('touchmove', updateMousePosition);
        }

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            if (includeTouch) {
                window.removeEventListener('touchmove', updateMousePosition);
            }
        };
    }, [includeTouch]);

    return mousePosition;
};
export default useMousePosition;
