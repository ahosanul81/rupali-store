import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ReactStars from "react-rating-stars-component";
import { TbCurrencyTaka } from "react-icons/tb";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { PiEyeThin } from "react-icons/pi";


const Products = () => {
    const axiosPublic = useAxiosPublic()
    const [category, setCategory] = useState('')
    const [priceRange, setPriceRange] = useState('')
    const [brandName, setBrandName] = useState('')
    const [filteredProduct, setFilteredProduct] = useState([])
    // console.log(filteredProduct);
    
    console.log(category, priceRange, brandName);

    const { data: products = [] } = useQuery({
        queryKey: ['productData'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/products')
            return data
        }
       
    })
  
    
    // console.log(products);

    useEffect(() => {
        let filtered = products;

        if (category) {
            filtered = filtered.filter(product => product.categoryName === category);
        }

        if (priceRange) {
            const [minPrice, maxPrice] = priceRange.split('-').map(Number);
            filtered = filtered.filter(product => {
                const productPrice = parseInt(product.price, 10);
                return (maxPrice ? productPrice >= minPrice && productPrice <= maxPrice : productPrice >= minPrice);
            });
        }

        if (brandName) {
            filtered = filtered.filter(product => product.brandName === brandName);
        }

        setFilteredProduct(filtered);
    }, [category, priceRange, brandName, products]);

    // useEffect(() => {
    //     const fetchProductsByCategory = async () => {
    //         const encodedCategory = encodeURIComponent(category)
      
    //         try {
    //             const { data } = await axiosPublic.get(`/products/category?category=${encodedCategory}`);
    //             console.log(data);
               
    //         } catch (error) {
    //             console.error("Error fetching products by category:", error);
    //         }
    //     };

    //     if (category) {
    //         fetchProductsByCategory();
    //     }
    // }, [axiosPublic, category, priceRange, brandName]);

    return (
        <div className="mt-5">
            <div className="grid grid-cols-4 gap-8">
                <div className="relative">
                    {/* <input  type="text" name="category" id="category" placeholder="Select Category" />
                    <VscChevronDown className="absolute right-4 top-3 text-xl" /> */}

                    <select onChange={(e) => setCategory(e.target.value)} className=" h-10 border mt-1 rounded px-4 w-full bg-gray-50" id="category" name="category" >
                        <option >Choose a category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="home&Living">Home & Living</option>
                        <option value="beauty&Personalcare">Beauty & Personal Care</option>
                        <option value="sports">Sports</option>
                    </select>
                </div>

                <div className="relative">
                    {/* <input className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" type="text" name="brandName" id="brandName" placeholder="Select brand name" />
                    <VscChevronDown className="absolute right-4 top-3 text-xl" /> */}

                    <select onChange={(e) => setPriceRange(e.target.value)} className=" h-10 border mt-1 rounded px-4 w-full bg-gray-50" id="priceRange" name="priceRange">
                        <option >Choose a price range</option>
                        <option value="less5000">Less 5000</option>
                        <option value="5001-10000">5001-10000</option>
                        <option value="10001-15000">10001-15000</option>
                        <option value="15001-25000">15001-25000</option>
                        <option value="25000+">25000+</option>
                    </select>
                </div>

                <div className="relative">
                    {/* <input className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" type="text" name="priceRange" id="priceRange" placeholder="Select price range" />
                    <VscChevronDown className="absolute right-4 top-3 text-xl" /> */}

                    <select onChange={(e) => setBrandName(e.target.value)} className=" h-10 border mt-1 rounded px-4 w-full bg-gray-50" id="category" name="category">
                        <option >Choose a brand name</option>
                        <option value="motorola">Motorola</option>
                        <option value="samsung">Samsung</option>
                        
                    </select>
                </div>

            </div>

            {/* <h1>product {products.length}</h1> */}

            <div className="grid grid-cols-4 gap-8 mt-5">

                {
                   filteredProduct.map(({ _id, productName, categoryName, brandName, price, discount, productStatus, rating, imageUrl }) => <div key={_id} className="relative space-y-2">
                        <div className="bg-productCardBg ">
                            <img className="w-4/5 h-64 p-7 mx-auto" src={imageUrl}></img>
                        </div>


                        <div>
                            <h3>{productName}</h3>
                            <div className="flex items-center justify-between">
                                <h1 className="text-slate-500 uppercase">{brandName}</h1>
                                <h1 className="text-slate-500 uppercase">{categoryName}</h1>
                            </div>
                        </div>
                        <hr />
                        <div className="flex items-center justify-between">
                            <h3 className="flex items-center gap-1"><TbCurrencyTaka className="text-2xl" />{price}</h3>
                            <ReactStars
                                count={5}
                                value={rating}
                                isHalf={true}
                                // onChange={ratingChanged}
                                size={20}
                                activeColor="#ffd700"
                            />
                        </div>
                        <hr />

                        <div className="flex items-center justify-between mt-4">
                            <button><PiEyeThin className=" text-xl" /> </button>
                            <button><CiHeart className=" text-xl" /></button>
                            <button className="flex items-center gap-1"><CiShoppingCart /> Add to cart</button>
                        </div>
                        <hr />

                        <div>
                            {
                                productStatus && <>
                                    <div className="newBadge"></div>
                                    <div className="w-12 h-8 bg-green-600 text-white text-sm  absolute top-2 -right-2 rotate-90 flex justify-center items-center">
                                        NEW
                                    </div>
                                </>
                            }

                            {
                                discount > 0 && <div>
                                    <div className="discountBadge"></div>
                                    <div className="w-12 h-8 bg-red-500 text-white text-sm  absolute top-2 right-[2.6rem] rotate-90 flex justify-center items-center">
                                        {discount}%
                                    </div>
                                </div>
                            }


                        </div>


                    </div>)
                }

            </div>
        </div>
    );
};

export default Products;