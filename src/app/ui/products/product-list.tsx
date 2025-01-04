import React from 'react'
import ProductItem from './product-item';
import { fetchProducts } from '@/app/actions';
import Pagination from '../pagination';

interface Props {
  category: string;
  query: string;
  currentPage: number;
}

export default async function ProductList({ category, query, currentPage }: Props) {

  const products = await fetchProducts({ category, query, currentPage });

  return (
    <div className='max-h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden space-y-5'>
      <div className='grid lg:grid-cols-3 gap-5'>
        {products?.data?.map(product => {
          return (
            <ProductItem key={product.id} product={product} />
          )
        })}
      </div>
      <Pagination totalPages={products.pagination.totalPages} />
    </div>
  )
}
