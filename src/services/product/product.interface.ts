import { Product } from "@/types";

export interface FetchProductsRequestDto {
    category: string;
    query: string;
    currentPage: number;
    pageSize?: number;
}

export interface FetchProductsResponseDto {
    data: Product[],
    pagination: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
        pageSize: number;
    }
}