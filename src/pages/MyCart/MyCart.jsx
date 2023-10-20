import { useLoaderData } from "react-router-dom";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { useState } from "react";

const MyCart = () => {

    const myProducts = useLoaderData();
    const [products,setProducts] = useState(myProducts);

    return (
        <div>
            <h1 className="text-4xl text-center my-10 font-bold">Your Total Added Product: {myProducts.length} </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <SingleProduct
                     key="product._id" 
                    product={product}
                    products={products}
                    setProducts={setProducts}
                    ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default MyCart;