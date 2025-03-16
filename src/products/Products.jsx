import { useContext ,useState } from 'react'
import { motion } from 'framer-motion'
import useProduct from './useProduct'
import useCounterStore from './Store'
import productContext from './productContext'
import useProductCounterStore from './productCounterSotre'
import { FaHeart } from "react-icons/fa6";
import favoriteContext from '../Pages/favorite/favoriteContext'
import useFavoriteCounter from '../Pages/favorite/favoriteStore'
import addFavorite from '../Pages/favorite/addFavorite'
import addCard from './addCard'
const Products = () => {
  const { increment } = useCounterStore()
  const { data: product, error, isloading } = useProduct()
  if (isloading) {
    console.log('....')
    return <p>loading ...</p>
  }

  if (error) return <p>{error.message}</p>
  const { setData } = useContext(productContext)
  const { incrementProduct } = useProductCounterStore();
  const { setFavorite } = useContext(favoriteContext)
  const [red, setRed] = useState({})
  const { incrementFavorite } = useFavoriteCounter()
  let dis = false;


  const handleClick = (pc) => {
    addCard(pc, setData);

  }

  const nothing = "nothing";



  return (
    <>
      {isloading ? <p>loading ... </p> : (
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-14'
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          {product?.products.map((p, index) => (
            <motion.div
              key={p.id}
              className='items-center'
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: index * 0.1 }}
            >

              <div className='m-2 p-6 border-gray-200 border-[2px] rounded-lg  shadow-md hover:shadow-xl transition-all overflow-auto'>
                <img src={p.images[0]} alt={p.title} className='self-center' />
                <button className="mt-4  text-whhite rounded-2xl px-6 py-1 mb-2  after:text-red-500 after:bg-none "
                  onClick={() => {
                    addFavorite(p, setFavorite, setRed, incrementFavorite)
                    dis = true;

                  }}
                  disabled={dis}
                >
                  <FaHeart size={30} className={red[p.id] ? "text-red-500" : "text-gray-300"} />
                </button>
                <h1 className='text-[25px] text-gray-700 font-bold m-3 text-center'>{p.title}</h1>
                <p className='text-gray-500 py-4 hover:text-gray-700 text-center text-[18px]'>
                  {(p.description).slice(0, 30)}
                </p>
                <p className='text-[20px] text-pink-700 font-semibold w-full text-center h-16 rounded p-2 mb-2'>✨{p.category}✨</p>

                <div className='flex justify-between'>
                  <p className='font-bold text-xl text-center text-[#132745]'> {p.price} $ </p>
                  <button
                    onClick={() => {
                      incrementProduct(p.id)
                      increment()
                      handleClick(p)
                    }}
                    className='px-4 py-2 text-nowrap bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 hover:text-[18px] transition-all'
                  >
                    Add to Cart
                  </button>

                  {/* <button onClick={() => removeFromFavorites(p.id, setFavorite)}> delete </button> */}

               

                </div>
                </div>
              
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  )

}

export default Products;
