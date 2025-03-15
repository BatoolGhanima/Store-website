import { Navigate } from "react-router-dom";

const ProtectedRout = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/profile" />;
};

export default ProtectedRout;
