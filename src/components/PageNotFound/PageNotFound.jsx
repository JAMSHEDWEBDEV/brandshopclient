import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="flex justify-center items-center my-10 text-center">
            <div>
                <img className="h-[500px]" src="https://i.ibb.co/HxXJKBX/pagenotfound.jpg" alt="image coming" />
                <Link to="/"><button 
                className=" btn btn-primary mt-5 text-2xl font-bold text-black">Go Home</button></Link>
            </div>
        </div>
    );
};

export default PageNotFound;