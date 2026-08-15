import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Loading....</div>;

  if (user) return <Navigate to="/chatwindow" replace />;

  return children;
};

export default PublicRoute;
