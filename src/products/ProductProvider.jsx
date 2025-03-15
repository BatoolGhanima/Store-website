import React, { useState } from 'react'
import productContext from './productContext'
const ProductProvider = ({ children }) => {
    const [data, setData] = useState([])

    return (
        <productContext.Provider value={{ data, setData }}>
            {children}
        </productContext.Provider>
    )
}
export default ProductProvider
