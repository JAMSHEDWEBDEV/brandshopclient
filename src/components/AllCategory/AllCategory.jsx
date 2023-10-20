
const AllCategory = ({category}) => {
    const {category_img,category_name} = category || {};
    return (
        <div>
            <div className="text-center border rounded">
                <img className="w-full h-[250px]" src={category_img} alt="" />
                <h1 className="bg-green-600 py-2 text-black font-bold text-xl">{category_name}</h1>
            </div>
        </div>
    );
};

export default AllCategory;