import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import { contextCards } from '../../context'
import './style.css'

function ProductDetail() {
const context = useContext(contextCards)

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-full top-20 h-5/6
    lg:w-80 lg:top-16 product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
        <div className='flex justify-between items-center p-2 lg:p-5'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon className='h-6 w-6'
          onClick={() => context.closeProductDetail()}/>
        </div>
        </div>
       <figure className='px-9 w-full h-1/3 lg:h-2/5 '>
        <img className='w-full h-full rounded-lg object-cover'
         src={context.productDetail.image} 
         alt={context.productDetail.title} />
       </figure>
       <p className='flex flex-col p-2 lg:p-5'>
        <span className='font-medium text-base '>${context.productDetail.price}</span>
        <span className='font-medium text-sm '>{context.productDetail.title}</span>
        <span className='font-light text-sm '>{context.productDetail.description}</span>
       </p>
    </aside>
  )
}

export {ProductDetail}