import  { useContext } from 'react'
import productContext from './productContext'
import useProductCounterStore from './productCounterSotre';
const DetailsProduct = ({ product }) => {
    const { data } = useContext(productContext)
    const { incrementProduct } = useProductCounterStore();

    let total = 0;

    return (
    
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

      
                {product &&
                    data.map((p) => (

                        <div key={p.id} className='flex flex-col gap-3 m-4 border-rose-300 rounded-lg  bg-gradient-to-r from-gray-100 to-white  shadow-lg p-2  text-[20px] '>
                            <div>
                                <img src={p.images[0]} alt={p.title} className='w-[300px]' />
                            </div>
                            <div>
                                <h2 className='text-[30px]'>Product Name: {p.title}</h2>
                                <p className='text-[30px] text-blue-600 font-semibold'>${p.price}</p>
                                <p> {p.discraption}</p>
              
                                <button
                                    onClick={() => incrementProduct(p.id)}
                                    className='bg-blue-800/20 px-4 py-1 rounded-lg m-1 text-[25px] hover:bg-blue-700'
                                >Add to Card </button>
                            </div>
                        </div>
         

                    ))}
            </div>
        </>
    )
}
 

export default DetailsProduct
