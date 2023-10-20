import Banner from "../../components/Header/Banner/Banner";
import { MdLocalShipping, MdAddCall } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import Footer from "../../components/Footer/Footer";
import About from "../About/About";
import AllCategory from "../../components/AllCategory/AllCategory";
import { useLoaderData } from "react-router-dom";
import FeatureProduct from "../../components/FeatureProduct/FeatureProduct";

const Home = () => {
    const categories = useLoaderData();
    console.log(categories);

    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                <div className="border-2 border-green-600 flex gap-5 items-center p-2 rounded-r-full rounded-l-full">
                    <div>
                        <h1 className="bg-green-600 text-white rounded-full p-3 text-4xl"><MdLocalShipping /></h1>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Free Shipping</h1>
                        <h3>On every order, every day!</h3>
                    </div>
                </div>
                <div className="border-2 border-green-600 flex gap-5 items-center p-2 rounded-r-full rounded-l-full">
                    <div>
                        <h1 className="bg-green-600 text-white rounded-full p-3 text-4xl"><AiTwotoneLock /></h1>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Secure Payment</h1>
                        <h3>We value your security</h3>
                    </div>
                </div>
                <div className="border-2 border-green-600 flex gap-5 items-center p-2 rounded-r-full rounded-l-full">
                    <div>
                        <h1 className="bg-green-600 text-white rounded-full p-3 text-4xl"><MdAddCall /></h1>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Customer Service</h1>
                        <h3>Support 24/7 (0123) 123 569</h3>
                    </div>
                </div>
            </div>
            {/* all category data start  */}
            <div>
                <div className="text-center my-10">
                    <p className="text-green-700 font-bold">100% Organic Food Provide</p>
                    <h1 className="text-5xl font-bold">Browse All Categories</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        categories.map(category => <AllCategory key={category.id} category={category}></AllCategory>)
                    }
                </div>
            </div>
            {/* all category data end    */}
            {/* Feature Product start  */}
            <div>
                <div className="text-center my-10">
                    <p className="text-green-800 font-bold">Featured Products</p>
                    <h1 className="text-4xl font-bold">Fresh Products Daily!</h1>
                </div>
                <div>
                    <FeatureProduct></FeatureProduct>
                </div>
            </div>
            {/* Feature Product end  */}
            <div className="my-24">
                <About></About>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;