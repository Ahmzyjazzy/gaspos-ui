import React, { Suspense } from 'react'
import Search from './ui/inputs/search';
import ProductListSkeleton from './ui/products/product-list-skeleton';
import ProductList from './ui/products/product-list';

interface Props {
    searchParams?: Promise<{
        category?: string;
        query?: string;
        page?: string;
    }>;
}

export default async function HomePage(props: Props) {
    const searchParams = await props.searchParams;
    const category = searchParams?.category || 'all';
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <div className='flex flex-col space-y-5'>
            <Search placeholder={'Search'} />
            <Suspense key={query + currentPage} fallback={<ProductListSkeleton />}>
                <ProductList category={category} query={query} currentPage={currentPage} />
            </Suspense>
        </div>
    )
}
