
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useCloudinaryApi from "../../Hooks/useCloudinaryApi";

const AddProduct = () => {
    const axiosPublic = useAxiosPublic()
    const handleUploadFile = useCloudinaryApi()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const productName = form.productName.value;
        const categoryName = form.categoryName.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const discount = form.discount.value;
        const productStatus = form.productStatus.value;
        const rating = form.rating.value;
        const imageFile = form.image.files[0];

        // console.log(productName, categoryName, brandName, price, discount, productStatus, rating, imageFile);

        const imageUrl = await handleUploadFile(imageFile)
        
        const productInfo = {productName, categoryName, brandName, price, discount, productStatus, rating, imageUrl}
        const { data } = await axiosPublic.post('/products', productInfo)
        console.log(data);
        
    }

    return (
        <div className=''>
            <h1 className='text-4xl font-bold ml-5'>Add Product </h1>


            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                {/* <div className="text-gray-600">
                                    <p className="font-medium text-lg">Personal Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div> */}

                                <div className="lg:col-span-full">
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label htmlFor="full_name">Product Name</label>
                                                <input type="text" name="productName" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>


                                            <div className="md:col-span-3">
                                                <label htmlFor="categoryName">Category Name</label>
                                                <input type="text" name="categoryName" id="categoryName" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="full_name">brand Name</label>
                                                <input type="text" name="brandName" id="brandName" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="country">Price</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input type="number" name="price" id="price" placeholder="Price" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                                </div>
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="discount">Discount</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input type="number" name="discount" id="discount" placeholder="discount" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />

                                                </div>
                                            </div>

                                            <div className="md:col-span-1">
                                                <label htmlFor="productStatus">Product Status</label>
                                                <input type="text" name="productStatus" id="productStatus" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label htmlFor="rating">Rating</label>
                                                <input type="text" name="rating" id="rating" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label htmlFor="image">Image</label>
                                                <input type="file" name="image" id="image" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>




                                            <div className="md:col-span-5 text-right">
                                                <div className="inline-flex items-end">
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                                </div>
                                            </div>


                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AddProduct;