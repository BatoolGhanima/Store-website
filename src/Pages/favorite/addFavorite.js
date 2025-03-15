const addFavorite = (product, setFavorite, setRed, incrementFavorite) => {
    setFavorite((prev) => {
        const existingProduct = prev.find(p => p.id === product.id);
        if (existingProduct) {
            return prev.map(p => p.id === product.id ? { ...p, quantity: 1 } : p);
        }
        return [...prev, product];
    });

    setRed((prev) => ({
        ...prev,
        [product.id]: !prev[product.id]
    }));

    incrementFavorite();
};

export default addFavorite;
