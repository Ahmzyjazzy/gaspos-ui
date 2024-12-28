import React from 'react'

interface Props {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onChange: (value: number) => void;
}

export default function DefaultQuantityInput({quantity, onIncrease, onDecrease, onChange}: Props) {
  return (
      <div className="flex items-center justify-between space-x-2">
          <button
              onClick={onDecrease}
              className="px-3 py-1 bg-gray-700 text-white rounded-full"
          >
              -
          </button>
          <input
              type="number"
              value={quantity}
              onChange={(e) => onChange(Number(e.target.value))}
              className="w-12 text-center text-sm font-bold"
              min={1}
              autoComplete="off"
          />
          <button
              onClick={onIncrease}
              className="px-3 py-1 bg-gray-700 text-white rounded-full"
          >
              +
          </button>
      </div>
  )
}
