import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState, DropdownSelectOption } from '@/types';
import { generateRandomTwoDigitNumber } from '@/lib/util';
import { paymentMethods } from '@/constants';

const initialState: CartState = {
    items: JSON.parse(localStorage.getItem('cart') || '[]'),
    orderId: generateRandomTwoDigitNumber(),
    paymentMethod: localStorage.getItem('paymentMethod') ?
        JSON.parse(localStorage.getItem('paymentMethod') || '{}') as DropdownSelectOption : 
        paymentMethods?.find(method => method.value === 'e-wallet'),
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const existingItemIndex = state.items.findIndex(
                (item) => item.product.id === action.payload.product.id
            );

            if (existingItemIndex !== -1) {
                // If item exists, update quantity and volume if applicable
                const existingItem = state.items[existingItemIndex];

                state.items[existingItemIndex] = {
                    ...existingItem,
                    quantity: existingItem.quantity + action.payload.quantity,
                    volume:
                        action.payload.product.category === 'fuel'
                            ? action.payload.volume
                            : undefined,
                };
            } else {
                state.items.push(action.payload);
            }

            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter((item) => item.product.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        updateItem(state, action: PayloadAction<CartItem>) {
            const index = state.items.findIndex(
                (item) => item.product.id === action.payload.product.id
            );

            if (index !== -1) {
                state.items[index] = action.payload;
                localStorage.setItem('cart', JSON.stringify(state.items));
            }
        },
        clearCart(state) {
            state.items = [];
            localStorage.removeItem('cart');
        },
        updatePaymentMethod(state, action: PayloadAction<DropdownSelectOption>) {
            state.paymentMethod = action.payload;
            localStorage.setItem('paymentMethod', JSON.stringify(state.paymentMethod));
            console.log(state.paymentMethod);
        },
    },
});

export const { addItem, removeItem, updateItem, clearCart, updatePaymentMethod } = cartSlice.actions;

export default cartSlice.reducer;
