import React from 'react'
import { fetchProducts } from '../actions';
import ProductItem from './ProductItem';

interface Props {
  category: string;
  query: string;
  currentPage: number;
}

export default async function Products({ category, query, currentPage }: Props) {

  const products = await fetchProducts({ category, query, currentPage });

  return (
    <div className='grid lg:grid-cols-3 gap-5 max-h-[calc(100vh-100px)] overflow-y-auto'>
      {products?.data?.map(product => {
        return (
          <ProductItem key={product.id} product={product} />
        )
      })}
    </div>
  )
}
