import Link from 'next/link';
import React from 'react'

interface Props {
    brandName: string;
}

export default function AppLogo({ brandName }: Props) {
    return (
        <Link href={'/'} className='flex items-center justify-center py-5 px-5'>
            <p className='text-foreground text-2xl font-bold uppercase'>{brandName}</p>
        </Link>
    )
}
