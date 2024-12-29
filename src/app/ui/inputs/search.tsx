"use client";

import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

interface Props {
    placeholder?: string;
}

export default function Search({ placeholder = "Search Items..." }: Props) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    },300)

    return (
        <div className="flex items-center bg-pos-input-light rounded-full px-4 py-3 max-w-sm">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            <input
                type="text"
                placeholder={placeholder}
                className="ml-2 bg-transparent border-none text-gray-200 placeholder-gray-400 focus:outline-none w-full"
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>

    )
}
