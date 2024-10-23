import { Outlet , useLocation, Navigate } from "react-router-dom";
import { ProjectAuth } from "../firebase/Firebase";

const PrivateRouteLayout = () => {
    const location = useLocation()
 

  return ProjectAuth.currentUser ? (<Outlet />) : (<Navigate to = "/authentication" state={{from : location}} replace />)
}

export default PrivateRouteLayout