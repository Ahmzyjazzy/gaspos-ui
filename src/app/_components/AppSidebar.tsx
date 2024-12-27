'use client';

import React from 'react'
import AppLogo from './AppLogo'
import config from '@/config/config'
import { menuLinks } from '@/constants'
import AppMenuItem from './AppMenuItem'
import { usePathname } from 'next/navigation'

export default function AppSidebar() {
    const pathname = usePathname();

    return (
        <nav className="grid lg:grid-rows-[1fr_200px] gap-5">
            <div className="bg-panel rounded-3xl flex flex-col">
                <AppLogo brandName={config.brandName} />
                <div className='flex-1'>
                    {menuLinks.filter(menuLink => menuLink.group === 'top').map((menu, index) => (
                        <AppMenuItem key={`menuLink-${index}`} menu={menu} isActive={pathname === menu.path} />
                    ))}
                </div>
                <div className='justify-end'>
                    {menuLinks.filter(menuLink => menuLink.group === 'bottom').map((menu, index) => (
                        <AppMenuItem key={`menuLink-${index}`} menu={menu} isActive={pathname === menu.path} />
                    ))}
                </div>
            </div>
            <div className="bg-panel rounded-3xl">

            </div>
        </nav>
    )
}
