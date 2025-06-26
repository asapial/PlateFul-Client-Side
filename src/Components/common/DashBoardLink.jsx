import React from 'react';
import { FaUserCircle, FaPlusCircle, FaBookOpen, FaSignOutAlt } from 'react-icons/fa';

const DashBoardLink = () => {
    return (
        <div className="w-full max-w-xs mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 min-h-screen">
            <div className="flex flex-col items-center gap-6">
                {/* Dashboard Title */}
                <div className="w-full flex items-center justify-center mb-2">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                        <FaUserCircle className="text-blue-500" />
                        Dashboard
                    </h1>
                </div>
                {/* Navigation Links */}
                <nav className="w-full">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 cursor-pointer transition">
                            <FaUserCircle className="text-xl" />
                            My Profile
                        </li>
                        <li className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-200 hover:text-green-600 cursor-pointer transition">
                            <FaPlusCircle className="text-xl" />
                            Add Recipe
                        </li>
                        <li className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-200 hover:text-purple-600 cursor-pointer transition">
                            <FaBookOpen className="text-xl" />
                            My Recipe
                        </li>
                    </ul>
                </nav>
                {/* Logout */}
                <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition w-full justify-center">
                    <FaSignOutAlt className="text-lg" />
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default DashBoardLink;