import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 bg-white shadow z-50 rounded-3xl w-[70%] left-1/2 transform -translate-x-1/2 px-5">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="navbar-brand flex items-center">
          <Link href="/">
            <button>
              <Image
                src={'/logoimg.png'}
                alt="EcoScan Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </button>
          </Link>
          <Link href="/">
            <button className="text-xl font-bold text-black ml-4">EcoScan</button>
          </Link>
        </div>
        <button className="block lg:hidden">
          <div className="hamburger space-y-2">
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
          </div>
        </button>
        <div className="hidden lg:flex space-x-8">
          <Link href="/home">
            <button className="text-black hover:text-green-600">Home</button>
          </Link>
          <Link href="/features">
            <button className="text-black hover:text-green-600">Features</button>
          </Link>
          <Link href="/how-it-works">
            <button className="text-black hover:text-green-600">How It Works</button>
          </Link>
          <Link href="/contact">
            <button className="btn bg-green-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition">Join Us</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
