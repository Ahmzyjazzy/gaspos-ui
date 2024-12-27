import React from 'react'

interface Props {
    searchParams?: Promise<{
        category?: string;
    }>;
}

export default async function HomePage(props: Props) {
    const searchParams = await props.searchParams;
    const category = searchParams?.category || 'all';

    return (
        <>Home page {category}</>
    )
}
