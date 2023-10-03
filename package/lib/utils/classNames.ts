import { extendTailwindMerge, twMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
    classGroups: {
        'translate-z': [{ 'translate-z': ['0', '10', '20'] }],
        'rotate-z': [{ 'rotate-z': ['0', '45', '90', '180'] }],
    },
});

export default function classNames(...classes: unknown[]) {
    return customTwMerge(classes.filter(Boolean).join(' '));
}
