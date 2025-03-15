import { useContext } from 'react'
import productContext from './products/productContext'
import useProductCounterStore from './products/productCounterSotre';
import { MdDelete } from "react-icons/md";
import { useStore } from 'zustand';
import useCounterStore from './products/Store';
import { Link } from 'react-router-dom';
function Card() {
  const { data , setData } = useContext(productContext)
  const { productCounters, incrementProduct, decrementProduct } = useProductCounterStore();
const {dicrement} = useCounterStore()
  const total = data.reduce((total, item) => total + item.price * productCounters[item.id], 0)
  console.log(total)

  const deleteProduct = ((id  , setNew) => {
    setNew(prevData => prevData.filter(item => item.id !== id))
    dicrement()
  });

  return (
    <div>
      <div className='grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3 mb-[70px]  text-gray-600'>


        {data && data.length > 0 ? (
          data.map((p) => (

            <div key={p.id} className='flex flex-col gap-4 m-4 shadow-lg font-semibold  border-b-4  p-2  text-[20px]  justify-center items-center'>
              <div>
                <img src={p.images[0]} alt={p.title} className='w-[250px]' />
              </div>
              <div>
                <h2>Product Name: {p.title}</h2>
                <p>Price: ${p.price}</p>
                <div className='flex justify-center items-center'>


                  <button
                    onClick={() => incrementProduct(p.id)}
                    className='bg-blue-500 px-4 py-1 rounded-r-none rounded-lg m-1 w-[50px] text-[25px] hover:bg-blue-700 transition-colors text-white'
                  >+</button>
                  <p className='px-3 font-bold text-2xl'> {productCounters[p.id] || 0} </p>
                  <button
                    onClick={() => decrementProduct(p.id)}
                    className='bg-red-800/20 rounded-l-none px-4 py-1 rounded-lg m-1 text-[25px] hover:bg-red-700 transition-all mr-6'>-</button>
                      <button onClick={()=>{deleteProduct(p.id , setData)}}> <MdDelete  size={40} fill='red'/> </button>

                </div>
              </div>

            </div>

          ))
        ) : (
            <div> 
              <h2>There is no product</h2>
              <button className="image-button hover:text-2xl transition-all m-4 " onClick={()=>setIsFavOpen(false)}> <Link to={'/product'}>Shopping</Link> </button>  

            </div>
        )}
        <div className='w-full bg-gradient-to-r from-blue-500 to-purple-600 h-[70px] fixed bottom-0 text-white font-bold p-12  text-2xl flex justify-around items-center'>
          <p>  the total: ${(total)} </p>
          <button className=" bg-blue-100/30 px-4 py-2 rounded-lg hover:bg-blue-100/20 hover:text-[26px] transition-all"> Regular Check out </button>

        </div>
        
      </div>
      
    </div>
  )
}

export default Card
