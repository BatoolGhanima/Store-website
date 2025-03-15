import React, { useState } from 'react'

import favoriteContext from './favoriteContext'


const FavoriteProvider = ({ children }) => {
    const [favorite, setFavorite] = useState([])

    return (
        <favoriteContext.Provider value={{ favorite, setFavorite }}>
            {children}
        </favoriteContext.Provider>
    )
}
export default FavoriteProvider

