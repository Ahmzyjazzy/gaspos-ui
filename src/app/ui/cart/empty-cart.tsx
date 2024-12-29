import React from 'react'
import CartHeader from './cart-header'
import { DropdownSelectOption } from '@/types';
import Image from 'next/image';

interface Props {
    orderId: number;
    paymentMethod: DropdownSelectOption;
}

export default function EmptyCart({ orderId, paymentMethod }: Props) {
    return (
        <div className='p-5 flex flex-col space-y-5 h-full'>
            <CartHeader
                orderId={orderId}
                paymentMethod={paymentMethod}
                onSelect={() => { }}
                disabled={true}
            />
            <div className='flex flex-col justify-center items-center flex-1 gap-3'>
                <Image src='/gas-pump.png' alt='Gas pump' priority width={300} height={1} className=' object-contain' />
                <p className='text-sm font-bold '>Add products to the cart</p>
            </div>
            <button
                className="px-5 py-5 bg-pos-input-light text-white rounded-3xl text-sm w-full items-end"
                disabled
            >
                Pay
            </button>
        </div>
    )
}
