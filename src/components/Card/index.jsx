import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { useContext } from 'react';
import { contextCards } from '../../context';

function Card(data) {

  const context = useContext(contextCards)
// ---------------
  const detailProduct = (showProduct)=> {
    context.openProductDetail()
    context.closeCheckoutSideMenu()
    context.setProductDetail(showProduct)
  }
 // ----------
  const addCardProducts = (event, dataProduct) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.openCheckoutSideMenu()
    context.closeProductDetail()
    context.setCardProducts([...context.cardProducts, dataProduct])
  }
// -----------
  const renderIcon = (id) => {
    const isInCard = context.cardProducts.filter(product => product.id === id).length > 0;
    if(isInCard){
      return (
        <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'
        onClick={(event)=>{ 
        addCardProducts(event, data.data)
        }}>
        <CheckIcon className='h-full w-full text-white'/>
        </div>
      )
    } else {
        return (
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={(event)=>{ 
          addCardProducts(event, data.data)
          }}>
          <PlusIcon className='h-full w-full'/>
        </div>
      )
    }
  }
// -----------

  return (
    <div className='bg-white cursor-pointer w-52 h-56 rounded-lg'
    onClick={() => detailProduct(data.data) }>
        <figure className='relative mb-2 w-full h-4/5 '>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category}</span>
            <img className='w-full h-full abject-cover rounded-lg' src={data.data.image} alt="headphones" />
           {renderIcon(data.data.id)}
        </figure>
        <p className='flex justify-between w-full'>
            <span className='text-xs font-light'>{data.data.title}</span>
            <span className='text-base font-medium'>${data.data.price}</span>
        </p>
    </div>
  )
}

export {Card}