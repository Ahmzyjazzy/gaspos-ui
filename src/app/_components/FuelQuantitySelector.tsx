import React from 'react'

interface Props {
    quantity: number;
    handleQuantityChange: (newQuantity: number) => void;
}

export default function FuelQuantitySelector({ quantity, handleQuantityChange }: Props) {
  return (
      <div className="flex items-center justify-between px-5 py-3 bg-pos-input-light rounded-3xl w-fit">
          <select
              id="quantity"
              value={quantity}
              onChange={(e) => handleQuantityChange(Number(e.target.value))}
              className="bg-transparent text-white px-1 text-sm font-bold rounded outline-none"
          >
              {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                      {num}
                  </option>
              ))}
          </select>
      </div>
  )
}
