import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">LOGO</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200">Home</Link>
            </li>
            <li>
              <Link to="/destination" className="hover:text-blue-200">Destination</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-200">Services</Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-blue-200">Blogs</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-200">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

