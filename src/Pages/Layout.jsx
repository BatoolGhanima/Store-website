
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import ProductProvider from '../products/ProductProvider'
import FavoriteProvider from './favorite/FavoriteProvider'
import FavoriteSideBarProvider from './favorite/FavoriteSideBarProvider'
import Favorite from './favorite/Favorite'
const Layout = () => {
    return (
        <>
            <ProductProvider>
                <FavoriteProvider>
                    <FavoriteSideBarProvider>
                        <Navbar></Navbar>
                        <Favorite></Favorite>
                        <Outlet />
                    </FavoriteSideBarProvider>
                </FavoriteProvider>
            </ProductProvider>
        </>
    )
}
export default Layout
