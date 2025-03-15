import { useReducer } from "react"
import { createContext } from "react"
import authReducer from "./authReducer"

export const authContext = createContext()
const AuthProvider = ({ children }) => {

    const [auth, dispatch] = useReducer(authReducer, {})

    return (
        <authContext.Provider value={{ auth, dispatch }}>
            {children}
        </authContext.Provider>
    )
}
export default AuthProvider
