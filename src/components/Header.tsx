import { Leaf } from 'lucide-react';
import React from 'react';

interface HeaderProps {
  onMenuClick: () => void;
  totalEarnings: number;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, totalEarnings }) => {
  return (
    <header className="bg-green-500 text-white px-5 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Leaf className="h-8 w-8 text-green-500" />
       
      </div>
      <nav className="flex justify-between items-center">
        <span className='text-black'>EduScan AI</span>
        <button
          className="bg-yellow-900 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300"
          onClick={onMenuClick}
        >
          Menu
        </button>
        <div className="ml-4">
          <span className="text-lg font-semibold">Total Earnings: {totalEarnings}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

