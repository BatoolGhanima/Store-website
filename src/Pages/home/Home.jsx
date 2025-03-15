
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './homeStyle.css'
import myImage from '../images/product.jpg'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import useProduct from '../../products/useProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext } from 'react'
import useCounterStore from '../../products/Store';
import productContext from '../../products/productContext'
import useProductCounterStore from '../../products/productCounterSotre'
import 'swiper/css'


const Home = () => {

  const { increment } = useCounterStore()
  const { data: product, error, isloading } = useProduct()
  if (isloading) {
    console.log('....')
    return <p>loading ...</p>
  }

  if (error) return <p>{error.message}</p>
  const { setData } = useContext(productContext)
  const { incrementProduct } = useProductCounterStore();

  const handleClick = (pc) => {

    setData((prev) => {
      const product = prev.find(p => p.id === pc.id)
      if (product) {
        return prev.map(p => p.id === pc.id ? { ...p, quntity: 1 } : p);
      }
      return [...prev, pc]

    })
  }
  return (
    <>
      <div className=''>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}

        >
          <center>
            <div className="w-[350px] md:w-[700px] lg:w-[900pxx] image-container ">
              <img src={myImage} alt="img" />
              <div className="image-overlay">
                <motion.div className=''
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: -20 }}
                  transition={{ duration: 1.3, ease: "easeOut" }}>
                  <h1 className=' image-text  font-bold text-center m-4 mt-8'>Welcome To Our Products Store</h1>
                  <p className=" text-[25px] mb-2">Discover the latest gadgets and accessories at amazing prices </p>
                  <button className="image-button transition-colors"> <Link to={'/product'}>Shopping</Link> </button>

                </motion.div>
              </div>
            </div>
          </center>

          <p className='text-lg text-gray-500 p-4 m-2 mb-10'> This project is a simple e-commerce storefront showcasing products fetched from an API. Users can browse items, add them to a cart, and view the cart's contents. The app utilizes React Context for state management, allowing for efficient shopping cart functionality. Key features include dynamic product display and real-time cart total calculation.</p>

        </motion.div>

        <center>
          <div className='py-10'>
            <Swiper

              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={15}
              slidesPerView={1}
              navigation={false}
              pagination={{ clickable: false }}
              centeredSlides={true}
              loop={true}

              autoplay={{ delay: 3000, disableOnInteraction: true }} // تفعيل التشغيل التلقائي
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
            >
              <div className='flex gap-3 px-10'>

                {product?.products.map((p, index) => (
                  <SwiperSlide key={p.id}>
                    <motion.div

                      className='items-center'
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 2, delay: index * 0.1 }}
                    >
                      <div
                        className='w-[300px] bg-gray-800 m-2 p-6 border-gray-200 border-[2px] rounded-lg  shadow-lg hover:shadow-xl transition-all md:w-[450px]  h-[490px]'>
                        <div className=''>
                          <img src={p.images[0]} alt={p.title} className='self-center size-auto md:h-[200px] md:hover:h-[220px] transition-all' />
                        </div>
                        <h1 className='text-[20px] md:text-[30px]  text-black font-bold m-3 text-center'>{p.title}</h1>
                        <p className='text-gray-300 mb-6 hover:text-gray-200 text-center text-[14px] md:text-[18px]'>
                          {(p.description).slice(0, 100)}
                        </p>

                        <div className='flex gap-10 justify-center'>
                          <button
                            onClick={() => {
                              incrementProduct(p.id)
                              increment()
                              handleClick(p)
                            }}
                            className='px-2 text-[15px] w-[100px] md:w-[200px] md:text-[20px] hover:translate-x-1 transition-all py-2 text-nowrap bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700  '
                          >
                            Add to Cart
                          </button>
                          <Link to={`/details/${p.id}`}>
                            <button
                              className='px-2 text-[15px] w-[100px] md:w-[200px] md:text-[20px]  py-2 text-nowrap bg-gray-600 rounded-lg text-white font-semibold hover:bg-gray-500 hover:text-[19px] transition-all'
                            >show details </button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: -20 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className='my-14'
          >

            <Link to={'/product'} className='m-4 text-xl text-blue-700 font-semibold hover:text-2xl transition-all'> Show all products ... </Link>
            <br />
            <br />
            <div>
              <Link to={'/profile'} className='m-4 text-xl text-blue-700 font-semibold hover:text-2xl transition-all'>Get started </Link>
            </div>

          </motion.div>
        </center>

      </div>
    </>)
}

export default Home