import React from 'react'
import { useContext } from 'react';
import { Card } from '../../components/Card';
import { Layout } from '../../components/Layout';
import { ProductDetail } from '../../components/ProductDetail';
import { contextCards } from '../../context';



function Home() {
  
  const context = useContext(contextCards);

  const renderView = () => {
      if (context.filteredItems?.length > 0){
        return (
          context.filteredItems?.map( item => (
            <Card key={item.id} data={item}/>
            ))
        )
      } else {
        return (
          <div>
            We don´t have anything
          </div>
        )
      }
    
  }
  
  return (
   <Layout>
      <div className='flex w-80 items-center justify-center mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input 
      className='rounded-lg border border-black w-80 p-4 mb-4' 
      type="text" 
      placeholder='Search a Product'
      onChange={(event)=> context.setSearchByTitle(event.target.value)}/>
    <div className='grid gap-x-6 justify-center gap-y-16 grid-cols-4 w-5/6 max-w-screen-lg'>
      {renderView()}
    </div>
   
      <ProductDetail/>
   </Layout>
  )
}

export {Home};