import React from 'react'
import { star } from '../assets/icons'

const PopularCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col
    w-full max-sm:w-full'>
        <img src={imgURL}
        alt={name}
        className='w-[280px] h-[280px]'
        />
        <div className='mt-8 flex justify-start gap-2.5'>
            <img 
            src={star}
            alt='rating'
            width={24}
            height={24}
            />
            <p className='font-montserrat text-xl leading-normal
            text-slate-gray'>
                {4.5}
            </p>
        </div>
        <h3 className='mt-3 leading-normal text-2xl font-palanquin  font-semibold'>{name}</h3>
        <p className='mt-2 leading-normal text-2xl font-montserrat font-semibold text-coral-red'>{price}</p>
    </div>
  )
}

export default PopularCard