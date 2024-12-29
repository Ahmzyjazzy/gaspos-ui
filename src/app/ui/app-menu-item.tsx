import { cn } from '@/lib/util';
import { MenuLink } from '@/types';
import Image from 'next/image';
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
            <div className={cn(
                "w-6 h-6 flex items-center justify-center",
                !menu.icon && "rounded-full bg-background"
            )}
            >
                {menu.icon ? (
                    isActive ?
                        <Image alt={menu.name} src={`${menu.icon?.replaceAll('.png', '-active')}.png`} width={32} height={32} /> :
                        <Image alt={menu.name} src={menu.icon} width={32} height={32} />
                ) :
                    (<p>{menu.slug.charAt(0)}</p>)}
            </div>
            <p className="text-sm font-semibold normal-case">{menu.name}</p>
        </Link>
    )
}
