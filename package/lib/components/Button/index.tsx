import { cva, VariantProps } from 'class-variance-authority';
import { ButtonOrLink, ButtonOrLinkProps } from './ButtonOrLink';

const buttonStyles = cva(
    'font-matter text-md enabled:shadow-fill enabled:hover:shadow-grow enabled:active:shadow-shrink group mx-auto flex h-max w-full items-center justify-center rounded-4xl border-2 border-custom-primary p-2 px-8 transition-all duration-150 ease-in-out will-change-transform enabled:hover:translate-y-[-2px] enabled:active:translate-y-[2px] active:duration-100 disabled:text-[#5a7184] disabled:border-[#5a7184]'
);

export interface ButtonProps extends ButtonOrLinkProps, VariantProps<typeof buttonStyles> {
    title?: string;
}

const Button = ({ title, className, ...props }: ButtonProps) => {
    return (
        <ButtonOrLink {...props} className={buttonStyles({ className })}>
            {title ?? props.children}
        </ButtonOrLink>
    );
};

export default Button;
