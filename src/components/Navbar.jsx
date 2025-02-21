import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    FaSearch,
    FaChevronDown,
    FaChevronRight,
    FaUser,
    FaUsers
} from 'react-icons/fa';
import { LuUsers, LuCircle, LuCalendarCheck, LuStar } from "react-icons/lu";
import { HiOutlineQrcode } from "react-icons/hi";

const Navbar = () => {
    const [isUsersOpen, setIsUsersOpen] = useState(false);
    const [isCeleryOpen, setIsCeleryOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="bg-[#2D3A4A] text-gray-200 w-64 min-h-screen p-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <HiOutlineQrcode className="text-[#A855F7] text-2xl" /> 
                    <div>
                        <h1 className="text-sm font-semibold">Django administration</h1>
                        <p className="text-xs text-gray-400">Unfold demo project</p>
                    </div>
                </div>
                <FaChevronDown className="text-gray-400" />
            </div>

            <div className="mb-4 relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search apps and models..."
                    className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-700 text-gray-300 
                   placeholder-gray-400 border border-gray-600 shadow-sm 
                   focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
            </div>

            <h2 className="text-gray-300 text-xs uppercase font-semibold tracking-widest mb-3 px-2">
                Navigation
            </h2>
            <nav>
                <ul className="space-y-2">
                    {[
                        { path: "/dashboard", icon: HiOutlineQrcode, label: "Dashboard" },
                        { path: "/drivers", icon: LuUsers, label: "Drivers" },
                        { path: "/", icon: LuCircle, label: "Circuits" },
                        { path: "/", icon: LuStar, label: "Standings" },
                    ].map(({ path, icon: Icon, label }) => (
                        <li key={path}>
                            <Link
                                to={path}
                                className={`flex items-center px-2 py-2 rounded transition-colors duration-200 ${location.pathname === path
                                    ? "bg-gray-800 text-blue-400"
                                    : "hover:bg-gray-700 text-gray-300"
                                    }`}
                            >
                                <Icon
                                    className={`mr-2 text-lg ${location.pathname === path ? "text-blue-400" : "text-gray-400"
                                        }`}
                                />
                                <span>{label}</span>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            to="#"
                            className="flex items-center px-2 py-2 rounded hover:bg-gray-700 transition-colors duration-200"
                        >
                            <LuCalendarCheck className="mr-2 text-gray-400 text-lg" />
                            <span>Races</span>
                            <span className="ml-auto bg-red-500 text-white text-xs px-2.5 py-0.5 rounded-full font-bold">
                                +48
                            </span>
                        </Link>
                    </li>

                    {/* Users & Groups Dropdown */}
                    <li>
                        <div
                            className="flex justify-between items-center px-2 py-2 rounded cursor-pointer hover:bg-gray-700"
                            onClick={() => setIsUsersOpen(!isUsersOpen)}
                        >
                            <span>Users & Groups</span>
                            {isUsersOpen ? <FaChevronDown /> : <FaChevronRight />}
                        </div>
                        {isUsersOpen && (
                           <ul className="pl-4 mt-2 space-y-1">
                               <li>
                                   <Link to="/users/user" className="flex items-center gap-2 hover:bg-gray-600 px-2 py-1 rounded">
                                       <FaUser className="text-gray-300" /> {/* Purple user icon */}
                                       Users
                                   </Link>
                               </li>
                               <li>
                                   <Link to="#" className="flex items-center gap-2 hover:bg-gray-600 px-2 py-1 rounded">
                                       <FaUsers className="text-gray-300" /> {/* White groups icon */}
                                       Groups
                                   </Link>
                               </li>
                           </ul>
                           
                        )}
                    </li>

                    {/* Celery Tasks Dropdown */}
                    <li>
                        <div
                            className="flex justify-between items-center px-2 py-2 rounded cursor-pointer hover:bg-gray-700"
                            onClick={() => setIsCeleryOpen(!isCeleryOpen)}
                        >
                            <span>Celery Tasks</span>
                            {isCeleryOpen ? <FaChevronDown /> : <FaChevronRight />}
                        </div>
                        {isCeleryOpen && (
                            <ul className="pl-4 mt-2 space-y-1">
                                <li>
                                    <Link to="#" className="block hover:bg-gray-600 px-2 py-1 rounded">
                                        Query Tools
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
