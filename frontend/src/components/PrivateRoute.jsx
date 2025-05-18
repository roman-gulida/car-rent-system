import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function PrivateRoute({ children }) {
  const { user } = useAuthContext();

  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
