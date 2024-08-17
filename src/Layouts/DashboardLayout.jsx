
import DashboardLeft from '../Pages/Dashboard/DashboardLeft';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className=' flex gap-6 bg-dashboardBg'>
            <div className='w-1/5 min-h-screen  text-dashboardLeftText'>
                <DashboardLeft></DashboardLeft>
            </div>
            <div className='w-4/5 p-5  border-2 border-green-400'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;