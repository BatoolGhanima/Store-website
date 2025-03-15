import {useContext} from 'react'
import authContext from './authContext'
const useAuth = ()=>{
   const contextAuth = useContext(authContext);
   return contextAuth
}
export default useAuth