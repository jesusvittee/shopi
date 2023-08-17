import { PlusIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { useContext } from 'react';
import { contextCards } from '../../context';

function Card({data}) {
  const context = useContext(contextCards)
  return (
    <div className='bg-white cursor-pointer w-36 h-40 rounded-lg '>
        <figure className='relative mb-2 w-full h-4/5 '>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category}</span>
            <img className='w-full h-full abject-cover rounded-lg' src={data.image} alt="headphones" />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
            onClick={()=>{ 
              context.setCount(context.count + 1)
            }}>
            <PlusIcon className='h-full w-full'/>
            </div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>{data.title}</span>
            <span className='text-lg font-medium'>${data.price}</span>
        </p>
    </div>
  )
}

export {Card}