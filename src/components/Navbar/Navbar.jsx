import React, { useState } from 'react';
import { FiUser, FiSearch, FiShoppingBag, FiMoreHorizontal } from 'react-icons/fi';
import { IoReorderThree } from "react-icons/io5";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 

  return (
    <nav className="text-black p-4 shadow-lg font-semibold">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
   
        <div className="text-3xl font-extrabold tracking-widest"><img src="https://i.postimg.cc/x88MtngK/logo-1x.png" alt="" /></div>

       
        <div className="hidden md:flex space-x-8">
          <a href="" className="hover:text-emerald-800  transition duration-300">Home</a>

       
          <div className="relative">
            <button
              className="hover:text-emerald-800  transition duration-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              About Us  
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10 transition-all duration-300 ease-out">
                <a href=" " className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800 transition duration-300">Testimonial</a>
                <a href=" " className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800 transition duration-300">FAQ</a>
                <a href=" " className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800 transition duration-300">Gallery</a>
              </div>
            )}
          </div>

         
          <div className="relative">
            <button
              className="hover:text-emerald-800  transition duration-300"
              onClick={() => setProductDropdown(!productDropdown)}
            >
              Products  
            </button>
            {productDropdown && (
              <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10 transition-all duration-300">
                <a href="" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800">Shop</a>
                <a href="" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800">Wishlist</a>
                <a href="" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800">Cart</a>
                <a href="" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800">Checkout</a>
                <a href="" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800">My Account</a>
              </div>
            )}
          </div>
          <a href=" " className="hover:text-emerald-800  transition duration-300">Contact</a>
        </div>

      
        <div className="flex space-x-6 items-center">
          <FiUser className="text-2xl hover:text-emerald-800 cursor-pointer transition duration-300" />
          <FiShoppingBag className="text-2xl hover:text-emerald-800 cursor-pointer relative transition duration-300">
            <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs rounded-full px-1">0</span>
          </FiShoppingBag>
          <FiSearch className="text-2xl hover:text-emerald-800 cursor-pointer transition duration-300" />
        </div>

      
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <IoReorderThree  className="text-3xl hover:text-emerald-800 transition duration-300" />
          </button>

          {mobileMenuOpen && (
            <div className="absolute right-4 top-14 w-48 bg-white shadow-lg rounded-lg py-2 z-10 transition-all duration-300">
              <a href="" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-600 transition duration-300">Home</a>
              <button
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800 transition duration-300"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                About Us  
              </button>
              {dropdownOpen && (
                <div className="pl-4">
                  <a href=" " className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800 transition duration-300">Testimonial</a>
                  <a href=" " className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800 transition duration-300">FAQ</a>
                  <a href=" " className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800 transition duration-300">Gallery</a>
                </div>
              )}
              <button
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-600 transition duration-300"
                onClick={() => setProductDropdown(!productDropdown)}
              >
                Products  
              </button>
              {productDropdown && (
                <div className="pl-4">
                  <a href="" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800">Shop</a>
                  <a href="" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800">Wishlist</a>
                  <a href="" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800">Cart</a>
                  <a href="" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800">Checkout</a>
                  <a href="" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800">My Account</a>
                </div>
              )}
              <a href=" " className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-800 transition duration-300">Contact</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
