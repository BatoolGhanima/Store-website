import { useContext, useEffect } from "react"
import favoriteContext from "./favoriteContext"
import { motion } from "framer-motion";
import favoriteSideBarContext from "./favoriteSideBarContext";
import { FaHeart } from "react-icons/fa";
import useFavoriteCounter from "./favoriteStore";
import { Link } from "react-router-dom";


const Favorite = () => {
    const { isFavOpen, setIsFavOpen } = useContext(favoriteSideBarContext)
    const { favorite, setFavorite } = useContext(favoriteContext)
    const { dicrementFavorite } = useFavoriteCounter();
    console.log(isFavOpen)
    useEffect(() => {
        console.log("isFavOpen in Favorite.jsx:", isFavOpen);
    }, [isFavOpen]);
    const removeFromFavorites = (id, setFavorite) => {
        setFavorite(prevFavorites => prevFavorites.filter(item => item.id !== id));
        dicrementFavorite()
    };
    return (
        <>
            {isFavOpen && (

                <motion.div
                    key={isFavOpen}
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0  w-3/4 md:w-1/2 lg:w-1/3 h-full  bg-gradient-to-r from-purple-500  to-blue-400/100  text-white shadow-lg md:hidden flex flex-col items-center overflow-auto  space-y-6 z-30"
                    style={{ display: isFavOpen ? "flex" : "none" }}
                >
                    <h1 className="mt-6 text-2xl font-bold ">Your Favorite Products </h1>
                    <button
                        className="absolute top-2 right-5 text-2xl hover:text-3xl"
                        onClick={() => setIsFavOpen(false)}
                    >
                        x
                    </button>

                    {favorite && favorite.length > 0 ? (
                        favorite.map((f) => (
                            <div key={f.id} className="m-2 p-4  justify-center items-center  border-b-2">
                                <div className="flex justify-between items-center">
                                    <img src={f.images[0]} alt={f.title} className="w-[100px] mr-2" />
                                    <p className="text-[20px] text-gray-800 font-bold px-2">${f.price}</p>
                                    <button onClick={() => {
                                        removeFromFavorites(f.id, setFavorite)
                                    }}
                                        className="text-red-600 hover:text-gray-600"> <FaHeart size={30} /> </button>

                                </div>
                                <div className="flex">
                                    <p className="text-[20px] font-bold">{f.title}</p>
                                   
                                </div>
                            </div>
                            
                        ))
                    ) : (
                            <div className="flex flex-col justify-center items-center">
                              <h2 className="text-3xl text-gray-700  ">You didn't add anything :( </h2>
                            <button className="image-button hover:text-2xl transition-all m-4 " onClick={()=>setIsFavOpen(false)}> <Link to={'/product'}>Shopping</Link> </button>  
                            </div>
                            

                      )}
                    

                </motion.div>
            )}


        </>
    )
}

export default Favorite