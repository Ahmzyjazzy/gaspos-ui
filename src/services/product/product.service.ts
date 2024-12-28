import { mockProducts } from "@/data";
import { FetchProductsRequestDto } from "./product.interface";

export class ProductService {
    static async fetchProducts(payload: FetchProductsRequestDto) {
        const { category, query, currentPage } = payload;

        const filteredProducts = mockProducts.filter((product) => {
            if (category === 'all') {
                return product.name.toLowerCase().includes(query.toLowerCase());
            }
            return product.name.toLowerCase().includes(query.toLowerCase()) && product.category === category;
        });

        // return paginated response
        const pageSize = 10;
        const paginatedProducts = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

        // get total pages
        const totalPages = Math.ceil(filteredProducts.length / 10);
        const totalItems = filteredProducts.length;

        return {
            data: paginatedProducts,
            pagination: {
                currentPage,
                totalPages,
                totalItems,
                pageSize,
            }
        }
    }
}