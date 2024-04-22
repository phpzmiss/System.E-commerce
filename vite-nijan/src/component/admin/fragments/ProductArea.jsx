import React from 'react'

export default function ProductArea({title, children}) {
  return (
    <div class="page-container my-5 py-5 product-area">
        <div class="w-full text-center mb-3 p-0 flex items-center justify-center">
            <h2 class="text-3xl mb-0 capitalize relative text-black font-bold pb-4 text-before">
              {title}
            </h2>
        </div>
        <div>
            {children}
        </div>
    </div>

  )
}
