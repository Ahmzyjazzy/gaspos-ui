
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { formatAmount } from '@/lib/util';
import { CartItem as ProductCartItem } from '@/types';
import FuelQuantitySelector from '../inputs/fuel-quantity-selector';
import FuelVolumeInput from '../inputs/fuel-volume-input';
import DefaultQuantityInput from '../inputs/default-quantity-input';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateItem } from '@/store/cartSlice';

interface Props {
    item: ProductCartItem;
    onRemove: () => void;
}

export default function CartItem({ item, onRemove }: Props) {
    const { product } = item;
    const dispatch = useDispatch<AppDispatch>();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const [quantity, setQuantity] = useState(1);
    const [volume, setVolume] = useState<number | undefined>(30);

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
        const updatedItem: ProductCartItem = {
            product,
            quantity: newQuantity,
            volume: product.category === 'fuel' ? volume : undefined,
        };
        dispatch(updateItem(updatedItem));
    };

    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume);
        const updatedItem: ProductCartItem = {
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
        const existingItem = cartItems.find((item: ProductCartItem) => item.product.id === product.id);
        if (existingItem) {
            setQuantity(existingItem.quantity);
            setVolume(existingItem.volume);
        }
    }, [cartItems, product.id]);

    return (
        <div className='cart-item flex flex-row items-start justify-between gap-3 peer'>
            {/* image */}
            <div className="flex items-center justify-center rounded-2xl p-3 w-fit bg-gray-600/50">
                {item.product.category === 'fuel' ?
                    <Image
                        src={'/icons/gas-station.png'}
                        alt={`${item.product.name} image`}
                        priority
                        width={24}
                        height={24}
                        layout="intrinsic"
                        objectFit="contain"
                    /> :
                    <Image
                        src={item.product.image}
                        alt={`${item.product.name} image`}
                        priority
                        width={24}
                        height={24}
                        layout="intrinsic"
                        objectFit="contain"
                    />
                }
            </div>

            {/* details */}
            <div className='flex-1'>
                <p className="text-lg font-bold text-white flex-1 mb-1">{item.product.name}</p>
                <div className='flex justify-between gap-5'>
                    {
                        item.product.category === 'fuel' ? (
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

                    {/* amount */}
                    <div className='flex flex-col gap-2'>
                        <span className="mt-2 text-lg font-bold text-white text-right">{formatAmount(item.product.price)}</span>
                        <button
                            onClick={onRemove}
                            className='text-red-400 text-xs text-right opacity-0 peer-hover:opacity-100 transition-opacity duration-200'>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
