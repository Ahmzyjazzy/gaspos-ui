'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import React from 'react'

interface Props {
    placeholder?: string;
}

export default function Search({ placeholder = "Search Items..." }: Props) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex items-center bg-input rounded-full px-4 py-3 max-w-sm">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            <input
                type="text"
                placeholder={placeholder}
                className="ml-2 bg-transparent border-none text-gray-200 placeholder-gray-400 focus:outline-none"
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>

    )
}
