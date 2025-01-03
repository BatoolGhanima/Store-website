
import Product from './Product'
export const ProductShow = ({ title, description, product, error }) => {


    return (
        <>

            <div className=''>
                <h1 className=' text-[40px] text-pink-700 font-bold  text-center p-6 mb-6'> {title}</h1>
                <p className='text-gray-500 py-4 hover:text-gray-700 text-center m-8 '>{ description}</p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

                {product.map((product) => (
                    <div className='flex flex-row justify-between'>
                        <Product
                            key={product.id}
                            images={product.images[0]}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            category={product.category}

                        />
                        <p className='text-red-600 text-[30px] '>{error}</p>

                    </div>
                ))
                }
            </div>








        </>
    )
}
