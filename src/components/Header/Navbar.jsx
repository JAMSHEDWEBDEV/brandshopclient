import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => {
                console.error(error);
            })
    }

    const Navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
        <li><NavLink to="/signIn">SignIn</NavLink></li>
        <li><NavLink to="/signUp">SignUp</NavLink></li>
    </>

    return (
        <div className="navbar bg-blue-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Navlinks}
                    </ul>
                </div>
                <a className="normal-case text-2xl font-bold">Grocerry<span className="text-blue-700">Shop</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span className="mr-3 text-black font-bold">{user.email}</span>
                        <Link to="/signIn"
                            onClick={handleLogOut}
                            className="btn text-blue-700 font-bold">SignOut</Link>

                    </>
                    : <Link to="/signIn" className="btn text-blue-700 font-bold">SignIn</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;