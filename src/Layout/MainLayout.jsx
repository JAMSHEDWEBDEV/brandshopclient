import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="px-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;