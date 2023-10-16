export interface ILinkItem {
    link: string;
    title: string;
}

export interface ILinkItemWithIcon extends ILinkItem {
    icon: React.ReactNode;
}