export type MenuItemGroup = 'top' | 'bottom' | 'none';

export interface MenuLink {
    name: string;
    path: string;
    icon: string;
    group: MenuItemGroup;
    isExternal?: boolean;
}

export type ProductCategory = 'fuel' | 'food' | 'drinks';


export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: string;
    category: ProductCategory;
}