import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const updateProd = useLoaderData();
    const {_id, name, photo, Category, Price, Rating,Description} = updateProd || {};

    const handleUpdateProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const Category = form.category.value;
        const Price = form.price.value;
        const Rating = form.rating.value;
        const Description = form.description.value;
        const photo = form.photo.value;
        const newUpdateProduct = {name,Category,Price,Rating,Description,photo}
        console.log(newUpdateProduct);

    //    send data to server 
        fetch(` https://grocerry-shop-server-bqznutw8g-md-jamshed-mias-projects.verce
l.app/products/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newUpdateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Your Product update successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }

    return (
        <div className="bg-[#F4F3F0] mb-5 max-w-5xl mx-auto p-10">
            <h1 className="text-center text-3xl font-bold text-orange-800 my-5">Update Your Product: {updateProd.length}</h1>
            <form onSubmit={handleUpdateProduct}>
                <div className="flex gap-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Enter Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={Category} placeholder="Enter category name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 2nd row  */}
                <div className="flex gap-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={Price} placeholder="Enter product price $0.00" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={Rating} placeholder="Enter Product Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 3nd row  */}
                <div className="mt-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={Description}  placeholder="Enter Product Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className=" mt-7">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Update Product" className="btn-block bg-black text-white py-3 mt-5" />
            </form>
        </div>
    );
};

export default UpdateProduct;