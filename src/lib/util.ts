import { currencySymbolMapping } from "@/constants";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatAmount(amount: number, currencyCode: string = 'NGN') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
    }).format(amount).replace(currencyCode, currencySymbolMapping[currencyCode]);
}

export function getInitial(productName: string): string {
    const hyphenNumberMatch = productName.match(/-(\d{2})$/);
    if (hyphenNumberMatch) {
        return hyphenNumberMatch[1]; // Return the last two digits
    }

    // Generate initials from the first letter of the first two words
    const words = productName.split(" ");
    if (words.length >= 2) {
        return `${words[0][0]}${words[1][0]}`.toUpperCase(); // First letter of the first two words
    }

    // Default to just the first letter of the first word if there's only one word
    return productName[0].toUpperCase();
}

export function generateRandomTwoDigitNumber(): number {
    return Math.floor(Math.random() * 90) + 10;
}

export function resolveColorCode (colorCode: string): string {
    if (['red', 'yellow', 'orange', 'green', 'blue', 'purple'].includes(colorCode))
        return `bg-pos-${colorCode}`;
    return 'bg-white';
}

export function resolveCartItemColor(category: string): string {
    switch (category) {
        case 'fuel': return '#232B2F';
        case 'drinks': return 'purple';
        case 'food': return 'orange';
        default:
            return 'white';
    }
}