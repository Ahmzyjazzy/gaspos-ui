import React from 'react'
import DropdownButtonInput from '../inputs/dropdown-button-input';
import { paymentMethods } from '@/constants';
import { DropdownSelectOption } from '@/types';

interface Props {
    orderId: number;
    paymentMethod: DropdownSelectOption;
    onSelect: (option: DropdownSelectOption) => void;
    disabled?: boolean;
}

export default function CartHeader({ orderId, paymentMethod, onSelect, disabled = false }: Props) {
    return (
        <div className='flex justify-between items-center'>
            <h1 className='text-foreground text-lg font-bold'>Order #{orderId}</h1>
            <DropdownButtonInput
                options={paymentMethods}
                defaultValue={paymentMethod}
                onSelect={onSelect}
                disabled={disabled}
            />
        </div>
    )
}
