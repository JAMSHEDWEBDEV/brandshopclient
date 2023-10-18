import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    
    if(loading){
        return <div className="flex justify-center mt-52"><span className="loading loading-spinner loading-lg text-9xl"></span></div>
    }
     
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/signIn"></Navigate>;
};

export default PrivateRoute;