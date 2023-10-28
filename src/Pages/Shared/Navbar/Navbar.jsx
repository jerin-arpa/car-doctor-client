import logo from '../../../assets/icons/logo.svg';
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {

    const navLink = <>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-[#FF3811] underline" : ""
            }> Home</NavLink>
        </li>
        <li>
            <NavLink to="/addService" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-[#FF3811] underline" : ""
            }>AddService</NavLink>
        </li>
        <li>
            <NavLink to="/blog" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-[#FF3811] underline" : ""
            }>Blog</NavLink>
        </li>
        <li>
            <NavLink to="/about" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-[#FF3811] underline" : ""
            }>About</NavLink>
        </li>
        <li>
            <NavLink to="/chooseUs" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-[#FF3811] underline" : ""
            }>ChooseUs</NavLink>
        </li>
        <li>
            <NavLink to="/login" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-[#FF3811] underline" : ""
            }>Login</NavLink>
        </li>
    </>

    return (
        <div>
            <div className="navbar container mx-auto px-3 mb-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="p-5 space-y-2 dropdown-content mt-3 z-[2] shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <div>
                        <img className='w-16' src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="px-1 flex gap-5">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <AiOutlineShoppingCart className='text-2xl mr-2'></AiOutlineShoppingCart>
                    </div>
                    <div>
                        <AiOutlineSearch className='text-2xl mr-2'></AiOutlineSearch>
                    </div>
                    <div>
                        <button className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] hover:rounded-3xl">Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;