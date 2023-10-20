
const SingleProduct = ({ product }) => {

    const { name, photo, Category, Price, Rating,Description} = product || {};

    return (
        <div className="card bg-base-100 shadow-xl mb-10">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="p-7">
                <h2 className="card-title">Name : {name}</h2>
                <h1>Category : {Category}</h1>
                <p>Price : {Price}</p>
                <p>Rating : {Rating}</p>
                <p>Description : {Description}</p>
                <div className="card-actions justify-between mt-10">
                    <button className="btn bg-green-600 text-xl font-bold">Update</button>
                    <button className="btn bg-green-600 text-xl font-bold">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;