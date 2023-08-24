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
      <div className='flex w-80 items-center justify-center'>
        <h1>My Orders</h1>
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