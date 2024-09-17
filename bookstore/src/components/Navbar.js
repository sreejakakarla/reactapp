import react from 'react';
import {FaBook, FaHeart, FaSearch, FaUser} from "react-icons/fa";
import {FaCartShopping} from "react-icons/fa6";

const NavBar = () => {
    return (
        <div>
            <header className='header'>
                <div className='header_one'>
                    <a href='\#' className='logo'><FaBook/>BookStore</a>
                    <form className='search-form'>
                        <input type='search' id='search-box' placeholder='Search Books'/>
                        <label htmlFor=" "><FaSearch /></label>
                    </form>
                    <div className='icons'>
                        <a href='/#'><FaHeart/></a>
                        <a href='/#'><FaCartShopping/></a>
                        <div id='login-button' className='user-button'><FaUser/></div>
                    </div>
                </div>

                <div className='header_two'>
                    <div className='banner'>
                        <a href="\#">About Us</a>
                        <a href="\#">All Categories</a>
                        <a href="\#">Free Books</a>
                        <a href="\#">Books Catalogue</a>
                        <a href="\#">FAQ's</a>
                        <a href="\#">Blog</a>
                        <a href="\#">Contact</a>
                        <a href="\#">Terms and Conditions</a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default NavBar;