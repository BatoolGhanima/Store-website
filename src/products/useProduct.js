import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const useProduct = () => {
    const fetchData = async () => {
        return axios.get('https://dummyjson.com/products')
        .then((res)=>res.data)
        
    }
    return useQuery({
        queryKey: ['products'],
        queryFn : fetchData,
    })
}
export default useProduct