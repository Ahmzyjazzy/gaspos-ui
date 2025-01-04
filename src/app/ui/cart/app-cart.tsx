'use client';

import { AppDispatch, RootState } from '@/store';
import { removeItem, updatePaymentMethod } from '@/store/cartSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DropdownSelectOption } from '@/types';
import EmptyCart from './empty-cart';
import CartHeader from './cart-header';
import CartItem from './cart-item';

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
                    <li key={item.product.id} className='mb-5'>
                        <CartItem
                            item={item}
                            onRemove={() => handleRemove(item.product.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
