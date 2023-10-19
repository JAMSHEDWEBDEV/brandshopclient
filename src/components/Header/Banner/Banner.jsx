
const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-center items-center gap-7 my-8">
            <div className="text-center md:text-center lg:text-left space-y-3">
                <h4>Super fast delivery</h4>
                <h1 className="text-3xl lg:text-7xl font-bold">Healthy <span className="text-green-600">Life</span> With Fresh Groceries</h1>
                <p>This market is an upscale grocery store.This is the grocery store to go to if you want the best fresh meat and prepared food items in the area.</p>
                <button className="btn bg-green-500 font-bold">Shop Now</button>
            </div>
            <div>
                <img src="https://i.ibb.co/zh8k2KK/banner01.jpg" alt="banner_image" />
            </div>
        </div>
    );
};

export default Banner;