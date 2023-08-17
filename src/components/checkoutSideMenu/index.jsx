import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import { contextCards } from '../../context'
import { OrderCard } from '../OrderCard'
import './style.css'


function CheckoutSideMenu() {
const context = useContext(contextCards)

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-slate-100`}
    >
        <div className='flex justify-between items-center p-5'>
          <h2 className='font-medium text-xl'>My Order</h2>
          <div>
            <XMarkIcon className='h-6 w-6'
            onClick={() => context.closeCheckoutSideMenu()}/>
          </div>
        </div>

        <div className='px-6 overflow-x-hidden'>
        {
          context.cardProducts.map((product)=>{
            return <OrderCard 
          key={product.id}
           title={product.title}
           imageUrl={product.image}
           price={product.price}/>
          })
        }
        </div>
  
      
       
    </aside>
  )
}

export {CheckoutSideMenu}