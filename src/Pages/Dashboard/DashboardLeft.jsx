
import { NavLink } from 'react-router-dom';

const DashboardLeft = () => {
    const navlinks = <>
        <li><NavLink to={"/dashboard/addProduct"}>Add Product</NavLink></li>
    </>
    return (
        <div>
            <ul>
                {navlinks}
            </ul>
        </div>
    );
};

export default DashboardLeft;