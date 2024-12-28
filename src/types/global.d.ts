import { CurrencyCode } from "@/constants";

export type MenuItemGroup = 'top' | 'bottom' | 'none';

export interface MenuLink {
    name: string;
    path: string;
    slug: string;
    group: MenuItemGroup;
    icon?: string;
    isExternal?: boolean;
}

export type ProductCategory = 'fuel' | 'food' | 'drinks';


export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: ProductCategory;
    currency: CurrencyCode;
    image?: string;
    colorCode?: string;
}