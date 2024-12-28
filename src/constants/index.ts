import { MenuLink } from "@/types";

export const menuLinks: MenuLink[] = [
    {
        name: 'Home',
        path: '/',
        slug: 'home',
        group: 'top'
    },
    {
        name: 'Fuel',
        path: '/?category=fuel',
        slug: 'fuel',
        group: 'top'
    },
    {
        name: 'Food',
        path: '/?category=food',
        slug: 'food',
        group: 'top'
    },
    {
        name: 'Drinks',
        path: '/?category=drinks',
        slug: 'drinks',
        group: 'top'
    },
    {
        name: 'Service',
        path: '/service',
        slug: 'service',
        group: 'bottom'
    },
    {
        name: 'Help',
        path: '/help',
        slug: 'help',
        group: 'bottom'
    }
];

export enum CurrencyCode {
    NGN = 'NGN',
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
    CAD = 'CAD',
    AUD = 'AUD',
    JPY = 'JPY',
    CNY = 'CNY',
    INR = 'INR',
    KRW = 'KRW',
    RUB = 'RUB',
    BRL = 'BRL',
    ZAR = 'ZAR',
    MXN = 'MXN',
    HKD = 'HKD',
    NZD = 'NZD',
    SGD = 'SGD',
    THB = 'THB',
    IDR = 'IDR',
    MYR = 'MYR',
    PHP = 'PHP',
    PKR = 'PKR',
    LKR = 'LKR',
    VND = 'VND',
    KES = 'KES',
    TZS = 'TZS',
    UGX = 'UGX',
    GHS = 'GHS',
    ZMW = 'ZMW'
}

export const currencySymbolMapping: Record<string, string> = {
    'NGN': '₦',
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'CAD': 'C$',
    'AUD': 'A$',
    'JPY': '¥',
    'CNY': '¥',
    'INR': '₹',
    'KRW': '₩',
    'RUB': '₽',
    'BRL': 'R$',
    'ZAR': 'R',
    'MXN': '$',
    'HKD': 'HK$',
    'NZD': 'NZ$',
    'SGD': 'S$',
    'THB': '฿',
    'IDR': 'Rp',
    'MYR': 'RM',
    'PHP': '₱',
    'PKR': '₨',
    'LKR': '₨',
    'VND': '₫',
    'KES': 'KSh',
    'TZS': 'TSh',
    'UGX': 'USh',
    'GHS': 'GH₵',
    'ZMW': 'ZK',
};