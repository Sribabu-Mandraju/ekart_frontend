// EkartHeader.jsx
import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { FaBars, FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaUser, FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full z-[20] sticky top-0 left-0 ">
      {/* Top Bar */}
      <div className="hidden sm:flex justify-between items-center w-full h-16 p-4 bg-gray-800 text-white">
        <div className="flex gap-6">
          <div className="flex items-center gap-1"><FaPhone /> (225)555-0118</div>
          <div className="flex items-center gap-1"><FaEnvelope /> michelle.rivera@example.com</div>
        </div>
        <div>Follow Us and get a chance to win 80% off</div>
        <div className="flex items-center gap-4">
          <span>Follow Us:</span>
          <FaInstagram className="hover:text-gray-300" />
          <FaYoutube className="hover:text-gray-300" />
          <FaFacebook className="hover:text-gray-300" />
          <FaTwitter className="hover:text-gray-300" />
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center h-16 bg-gray-100 p-4">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          {/* Menu Bar Button */}
          <button
            className="text-2xl text-black px-2 sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>

          {/* Brand */}
          <h1 className="text-xl font-bold">BrandName</h1>

          {/* Nav Links */}
          <nav className="hidden sm:flex gap-4">
            <a href="#" className="p-2 hover:bg-gray-300">Home</a>

            {/* Shop Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="p-2 hover:bg-gray-300">Shop</Menu.Button>
              <Menu.Items className="absolute mt-2 bg-white border border-gray-200 shadow-lg rounded-md focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-gray-700 ${active && 'bg-gray-100'}`}
                    >
                      Fashion
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-gray-700 ${active && 'bg-gray-100'}`}
                    >
                      Grocery
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>

            <a href="#" className="p-2 hover:bg-gray-300">About</a>
            <a href="#" className="p-2 hover:bg-gray-300">Blog</a>
            <a href="#" className="p-2 hover:bg-gray-300">Contact</a>
            <a href="#" className="p-2 hover:bg-gray-300">Pages</a>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 text-blue-400 font-bold">
          <a href="#" className="hidden sm:flex items-center gap-1"><FaUser /> Login / Register</a>
          <FaSearch />
          <a href="#" className="flex items-center gap-1"><FaShoppingCart /> 1</a>
          <a href="#" className="flex items-center gap-1"><FaHeart /> 1</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 p-4 bg-gray-200 sm:hidden">
          <a href="#" className="p-2 hover:bg-gray-300">Home</a>
          <Menu as="div" className="relative">
            <Menu.Button className="p-2 hover:bg-gray-300 w-full text-left">Shop</Menu.Button>
            <Menu.Items className="absolute left-0 mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-md">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 text-gray-700 ${active && 'bg-gray-100'}`}
                  >
                    Fashion
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 text-gray-700 ${active && 'bg-gray-100'}`}
                  >
                    Grocery
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <a href="#" className="p-2 hover:bg-gray-300">About</a>
          <a href="#" className="p-2 hover:bg-gray-300">Blog</a>
          <a href="#" className="p-2 hover:bg-gray-300">Contact</a>
          <a href="#" className="p-2 hover:bg-gray-300">Pages</a>
        </nav>
      )}
    </header>
  );
}


export default Header;