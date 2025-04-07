import { Navigate } from "react-router-dom";
import { authContext } from "./auth/AuthProvider";
import { useContext } from "react";
const ProtectedRout = ({ children }) => {
  const { auth } = useContext(authContext)

  return auth.token ? children : <Navigate to="/profile" />;
};

export default ProtectedRout;
