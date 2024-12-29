import React from 'react'

interface Props {
    volume: number | undefined;
    handleVolumeChange: (newVolume: number) => void;
}

export default function FuelVolumeInput({ volume, handleVolumeChange }: Props) {
  return (
      <div className="flex items-center justify-start px-5 py-3 bg-pos-input-dark border border-pos-input-light rounded-3xl flex-1">
          <label htmlFor="volume" className="text-gray-600 text-sm font-bold">
              V:
          </label>
          <input
              id="volume"
              type="text"
              value={volume ?? ''}
              pattern="[0-9]*"
              onChange={(e) => handleVolumeChange(Number(e.target.value))}
              className="w-10 bg-transparent text-white px-1 text-sm font-bold rounded outline-none"
              autoComplete="off"
          />
          <span className="text-sm font-bold text-foreground">l</span>
      </div>
  )
}
