
import { create } from "zustand";

const useProductCounterStore = create((set) => ({
  productCounters: {}, 
  incrementProduct: (id) =>
    set((state) => ({
      productCounters: {
        ...state.productCounters,
            [id]: (state.productCounters[id] || 0 ) + 1,
      },
    })),
  decrementProduct: (id) =>
    set((state) => ({
      productCounters: {
        ...state.productCounters,
        [id]: Math.max((state.productCounters[id] || 0) - 1, 0)
      },
    })),
}));

export default useProductCounterStore;
