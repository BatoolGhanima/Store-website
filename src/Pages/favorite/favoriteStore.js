import { create } from "zustand"
const useFavoriteCounter = create(set => ({
    favoriteCounter: 0,
    incrementFavorite: () => set(store => ({ favoriteCounter: store.favoriteCounter + 1 })),
    dicrementFavorite: () => set(store => ({ favoriteCounter: store.favoriteCounter - 1 })),


}))

export  default useFavoriteCounter