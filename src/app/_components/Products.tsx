import React from 'react'
import { fetchProducts } from '../actions';

interface Props {
  category: string;
  query: string;
  currentPage: number;
}

export default async function Products({ category, query, currentPage }: Props) {

  const products = await fetchProducts({ category, query, currentPage });
  console.log(products);

    return (
      <div>{JSON.stringify(products, null, 2)}</div>
  )
}
