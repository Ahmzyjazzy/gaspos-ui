'use client';

import { AppDispatch, RootState } from '@/store';
import { removeItem, updatePaymentMethod } from '@/store/cartSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DropdownButtonInput from './inputs/dropdown-button-input';
import { paymentMethods } from '@/constants';
import { DropdownSelectOption } from '@/types';

export default function AppCart() {
    const dispatch = useDispatch<AppDispatch>();
    
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const orderId = useSelector((state: RootState) => state.cart.orderId);
    const paymentMethod = useSelector((state: RootState) => state.cart.paymentMethod);

    const handleRemove = (id: number) => {
        dispatch(removeItem(id));
    };

    if (cartItems.length === 0) return (
        <div className='p-5'>
            <h1>Your Cart</h1>
            <div>Empty Cart</div>
        </div>
    );

    return (
        <div className='p-5 space-y-5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-foreground text-lg font-bold'>Order #{orderId}</h1>
                <DropdownButtonInput
                    options={paymentMethods}
                    defaultValue={paymentMethod}  
                    onSelect={function (option: DropdownSelectOption): void {
                        dispatch(updatePaymentMethod(option));
                    }}
                />
            </div>
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
