import { cva, VariantProps } from 'class-variance-authority';
import { ButtonOrLink, ButtonOrLinkProps } from './ButtonOrLink';

const buttonStyles = cva(
    'font-matter text-md shadow-fill hover:shadow-grow active:shadow-shrink group mx-auto flex h-max w-full items-center justify-center rounded-4xl border-2 border-custom-primary p-2 px-8 transition-all duration-150 ease-in-out will-change-transform hover:translate-y-[-2px] active:translate-y-[2px] active:duration-100'
);

export interface ButtonProps extends ButtonOrLinkProps, VariantProps<typeof buttonStyles> {
    title?: string;
}

const Button = ({ title, ...props }: ButtonProps) => {
    return (
        <ButtonOrLink {...props} className={buttonStyles()}>
            {title || props.children}
        </ButtonOrLink>
    );
};

export default Button;
