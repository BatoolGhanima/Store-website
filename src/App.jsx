import Products from "./products/Products"
import Home from './Pages/home/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Pages/Layout"
import Profile from "./Pages/Profile"
import Card from './Card'
import AuthProvider from "./Pages/auth/AuthProvider"
import Favorite from "./Pages/favorite/Favorite"
import Details from "./Pages/Details"
import ProtectedRout from "./Pages/ProtectedRout"
const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,
   
    children: [
      {
        path: '/',
        element: (
       
            <Home />
            
        )
         
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/product',
        element:
          <ProtectedRout>
             <Products /> 
          </ProtectedRout>
        
      },
      {
        path: '/details/:id',
        element:
        <ProtectedRout>
             <Details />
          </ProtectedRout>
          
      },
      {
        path: '/card',
        element:
        <ProtectedRout>
          <Card />
     </ProtectedRout>
        
      },
      {
        path: '/favorite',
        element: <Favorite />
      }
     
    ]
  }


])

function App() {


 
  return (
    <>
      {/* <AuthProvider>
        {token ? (
          <RouterProvider router={router}></RouterProvider>

        ) : (
          <Profile></Profile>
        )}
      </AuthProvider> */}

      <AuthProvider >
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>


    </>
  )
}

export default App
