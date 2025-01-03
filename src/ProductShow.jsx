import React, { useEffect, useState } from 'react'
import axios from "axios"
import Product from './Product'
export const ProductShow = ({title}) => {

    const [product, setProduct] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const getData = async () => {
            await axios
                .get("https://dummyjson.com/products")
                .then((res) => setProduct(res.data.products))
                .catch((err) => setError(err.message))

        }
        getData();
    }, [])




    return (
        <>
            <div className='bg-gray-50'> 
            <div className=''> 
                <h1 className=' text-[40px] text-pink-700 font-bold  text-center p-6 mb-6'> {title}</h1>
                <p className='text-gray-500 py-4 hover:text-gray-700 text-center m-8 '> we display a product and a discription of it, in addition to the category it belongs to and its price in dollar</p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    product.map((product) => (
                        <div className='flex flex-row justify-between'>
                            <Product
                                key={product.id}
                                images={product.images[0]}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                category={product.category}

                            />
                        </div>
                    ))
                }
            </div>
</div>







        </>
    )
}
