import { ComponentProps } from 'react';

export type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;

/**
 * This is a base component that will render either a button or a link,
 * depending on the props that are passed to it. The link rendered will
 * also correctly get wrapped in a next/link component to ensure ideal
 * page-to-page transitions.
 */
export function ButtonOrLink({ href, ...props }: ButtonOrLinkProps) {
    const isLink = typeof href !== 'undefined';

    if (isLink) return <a href={href} {...props} />;

    return <button {...props} />;
}
