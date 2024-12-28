import { cn } from '@/lib/util';
import { MenuLink } from '@/types';
import Link from 'next/link';
import React from 'react'

interface Props {
    menu: MenuLink;
    isActive: boolean;
}

export default function AppMenuItem({ menu, isActive }: Props) {
    return (
        <Link
            href={menu.path}
            className={cn(
                "flex items-center justify-start gap-2 p-3 mx-5 my-3 rounded-3xl text-foreground hover:text-pos-orange hover:bg-active",
                isActive && "text-pos-orange bg-active"
            )}
        >
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-background">
                {menu.name?.charAt(0)}
            </div>
            <p className="text-sm font-semibold normal-case">{menu.name}</p>
        </Link>
    )
}
