import { NavLink } from 'react-router-dom';
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import { LuUsers2 } from "react-icons/lu";
const Navbar = () => {
    const navlinks = <>
        <li><NavLink to={'/'} className={({ isActive }) =>  isActive ? "border-b-2 border-border pb-1" : ""}>Home</NavLink></li>
        <li><NavLink to={'/shop'} className={({ isActive }) =>  isActive ? "border-b-2 border-border pb-1" : ""}>Shop</NavLink></li>
        <li><NavLink to={'/deals'} className={({ isActive }) =>  isActive ? "border-b-2 border-border pb-1" : ""}>Deals</NavLink></li>
        <li><NavLink to={'/newArrival '} className={({ isActive }) =>  isActive ? "border-b-2 border-border pb-1" : ""}>New Arrival</NavLink></li>
        <li><NavLink to={'/contactUs '} className={({ isActive }) =>  isActive ? "border-b-2 border-border pb-1" : ""}>Contact Us</NavLink></li>
    </>
    return (
        <header className='grid grid-cols-5 py-4 border-b-[1px] border-slate-300'>
            <div className=''>
                <h1>Rupali Store</h1>
            </div>

            <nav className='col-span-2'>
                <ul className='flex items-center justify-evenly font-semibold'>
                    {navlinks}
                </ul>
            </nav>

            <div className=''>
               <ul className='flex items-center justify-evenly'>
                    <li> <button className='flex items-center gap-2'> <span><LuUsers2 /></span> Sign In</button></li>
                    <span>/</span>
                    <li> <button>Create an account</button></li>
               </ul>
               
               
            </div>

            <div className='flex items-center justify-between pl-12 text-2xl'>
                <CiSearch />
                <CiHeart />
                <CiShoppingCart />
                <HiBars3 />
            </div>
        </header>
    );
};

export default Navbar;