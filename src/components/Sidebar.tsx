'use client'
import React, { useState } from 'react';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div
            className={`h-screen bg-gray-800 text-white transition-all duration-300 ${
                isOpen ? 'w-64' : 'w-16'
            }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 focus:outline-none text-white"
            >
                {isOpen ? '<' : '>'}
            </button>
            {isOpen && (
                <nav className="mt-5">
                    <ul>
                        <li className="p-2 hover:bg-gray-700">Dashboard</li>
                        <li className="p-2 hover:bg-gray-700">Settings</li>
                        <li className="p-2 hover:bg-gray-700">Profile</li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Sidebar;
  