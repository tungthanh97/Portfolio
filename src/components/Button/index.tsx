import classNames from '@package/lib/utils/classNames';
import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    title?: string;
}

const Button = ({ title, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={classNames(
                'font-matter text-md shadow-fill hover:shadow-grow active:shadow-shrink group mx-auto flex h-max w-full items-center justify-center rounded-4xl border-2 border-custom-primary p-2 px-8 transition-all duration-150 ease-in-out will-change-transform hover:translate-y-[-2px] active:translate-y-[2px] active:duration-100',
                props.className
            )}
        >
            {title || props.children}
        </button>
    );
};

export default Button;
