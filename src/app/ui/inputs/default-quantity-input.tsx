import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';
import React from 'react'

interface Props {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onChange: (value: number) => void;
}

export default function DefaultQuantityInput({quantity, onIncrease, onDecrease, onChange}: Props) {
  return (
      <div className="flex items-center justify-between space-x-2 px-5 py-2 bg-pos-input-light border border-pos-input-light rounded-3xl w-fit h-12">
          <button
              onClick={onDecrease}
              className="px-1 py-1 bg-transparent text-white rounded-full"
          >
            <MinusIcon className='h-5 w-5' strokeWidth={1.5} />
          </button>
          <input
              type="number"
              value={quantity}
              pattern="[0-9]*"
              onChange={(e) => onChange(Number(e.target.value))}
              className="w-1/2 text-center text-sm font-bold bg-transparent outline-none text-white"
              min={1}
              autoComplete="off"
          />
          <button
              onClick={onIncrease}
              className="p-1 bg-transparent text-white rounded-full"
          >
            <PlusIcon className='h-5 w-5' strokeWidth={1.5} />
          </button>
      </div>
  )
}
