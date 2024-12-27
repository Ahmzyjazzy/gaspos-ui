import { MenuLink, ProductCategory } from "@/types";

export const menuLinks: MenuLink[] = [
    {
        name: 'Home',
        path: '/',
        icon: 'home',
        group: 'top'
    },
    {
        name: 'Food',
        path: '/?category=food',
        icon: 'food',
        group: 'top'
    },
    {
        name: 'Drinks',
        path: '/?category=drinks',
        icon: 'drinks',
        group: 'top'
    },
    {
        name: 'Service',
        path: '/service',
        icon: 'service',
        group: 'bottom'
    },
    {
        name: 'Help',
        path: '/help',
        icon: 'help',
        group: 'bottom'
    }
]

// generate 50 products 10 fuel product, 15 food product, 25 drinks product, for fuel product
export const mockProducts = Array.from({ length: 50 }, (_, i) => {
    const category = i < 10 ? 'fuel' : i < 25 ? 'food' : 'drinks';
    return {
        id: i.toString(),
        name: `${category} ${i}`,
        description: `This is a ${category} product`,
        price: Math.floor(Math.random() * 100),
        image: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX${i}`,
        category: category as ProductCategory
    }
});