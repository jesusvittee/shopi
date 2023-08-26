import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Layout } from '../../components/Layout';
import { OrdersCard } from '../../components/OrdersCard';
import { contextCards } from '../../context';


function MyOrders() {
  const context = useContext(contextCards)

  return (
    <Layout>
      <div className='flex w-80 items-center justify-center mb-4'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>

    {
      context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}/>
        </Link>
        
      ))
    }
   </Layout>
  )
}
export {MyOrders} 