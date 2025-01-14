import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import useCart from '../../../../hooks/useCart';
import { MdSpaceDashboard } from 'react-icons/md';
import useAuth from '../../../../hooks/useAuth';
import useAdmin from '../../../../hooks/useAdmin';

const Navbar = () => {
    const [isAdmin] = useAdmin();
    const { user, logOut } = useAuth();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(err => console.log(err))
    }
    const navOptions = <>
        <li className=''><NavLink className={({ isActive }) =>
            `py-3 text-lg ${isActive ? 'hover:font-bold bg-none font-bold text-[#EEFF25]' : 'hover:underline bg-none hover:text-[#EEFF25] hover:font-bold'}`} to={'/'}>Home</NavLink></li>
        <li className=''><NavLink className={({ isActive }) =>
            `py-3 text-lg ${isActive ? 'hover:font-bold bg-none font-bold text-[#EEFF25]' : 'hover:underline bg-none hover:text-[#EEFF25] hover:font-bold'}`} to={'/'}>CONTACT US</NavLink></li>
        <li className=''><NavLink className={({ isActive }) =>
            `py-3 text-lg ${isActive ? 'hover:font-bold bg-none font-bold text-[#EEFF25]' : 'hover:underline bg-none hover:text-[#EEFF25] hover:font-bold'}`} to={'/menu'}>Our Menu</NavLink></li>
        <li className=''><NavLink className={({ isActive }) =>
            `py-3 text-lg ${isActive ? 'hover:font-bold bg-none font-bold text-[#EEFF25]' : 'hover:underline bg-none hover:text-[#EEFF25] hover:font-bold'}`} to={'/order/salad'}>Our Shop</NavLink></li>
        <li className=''><NavLink className={({ isActive }) =>
            `py-3 text-lg ${isActive ? 'hover:font-bold bg-none font-bold text-[#EEFF25]' : 'hover:underline bg-none hover:text-[#EEFF25] hover:font-bold'}`} to={'/'}>Blog</NavLink></li>
        <li className=''><NavLink className={({ isActive }) =>
            `py-3 text-lg ${isActive ? 'hover:font-bold bg-none font-bold text-[#EEFF25]' : 'hover:underline bg-none hover:text-[#EEFF25] hover:font-bold'}`} to={'/contact'}>Contact</NavLink></li>

        <li className=''><NavLink className={({ isActive }) =>
            `py-3 text-lg ${isActive ? 'hover:font-bold bg-none font-bold text-[#EEFF25]' : 'hover:underline bg-none hover:text-[#EEFF25] hover:font-bold'}`} to={'/dashboard/cart'}><button className=" bg-green-500 p-2 pt-3 rounded-full">
                <TiShoppingCart className='mr-2 relative' size={30} />
                <div className="badge badge-secondary absolute top-0">+{cart.length}</div>
            </button></NavLink></li>

    </>

    return (
        <>
            <div className="navbar bg-black fixed z-[10] bg-opacity-40 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black bg-opacity-40 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <h3 className="text-2xl font-bold">Bistro Boss <br />Restaurant</h3>
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 items-center">
                            {navOptions}
                        </ul>
                    </div>

                    {
                        user ? <>
                            {
                                user && isAdmin && <div className=''><Link to={'/dashboard/adminHome'}>
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img referrerPolicy='no-referrer' src={user.photoURL} />
                                        </div>
                                    </div>
                                </Link></div>
                            }
                            {
                                user && !isAdmin && <div className=''><Link to={'/dashboard/userHome'}>
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img referrerPolicy='no-referrer' src={user.photoURL} />
                                        </div>
                                    </div>
                                </Link></div>
                            }

                        </> : <>
                            <Link to={'/login'}><button className="btn">Login</button></Link>
                        </>
                    }

                </div>
            </div >
        </>
    );
};

export default Navbar;