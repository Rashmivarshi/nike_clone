import React from 'react'

const Button = ({label,icon,backgroundColor,textColor,borderColor,fullWidth}) => {
  return (
    <button className={`flex justify-center items-center 
    gap-2 px-7 py-3 font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} border border-solid ${borderColor} `
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && 'w-full'}"}`}>
        {label}
        {icon &&<img src={icon}
        className='ml-2 rounded-full w-5 h-5'/>}
    </button> 
  )   
}

export default Button