'use client';

import { AppDispatch, RootState } from '@/store';
import { removeItem, updatePaymentMethod } from '@/store/cartSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DropdownSelectOption } from '@/types';
import EmptyCart from './empty-cart';
import CartHeader from './cart-header';

export default function AppCart() {
    const dispatch = useDispatch<AppDispatch>();
    
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const orderId = useSelector((state: RootState) => state.cart.orderId);
    const paymentMethod = useSelector((state: RootState) => state.cart.paymentMethod);

    const handleRemove = (id: number) => {
        dispatch(removeItem(id));
    };

    if (cartItems.length === 0) return <EmptyCart orderId={orderId} paymentMethod={paymentMethod} />;

    return (
        <div className='p-5 space-y-5'>
            <CartHeader
                orderId={orderId}
                paymentMethod={paymentMethod}
                onSelect={(option: DropdownSelectOption) => dispatch(updatePaymentMethod(option))}
            />
            <ul>
                {cartItems.map((item) => (
                    <li key={item.product.id}>
                        <div className="flex justify-between">
                            <span>
                                {item.product.name} - {item.quantity}
                                {item.volume && ` (${item.volume} L)`}
                            </span>
                            <button
                                onClick={() => handleRemove(item.product.id)}
                                className="text-red-500 hover:underline"
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
