"use client"
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-primary text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold">Blogify</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/blogs" className="hover:text-gray-300">
            Blogs
          </a>
          <a href="/addblog" className="hover:text-gray-300">
            Create a Blog
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} mt-4 space-y-4`}
      >
        <a href="/" className="block py-2 px-4 text-center hover:bg-gray-700">
          Home
        </a>
        <a href="/about" className="block py-2 px-4 text-center hover:bg-gray-700">
          About
        </a>
        <a href="/blogs" className="block py-2 px-4 text-center hover:bg-gray-700">
          Blogs
        </a>
        <a href="/addblog" className="block py-2 px-4 text-center hover:bg-gray-700">
          Create a Blog
        </a>
      </div>
    </nav>
  );
}
