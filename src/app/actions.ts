'use server';

import { wait } from "@/lib/util";
import { FetchProductsRequestDto, FetchProductsResponseDto, ProductService } from "@/services";
import { unstable_noStore } from "next/cache";

export const fetchProducts = async (payload: FetchProductsRequestDto): Promise<FetchProductsResponseDto> => {
    unstable_noStore();
    await wait(300);
    const data = await ProductService.fetchProducts(payload);
    return data;
}