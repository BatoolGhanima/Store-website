import { useReducer } from "react"
import { createContext } from "react"
import authReducer from "./authReducer"

export const authContext = createContext()
const AuthProvider = ({ children }) => {

    const initialState = {
        token: localStorage.getItem('token') || null
      }
      
      const [auth, dispatch] = useReducer(authReducer, initialState)
      
    return (
        <authContext.Provider value={{ auth, dispatch }}>
            {children}
        </authContext.Provider>
    )
}
export default AuthProvider
