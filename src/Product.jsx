import React from 'react'

const Product = ({ images, title, category, description, price }) => {
  return (
    <div className=' flex flex-col items-center w-[500px] '>
      <div className=' flesx flex-row items-center m-4 p-6 border border-gray-200  border-[2px] rounded-lg shadow-lg hover:shadow-xl h-[750px] overflow-auto'>
        <img src={images} alt={title} className='w-[300px] self-center ' />
        <h1 className=' text-[30px] text-pink-700 font-bold m-3 text-center'>  {title}</h1>
        <p className='text-gray-500 py-4 hover:text-gray-700'> {description}</p>
        <p className='text-[24px] text-pink-700 font-semibold  w-full text-center h-16 rounded p-2 mb-2'>✨{category}✨</p>
        <p className='font-bold text-[34px]  text-center text-[#132745] '> {price} $ </p>
      </div>
    </div>
  )
}
export default Product;
