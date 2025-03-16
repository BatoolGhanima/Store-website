import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { motion } from "framer-motion";
import useCounterStore from "./products/Store";
import useFavoriteCounter from "./Pages/favorite/favoriteStore";
import { FaShoppingCart } from "react-icons/fa";
import favoriteSideBarContext from './Pages/favorite/favoriteSideBarContext'

const Navbar = ()=> {
  const [isOpen, setIsOpen] = useState(false);
  const counter = useCounterStore(c => c.counter)
  const { favoriteCounter } = useFavoriteCounter()
  const {isFavOpen , setIsFavOpen} = useContext(favoriteSideBarContext)
  return (
    <nav className="bg-blue-600 text-white p-4 text-[20px]  w-full mt-0 z-10">
      <div className="container mx-auto flex justify-between items-center z-10">

        <Link to="/" className="text-2xl font-bold">
          MyWebsite
        </Link>


        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-gray-200  hover:text-[22px] transition-all">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-200 hover:text-[22px] transition-all">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/product" className="hover:text-gray-200 hover:text-[22px] transition-all">
              Products
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                setIsFavOpen(true);
                console.log(isFavOpen)
              }}
              className='mr-6 px-4 py-2 '
             >
            <span className="text-lg hover:text-gray-300 "> Favorite {favoriteCounter} </span>
          </button>
        
            
          </li>
          <button
            className='mr-6 px-4 py-2 '
          >
            <span className="text-[15px] font-bold"> {counter} </span>
            <Link to={'/card'}> <FaShoppingCart size={30} className="hover:size-9 transition-all fill-white" /> </Link>
          </button>
        </ul>


        <div>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <CiMenuBurger size={30} fill="white" />
          </button>

        </div>

      </div>

     {/* sideBar for small screens */}
     
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-1/3 bg-blue-700 text-white shadow-lg md:hidden flex flex-col items-center justify-center space-y-6"
          >
            <button
              className="absolute top-5 right-5"
              onClick={() => setIsOpen(false)}
            >
              <CiMenuBurger size={30} fill="white" />
            </button>

            <Link to="/" className="text-lg hover:text-gray-300" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/profile" className="text-lg hover:text-gray-300" onClick={() => setIsOpen(false)}>
              Profile
            </Link>
            <Link to="/product" className="text-lg hover:text-gray-300" onClick={() => setIsOpen(false)}>
              Products
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className=''
          >
            
             <span className="text-[15px] font-bold"> {counter} </span>
               <Link to={'/card'}> <FaShoppingCart size={25} className="hover:size-9 transition-all fill-white" /> </Link>
            </button>
            <button
            onClick={() => {
             setIsOpen(false)
                setIsFavOpen(true)
              }}
              className='mr-6 px-4 py-2 '
             >
            <span className="text-lg hover:text-gray-300 "> Favorite {favoriteCounter} </span>
          </button>
            
          </motion.div>
        )}
     

    </nav>
  );
}

export default Navbar;
