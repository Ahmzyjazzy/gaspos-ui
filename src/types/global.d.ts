export type MenuItemGroup = 'top' | 'bottom' | 'none';

export interface MenuLink {
    name: string;
    path: string;
    icon: string;
    group: MenuItemGroup;
    isExternal?: boolean;
}