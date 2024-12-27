import { MenuLink } from "@/types";

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