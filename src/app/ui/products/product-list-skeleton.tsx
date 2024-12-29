import React from 'react'

export default function ProductListSkeleton() {
  return (
    <div className="grid lg:grid-cols-3 gap-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="min-h-80 flex flex-col space-y-3 bg-gray-500 p-5 rounded-lg animate-pulse">
          <div className="h-48 bg-gray-400 rounded animate-pulse" />
          <div className="h-4 bg-gray-400 rounded animate-pulse" />
          <div className="h-4 bg-gray-400 rounded animate-pulse w-1/2" />
        </div>
      ))}
    </div>
  )
}
