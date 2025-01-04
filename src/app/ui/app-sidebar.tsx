"use client";

import React, { Suspense } from 'react'
import AppLogo from './app-logo'
import config from '@/config/config'
import { menuLinks } from '@/constants'
import AppMenuItem from './app-menu-item'
import { usePathname, useSearchParams } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    
    const category = searchParams.get('category');

    const getActiveMenu = () => {
        if (pathname === '/' && !category) return 'home';
        if (pathname === '/' && category) return category;
        return null;
    };

    const activeMenu = getActiveMenu();

    return (
        <nav className="grid lg:grid-rows-[1fr_200px] gap-5">
            <div className="bg-panel rounded-3xl flex flex-col">
                <AppLogo brandName={config.brandName} />
                <div className='flex-1'>
                    {menuLinks.filter(menuLink => menuLink.group === 'top').map((menu, index) => (
                        <AppMenuItem key={`menuLink-${index}`} menu={menu} isActive={activeMenu === menu.slug} />
                    ))}
                </div>
                <div className='justify-end'>
                    {menuLinks.filter(menuLink => menuLink.group === 'bottom').map((menu, index) => (
                        <AppMenuItem key={`menuLink-${index}`} menu={menu} isActive={activeMenu === menu.slug} />
                    ))}
                </div>
            </div>
            <div className="bg-panel rounded-3xl">

            </div>
        </nav>
    )
}

export default function AppSidebar() {
    return (
        <Suspense fallback={<div>Loading Sidebar...</div>}>
            <Sidebar />
        </Suspense>
    );
}