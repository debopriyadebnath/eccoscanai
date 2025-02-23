import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="navbar-brand flex items-center">
          <Link href="/">
            <a>
              <Image
                src="https://r.mobirisesite.com/1229512/assets/images/photo-1539448295811-52fc1a563c68.jpeg"
                alt="EcoScan Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </a>
          </Link>
          <Link href="/">
            <a className="text-xl font-bold text-black ml-4">EcoScan</a>
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
            <a className="text-black hover:text-green-600">Home</a>
          </Link>
          <Link href="/features">
            <a className="text-black hover:text-green-600">Features</a>
          </Link>
          <Link href="/how-it-works">
            <a className="text-black hover:text-green-600">How It Works</a>
          </Link>
          <Link href="/contact">
            <a className="btn bg-green-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition">Join Us</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
