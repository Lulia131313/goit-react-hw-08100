import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/slise";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  console.log(location);
  if (!isLoggedIn) {
    return children;
  }
  return <Navigate to={location.state?.from || "/"} />;
};

export default PublicRoute;
