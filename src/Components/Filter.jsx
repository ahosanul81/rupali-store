import { useState } from 'react';

const Filter = () => {
    const [category, setCategory] = useState('')
    const [priceRange, setPriceRange] = useState('')
    const [brandName, setBrandName] = useState('')
    console.log(category, priceRange, brandName);
    return (
        <div className="grid grid-cols-4 gap-8">
            <div className="relative">
                {/* <input  type="text" name="category" id="category" placeholder="Select Category" />
            <VscChevronDown className="absolute right-4 top-3 text-xl" /> */}
                <label htmlFor="category">Choose a category</label>
                <select onChange={(e) => setCategory(e.target.value)} className=" h-10 border mt-1 rounded px-4 w-full bg-gray-50" id="category" name="category">
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="home&Living">Home & Living</option>
                    <option value="beauty&PersonalCare">Beauty & Personal Care</option>
                    <option value="sports">Sports</option>
                </select>
            </div>

            <div className="relative">
                {/* <input className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" type="text" name="brandName" id="brandName" placeholder="Select brand name" />
            <VscChevronDown className="absolute right-4 top-3 text-xl" /> */}
                <label htmlFor="priceRange">Choose a price range</label>
                <select onChange={(e) => setPriceRange(e.target.value)} className=" h-10 border mt-1 rounded px-4 w-full bg-gray-50" id="priceRange" name="priceRange">
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
                <label htmlFor="cars">Choose a brand name</label>
                <select onChange={(e) => setBrandName(e.target.value)} className=" h-10 border mt-1 rounded px-4 w-full bg-gray-50" id="category" name="category">
                    <option value="volvo">Electronics</option>
                    <option value="saab">Fashion</option>
                    <option value="mercedes">Home & Living</option>
                    <option value="audi">Beauty & Personal Care</option>
                    <option value="audi">Sports</option>
                </select>
            </div>

        </div>
    );
};

export default Filter;