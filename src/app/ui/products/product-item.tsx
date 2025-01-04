"use client";

import { cn, formatAmount, getInitial, resolveColorCode } from '@/lib/util'
import { AppDispatch, RootState } from '@/store';
import { addItem, updateItem } from '@/store/cartSlice';
import { CartItem, Product } from '@/types'
import { PlusIcon } from '@heroicons/react/16/solid';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FuelQuantitySelector from '../inputs/fuel-quantity-selector';
import FuelVolumeInput from '../inputs/fuel-volume-input';
import DefaultQuantityInput from '../inputs/default-quantity-input';
import Image from 'next/image';

interface Props {
    product: Product
}

export default function ProductItem({ product }: Props) {
    const dispatch = useDispatch<AppDispatch>();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const [quantity, setQuantity] = useState(1);
    const [volume, setVolume] = useState<number | undefined>(30);
    const [selected, setSelected] = useState(false);

    const handleAddToCart = (product: Product) => {
        const cartItem: CartItem = {
            product,
            quantity,
            volume: product.category === 'fuel' ? volume : undefined,
        };

        dispatch(addItem(cartItem));
    };

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
        const updatedItem: CartItem = {
            product,
            quantity: newQuantity,
            volume: product.category === 'fuel' ? volume : undefined,
        };
        dispatch(updateItem(updatedItem));
    };

    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume);
        const updatedItem: CartItem = {
            product,
            quantity,
            volume: product.category === 'fuel' ? newVolume : undefined,
        };
        dispatch(updateItem(updatedItem));
    };

    const handleIncreaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        dispatch(updateItem({ product, quantity: newQuantity }));
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            dispatch(updateItem({ product, quantity: newQuantity }));
        }
    };

    useEffect(() => {
        const existingItem = cartItems.find((item: CartItem) => item.product.id === product.id);
        if (existingItem) {
            setSelected(true);
            setQuantity(existingItem.quantity);
            setVolume(existingItem.volume);
        } else {
            setSelected(false);
        }
    }, [cartItems, product.id]);

    return (
        <div className='min-h-80 flex flex-col space-y-3'>
            <div className={cn(
                "flex items-center rounded-3xl w-full h-16 border-8 border-black bg-white flex-1",
                product.colorCode && resolveColorCode(product.colorCode),
                selected && `border-${product.colorCode}-900/50`,
                product.image ? 'justify-center' : 'justify-end'
            )}>
                {product.image ?
                    (<Image
                        src={product.image}
                        alt={`${product.name} image`}
                        priority
                        width={128}
                        height={128}
                        layout="intrinsic"
                        objectFit="contain"
                    />) :
                    (<span className="text-black text-9xl font-bold">{getInitial(product.name)}</span>)}
            </div>
            <div className='flex flex-col space-y-3 px-2'>
                <span className="mt-2 text-lg font-bold text-white">{product.name}</span>
                {!selected ?
                    (
                        <div className='flex justify-between items-center flex-wrap'>
                            <p className='text-lg font-bold'>{formatAmount(product.price)}</p>
                            <button
                                className="px-5 py-3 bg-pos-input-light text-white rounded-3xl text-sm w-fit"
                                onClick={() => {
                                    handleAddToCart(product);
                                }}
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
                                        <FuelQuantitySelector
                                            quantity={quantity}
                                            handleQuantityChange={handleQuantityChange}
                                        />
                                        <FuelVolumeInput
                                            volume={volume}
                                            handleVolumeChange={handleVolumeChange}
                                        />
                                    </div>
                                ) : (
                                    <DefaultQuantityInput
                                        quantity={quantity}
                                        onIncrease={handleIncreaseQuantity}
                                        onDecrease={handleDecreaseQuantity}
                                        onChange={handleQuantityChange}
                                    />
                                )
                            }
                        </>
                    )}
            </div>
        </div>
    )
}
