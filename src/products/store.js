import { create } from "zustand"
const useCounterStore = create(set => ({
    counter: 0,
    increment: () => set(store => ({ counter: store.counter + 1 })),
    dicrement: () => set(store => ({ counter: store.counter - 1 })),
    
}))

export  default useCounterStore