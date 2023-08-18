import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import { contextCards } from '../../context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
import './style.css'


function CheckoutSideMenu() {
const context = useContext(contextCards)

const productDelete = (id) => {
 const filteredProduct = context.cardProducts.filter(product => product.id != id)
 context.setCardProducts(filteredProduct)
}
const handleCheckout = () => {
  const orderToAdd = {
data: '01,02,23',
products: context.cardProducts,
totalProducts:context.cardProducts.length,
totalPrice:totalPrice(context.cardProducts)
  }
  context.setOrder(...context.order, orderToAdd)
  context.setCardProducts([])
 }
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

        <div className='flex-1 px-6 overflow-x-hidden'>
        {
          context.cardProducts.map((product)=>{
            return <OrderCard 
           key={product.id}
           id={product.id}
           title={product.title}
           imageUrl={product.image}
           price={product.price}
           productDelete={productDelete}/>
          })
        }
        </div>
        <div className='px-6 mb-2'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total</span>
          <span className='font-medium text-lg'>${totalPrice(context.cardProducts)}</span>
        </p>
        <button className='w-full bg-black py-3 text-white rounded-lg' onClick={() => handleCheckout()}>Cheakout</button>
        </div>
  
      
       
    </aside>
  )
}

export {CheckoutSideMenu}