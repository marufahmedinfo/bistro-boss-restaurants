import React from 'react';
import { FaBook, FaShopify, FaUsers, FaUtensils } from 'react-icons/fa6';
import { GrMail } from 'react-icons/gr';
import { MdWorkHistory } from 'react-icons/md';
import { TiCalendar, TiHome, TiShoppingCart, TiThList, TiThMenu, TiUserAdd } from 'react-icons/ti';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { HiOutlineLogout } from 'react-icons/hi';
import { IoSettings } from 'react-icons/io5';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(err => console.log(err))
    }
    return (
        <div className='flex'>
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className='menu p-4'>
                    {
                        isAdmin ?
                            <>

                                <li>
                                    <NavLink to={'/dashboard/adminHome'}>
                                        <TiHome className='mr-2' size={30} />
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/addItems'}>
                                        <FaUtensils className='mr-2' size={30} />
                                        Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/manageItems'}>
                                        <TiThList className='mr-2' size={30} />
                                        Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/bookings'}>
                                        <FaBook className='mr-2' size={30} />
                                        Manage Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/users'}>
                                        <FaUsers className='mr-2' size={30} />
                                        All Users</NavLink>
                                </li>


                            </>
                            :
                            <>

                                <li>
                                    <NavLink to={'/dashboard/userHome'}>
                                        <TiHome className='mr-2' size={30} />
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/reservation'}>
                                        <TiCalendar className='mr-2' size={30} />
                                        Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/paymentHistory'}>
                                        <MdWorkHistory className='mr-2' size={30} />
                                        Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/cart'}>
                                        <TiShoppingCart className='mr-2' size={30} />
                                        My Cart</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/review'}>
                                        <TiUserAdd className='mr-2' size={30} />
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/bookings'}>
                                        <TiThList className='mr-2' size={30} />
                                        My Bookings</NavLink>
                                </li>
                            </>
                    }



                    <div className='divider'></div>


                    {/* shared a NavLink */}
                    <li>
                        <NavLink to={'/'}>
                            <TiHome className='mr-2' size={30} />
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/menu'}>
                            <TiThMenu className='mr-2' size={30} />
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order/salad'}>
                            <FaShopify className='mr-2' size={30} />
                            Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}>
                            <GrMail className='mr-2' size={30} />
                            Contact</NavLink>
                    </li>

                </ul>
                <div className='mt-72'>
                    <button className='flex items-center text-xl gap-2 ml-5 mb-3'><IoSettings size={25}/>Settings</button>
                    <button onClick={handleLogOut} className='flex items-center text-xl gap-2 ml-5 mb-2'><HiOutlineLogout size={25}/>LogOut</button>
                </div>
            </div>

            {/* dashboard content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;