
import axios from "axios";
import { useForm } from "react-hook-form";
import { authContext } from "./auth/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import myImage from './images/bgForm.jpg'
import { FaShopify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaConnectdevelop } from "react-icons/fa6";
export default function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { dispatch } = useContext(authContext)
  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username: data.username,
      password: data.password

    })
    dispatch({ type: 'Login', payload: response.data })
    const u = localStorage.getItem('token')
    console.log(u)
  };

  return (

    <>
      {/* container div */}
      <center>
        <div className="flex w-3/4 m-10 rounded-xl border-gray-200 border shadow-lg h-[750px] ">



          {/* left div */}
          <div className="hidden  lg:block lg:w-[50%] relative overflow-hidden rounded-tl-xl rounded-bl-xl">
            <motion.div

              className='items-center'
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, }}
            >

              <img src={myImage} alt="" className=" absolute" />
              <div className=" relative  flex flex-col justify-center items-center bottom-0">
                <h1 className="text-[30px] text-white font-bold">Welcome Back</h1>
                <p>Sign in to continue your juourny with us</p>

              </div>
            </motion.div>
          </div>

          {/* right div */}


          <div className="w-full md:w-full lg:w-[50%]">

            <motion.div

              className='items-center  text-center font-serif mx-2 p-4'
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, }}
            >
              <center>
                <Link to={'/'}>
                  <FaShopify className="text-8xl fill-blue-500 hover:fill-blue-600 from-blue-600 text-center" />
                </Link>
              </center>

              <h2 className=" text-3xl font-bold text-center mb-8">sign in to your account </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">


                {/* Email Field */}
                <div>
                  <label className="block text-gray-700">username</label>
                  <input
                    {...register("username")}
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter your username"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-gray-700">Password</label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex justify-between" >
                  <div>
                    <input
                      type='checkbox'
                      className="size-4 m-4 px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your password"
                    />
                    <label className=" text-gray-700">Remember me </label>
                  </div>

                  <a href="#" className="text-blue-500 hover:text-blue-400 underline">forget password?</a>
                </div>


                {/* Submit Button */}
                <button
                  
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  submit
                </button>

              </form>
              <div className="mt-6 w-full">
                <p className=" text-gray-400 text-[10px] lg:text-[20px] " >___________________   <span className="text-[15px]">  or continue with  </span>  ___________________</p>

                <div className="flex m-4 justify-around w-full ">
                  <a href="" className=" text-[25px] lg:text-[40px] px-12  lg:px-16 py-1 border border-gray-200 rounded-lg">  <FcGoogle /> </a>
                  <a href="" className=" text-[25px] lg:text-[40px] px-12 text-blue-500 px-16 py-1 border border-gray-200 rounded-lg">  <ImFacebook2 /></a>
                  <a href="" className=" text-[25px] lg:text-[40px] px-12 lg:px-16 py-1 border border-gray-200 rounded-lg">  <FaConnectdevelop /> </a>

                </div>
                <p className="text-gray-500 mt-8"> Don't have an account ? <a href="#" className="text-blue-600"> Signin </a></p>
              </div>

            </motion.div>


          </div>

        </div>
      </center>
      {/* end of container div */}





    </>);
}
