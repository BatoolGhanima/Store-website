import axios from "axios";
import { ProductShow } from "./ProductShow";
import React, { useEffect, useState } from 'react'
function App() {

  const [product, setProduct] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => setProduct(res.data.products))
        .catch((err) => setError(err.message))

    }
    getData();
  }, [])
  return (
    <>

      <ProductShow title={"welcome in our gallery"} description={" we display a product and a discription of it, in addition to the category it belongs to and its price in dollar"} product={product} error={error}> </ProductShow>

    </>
  )
}

export default App
