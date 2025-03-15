import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import addCard from '../products/addCard';
import productContext from "../products/productContext";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";

const singleUrl = "https://dummyjson.com/products";

const Details = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useQuery({
        queryKey: ["products", id],
        queryFn: async () => {
            const response = await axios.get(`${singleUrl}/${id}`);
            return response.data;
        },
    });

    if (isLoading)
        return <p className="text-center text-gray-600 text-lg mt-10">Loading...</p>;
    if (error)
        return (
            <p className="text-center text-red-500 text-lg mt-10">
                Error: {error.message}
            </p>
        );

    const { images, title, price, description, category, discountPercentage, stock } = data;

    const { setData } = useContext(productContext);
    const handleClick = (pc) => {
        addCard(pc, setData);
    };

    return (
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            {/* زر الرجوع */}
            <Link
                to="/"
                className="text-blue-500 hover:text-blue-700 text-lg mb-4 block"
            >
                ← Back Home
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="flex justify-center">
                    <img
                        src={images[0]}
                        alt={title}
                        className="w-full max-w-md object-cover rounded-lg shadow-md"
                    />

                </div>

                <div>
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">{title}</h2>
                    <p className="text-gray-500 text-[20px] text-center "> {category}</p>

                    <div className="flex gap-4 my-4">
                        <p className="text-2xl text-blue-700 font-bold mb-2 text-[35px]">${price}</p>
                        <p className="text-xl text-green-500 font-bold mb-2 text-[20px]">${discountPercentage}% OFF </p>
                    </div>

                    <p className="text-gray-600 mb-4">{description}</p>
                    <p className="text-xl text-gray-700 font-bold mb-2 text-[20px]"> stock: <span className=" text-green-600"> {stock} units </span></p>


                    <button


                        onClick={() => handleClick(data)}
                        className="mt-6 inline-flex items-center px-6 py-2 font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500  hover:to-purple-500 transition-all rounded-lg shadow-md text-xl hover:text-[22px]"
                    >
                        <FaShoppingCart className="mr-2" /> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
