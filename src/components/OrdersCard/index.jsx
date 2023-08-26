import { ChevronRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

function OrdersCard({totalPrice, totalProducts}) {

  return (
    <div className='flex justify-between items-center mb-4 border border-black w-80 p-4 rounded-lg'>
        <div className='flex w-full justify-between'>
            <p className='flex flex-col'>
              <span className='font-light'>Aug.18.2023</span>
              <span className='font-light'>{totalProducts} articles</span>
            </p>
            <p className='flex items-center gap-6'>
              <span className='font-medium text-lg'>${totalPrice}</span>
              <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'/>
            </p>
        </div>
    </div>
  )
}

export {OrdersCard}