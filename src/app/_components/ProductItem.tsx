'use client';

import { cn, formatCurrency, getInitial } from '@/lib/util'
import { Product } from '@/types'
import { PlusIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react'

interface Props {
    product: Product
}

export default function ProductItem({ product }: Props) {
    const [selected, setSelected] = useState(false);

    const resolveColorCode = (colorCode: string): string => {
        if (['red', 'yellow', 'orange', 'green', 'blue', 'purple'].includes(colorCode))
            return `bg-pos-${colorCode}`;

        return 'bg-white';
    }

    return (
        <div className='min-h-80 flex flex-col space-y-3'>
            <div className={cn(
                "flex items-center justify-end rounded-3xl w-full h-16 border-8 border-black bg-white flex-1",
                product.colorCode && resolveColorCode(product.colorCode),
                selected && `border-${product.colorCode}-900/50`
            )}>
                <span className="text-black text-9xl font-bold">{getInitial(product.name)}</span>
            </div>
            <div className='flex flex-col space-y-3 px-2'>
                <span className="mt-2 text-lg font-bold text-white">{product.name}</span>
                {!selected ?
                    (
                        <div className='flex justify-between items-center flex-wrap'>
                            <p className='text-lg font-bold'>{formatCurrency(product.price)}</p>
                            <button
                                className="px-5 py-2 bg-gray-700 text-white rounded-3xl text-sm w-fit"
                                onClick={() => setSelected(true)}
                            >
                                <PlusIcon strokeWidth={1.5} className='w-5 h-5' />
                            </button>
                        </div>
                    ) :
                    (
                        <>
                            {
                                product.category === 'fuel' ? (
                                    <div className="w-full space-x-2 flex justify-evenly items-center">
                                        <div className="flex items-center justify-between px-5 py-3 bg-pos-input-light rounded-3xl w-fit">
                                            <select
                                                id="quantity"
                                                value={''}
                                                onChange={() => {

                                                }}
                                                className="bg-transparent text-white px-1 text-sm font-bold rounded outline-none"
                                            >
                                                {[1, 2, 3, 4, 5].map((num) => (
                                                    <option key={num} value={num}>
                                                        {num}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="flex items-center justify-start px-5 py-3 bg-pos-input-dark border border-pos-input-light rounded-3xl flex-1">
                                            <label htmlFor="volume" className="text-gray-600 text-sm font-bold">
                                                V:
                                            </label>
                                            <input
                                                id="volume"
                                                type="text"
                                                // value={''}
                                                onChange={() => {

                                                }}
                                                className="w-10 bg-transparent text-white px-1 text-sm font-bold rounded outline-none"
                                            />
                                            <span className="text-sm font-bold text-foreground">l</span>
                                        </div>
                                    </div>
                                ) : (
                                    <p>other product</p>
                                )
                            }
                        </>
                    )}
            </div>
        </div>
    )
}
