'use client';

import useMousePosition from 'hooks/useMousePosition';
import { useTheme } from 'providers/ThemeProvider';

const BackgroundEffect = () => {
    const { x, y } = useMousePosition();
    const { theme } = useTheme();
    const bgColor = theme === 'dark' ? 'rgba(29, 78, 216, 0.15)' : 'rgba(var(--color-light), 0.15)';

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300"
            style={{
                background: `radial-gradient(500px at ${x}px ${y}px, ${bgColor}, transparent 70%)`,
            }}
        >
            {/* <div
                className="rounded-circle fixed z-40 block h-6 w-6 border border-custom-inverted"
                style={{ top: `${x}px`, left: `${y}px` }}
            ></div> */}
        </div>
    );
};

export default BackgroundEffect;
