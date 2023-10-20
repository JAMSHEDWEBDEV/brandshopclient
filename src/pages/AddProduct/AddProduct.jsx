import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const Category = form.category.value;
        const Price = form.price.value;
        const Rating = form.rating.value;
        const Description = form.description.value;
        const photo = form.photo.value;
        const newProduct = {name,Category,Price,Rating,Description,photo}
        console.log(newProduct);

    //    send data to server 
        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Your Product added successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }

    return (
        <div className="bg-[#F4F3F0] mb-5 max-w-5xl mx-auto p-10">
        <h1 className="text-center text-3xl font-bold text-orange-800 my-5">Add New Product</h1>
        <form onSubmit={handleAddProduct}>
            <div className="flex gap-8">
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Enter Product Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" placeholder="Enter category name" className="input input-bordered w-full" />
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
                        <input type="text" name="price" placeholder="Enter product price $0.00" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" placeholder="Enter Product Rating" className="input input-bordered w-full" />
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
                        <input type="text" name="description" placeholder="Enter Product Description" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className=" mt-7">
                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <label className="input-group">
                    <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered w-full" />
                </label>
            </div>
            <input type="submit" value="Add Product" className="btn-block bg-black text-white py-3 mt-5" />
        </form>
    </div>
    );
};

export default AddProduct;