export interface CartItem {
    product: Product;
    quantity: number;
    volume?: number;
}

export interface CartState {
    orderId: number;
    items: CartItem[];
    paymentMethod: DropdownSelectOption;
}
