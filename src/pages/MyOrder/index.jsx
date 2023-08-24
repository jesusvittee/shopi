import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { contextCards } from '../../context';
import { Layout } from '../../components/Layout';
import { OrderCard } from '../../components/OrderCard';


function MyOrder() {
 const context = useContext(contextCards);

 const currentPath = window.location.pathname
 let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last') index = context.order?.length - 1

  return (
    <Layout>
       <div className='flex w-80 justify-flex-start space-x-28 mb-2'>
        <Link to='/my-orders'>
        <ChevronLeftIcon className='h-6 w-6 cursor-pointer'/>
        </Link>
        <h1>My Order</h1>
      </div>
    <div className='flex-1 px-6 overflow-x-hidden'>
        {
           context.order?.[index]?.products.map(product => (
           <OrderCard 
           key={product.id}
           id={product.id}
           title={product.title}
           imageUrl={product.image}
           price={product.price}
           />
          )) 
        }
        </div>
   </Layout>
   
  )
}
export {MyOrder} 