
const FeatureProduct = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* 1st feature product  */}
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/gWTjGY7/product-1.png" alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Three carrot Vegetables</h2>
                    <p className="text-xl font-bold">Price :<span className="text-red-400"> $30.00</span></p>
                    <div className="card-actions">
                        <button className="btn bg-green-600 text-black font-bold">Shop Now</button>
                    </div>
                </div>
            </div>
            {/* 2nd feature product  */}
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/wSbzzRY/product-2.png" alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cold Coffee</h2>
                    <p className="text-xl font-bold">Price :<span className="text-red-400"> $50.00</span></p>
                    <div className="card-actions">
                        <button className="btn bg-green-600 text-black font-bold">Shop Now</button>
                    </div>
                </div>
            </div>
            {/* 3rd feature product  */}
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/tHJnmhq/product-3.png" alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Bengal Meat Beef Bone</h2>
                    <p className="text-xl font-bold">Price :<span className="text-red-400"> $90.00</span></p>
                    <div className="card-actions">
                        <button className="btn bg-green-600 text-black font-bold">Shop Now</button>
                    </div>
                </div>
            </div>
            {/* 4th feature product  */}
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/xmgrJJw/product-4.png" alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cherry Pineapple</h2>
                    <p className="text-xl font-bold">Price :<span className="text-red-400"> $22.00</span></p>
                    <div className="card-actions">
                        <button className="btn bg-green-600 text-black font-bold">Shop Now</button>
                    </div>
                </div>
            </div>
            {/* 5th feature product  */}
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/ZHGbkXr/product-5.png" alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Dalim(Pomegranate)</h2>
                    <p className="text-xl font-bold">Price :<span className="text-red-400"> $40.00</span></p>
                    <div className="card-actions">
                        <button className="btn bg-green-600 text-black font-bold">Shop Now</button>
                    </div>
                </div>
            </div>
            {/* 6th feature product  */}
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/z2TBZGQ/product-6.png" alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Badhakopi(Cabbage)</h2>
                    <p className="text-xl font-bold">Price :<span className="text-red-400"> $20.00</span></p>
                    <div className="card-actions">
                        <button className="btn bg-green-600 text-black font-bold">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureProduct;