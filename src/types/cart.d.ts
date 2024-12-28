export interface CartItem {
    product: Product;
    quantity: number;
    volume?: number;
}

export interface CartState {
    items: CartItem[];
}
