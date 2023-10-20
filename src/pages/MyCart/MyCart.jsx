import { useLoaderData } from "react-router-dom";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

const MyCart = () => {

    const myProducts = useLoaderData();

    return (
        <div>
            <h1 className="text-4xl text-center my-10 font-bold">Your Total Added Product: {myProducts.length} </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    myProducts.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default MyCart;