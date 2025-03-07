import { MenuLink, DropdownSelectOption } from "@/types";
import { QrCodeIcon, BanknotesIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import { ReactElement } from "react";

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
        icon: '/menus/fuel.png',
        group: 'top'
    },
    {
        name: 'Food',
        path: '/?category=food',
        slug: 'food',
        icon: '/menus/food.png',
        group: 'top',
    },
    {
        name: 'Drinks',
        path: '/?category=drinks',
        slug: 'drinks',
        icon: '/menus/drinks.png',
        group: 'top'
    },
    {
        name: 'Service',
        path: '/service',
        slug: 'service',
        icon: '/menus/service.png',
        group: 'bottom'
    },
    {
        name: 'Help',
        path: '/help',
        slug: 'help',
        icon: '/menus/help.png',
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

export const paymentMethods: DropdownSelectOption[] = [
    {
        name: 'Cash',
        value: 'cash',
    },
    {
        name: 'Debit Card',
        value: 'debit-card',
    },
    {
        name: 'E-Wallet',
        value: 'e-wallet',
    }
];

export const iconLibrary: Record<string, ReactElement> = {
    'cash': <BanknotesIcon className="w-6 h-6 text-gray-400" />,
    'debit-card': <CreditCardIcon className="w-6 h-6 text-gray-400" />,
    'e-wallet': <QrCodeIcon className="w-6 h-6 text-gray-400" />,
};