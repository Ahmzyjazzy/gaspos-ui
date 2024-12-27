'use server';

import { wait } from "@/lib/util";
import { FetchProductsRequestDto, FetchProductsResponseDto, ProductService } from "@/services";

export const fetchProducts = async (payload: FetchProductsRequestDto): Promise<FetchProductsResponseDto>  => {
    await wait(300);

    const data = await ProductService.fetchProducts(payload);

    return data;
}