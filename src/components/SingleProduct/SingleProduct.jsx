import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleProduct = ({ product,products,setProducts}) => {

    const {_id, name, photo, Category, Price, Rating,Description} = product || {};

    const handleDelete = id =>{
        console.log('delete', id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(` https://grocerry-shop-server-bqznutw8g-md-jamshed-mias-projects.verce
l.app/products/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaining = products.filter(cof => cof._id !== _id)
                            setProducts(remaining);
                        }
                    })

            }
        })

    }

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
                    <Link to={`/update/${_id}`}><button className="btn bg-green-600 text-xl font-bold">Update</button></Link>
                    <button
                    onClick={()=>handleDelete(_id)} 
                    className="btn bg-green-600 text-xl font-bold">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;