import React from 'react'
import { useState, useEffect } from 'react';
import { Card } from '../../components/Card';
import { Layout } from '../../components/Layout';
import { ProductDetail } from '../../components/ProductDetail';



function Home() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(data => setItems(data))

  },[])
  return (
   <Layout>
    Home
    <div className='grid gap-0.5 grid-cols-4 w-3/6 max-w-screen-lg'>
    {
      items?.map( item => (
        <Card key={item.id} data={item}/>
        ))
      }
    </div>
      <ProductDetail/>
   </Layout>
  )
}

export {Home};