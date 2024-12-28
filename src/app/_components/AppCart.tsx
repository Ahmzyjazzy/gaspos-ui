'use client';

import { AppDispatch, RootState } from '@/store';
import { removeItem } from '@/store/cartSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function AppCart() {
    const dispatch = useDispatch<AppDispatch>();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleRemove = (id: number) => {
        dispatch(removeItem(id));
    };

    return (
        <div className='p-5'>
            <h2>Your Cart</h2>
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
