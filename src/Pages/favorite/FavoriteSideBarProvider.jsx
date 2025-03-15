import { createContext, useState } from "react";
import favoriteSideBarContext from './favoriteSideBarContext'

const FavoriteSideBarProvider = ({ children }) => {
    const [isFavOpen, setIsFavOpen] = useState(false);

    return (
        <favoriteSideBarContext.Provider value={{ isFavOpen, setIsFavOpen }}>
            {children}
        </favoriteSideBarContext.Provider>
    );
};

export default FavoriteSideBarProvider;
