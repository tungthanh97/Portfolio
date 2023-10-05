'use client';

import useMousePosition from 'hooks/useMousePosition';

const BackgroundEffect = () => {
    const { x, y } = useMousePosition();

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30  transition duration-300 lg:absolute"
            style={{
                background: `radial-gradient(500px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
            }}
        ></div>
    );
};

export default BackgroundEffect;
