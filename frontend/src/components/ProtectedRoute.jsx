import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Loading....</div>;

  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
