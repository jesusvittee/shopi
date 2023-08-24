import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

function OrdersCard({totalPrice, totalProducts}) {

  return (
    <div className='flex justify-between items-center mb-3 border-black'>
        <p>
            <span>Aug.18.2023</span>
            <span>{totalProducts} </span>
            <span>{totalPrice}</span>
        </p>
    </div>
  )
}

export {OrdersCard}