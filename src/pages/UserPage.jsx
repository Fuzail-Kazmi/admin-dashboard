import React from "react";
import { BiPlus } from "react-icons/bi";
import { FaSearch, FaUsers, FaCog, FaBell, FaUser, FaEye, FaFilter } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

const UserPage = () => {
  const users = [
    {
      username: "AnonymousUser",
      active: true,
      staff: false,
      superuser: false,
      created: "Oct. 13, 2023, 6:31 p.m.",
    },
    {
      username: "demo",
      active: true,
      staff: true,
      superuser: true,
      created: "Sept. 2, 2023, 6:08 p.m.",
    },
  ];

  return (
    <div className="p-6 bg-[#121212] min-h-screen text-white">
      <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-3">
        <div className="flex items-center space-x-3 text-gray-300">
          <FaUsers className="text-lg" />
          <span className="text-gray-500">|</span>
          <h1 className="text-xl font-semibold">User Management</h1>
        </div>

        <div className="flex items-center space-x-4">
          <span className="bg-[#700ce362] text-violet-500 text-sm px-3 py-1 rounded-lg font-medium">
            PRODUCTION
          </span>

          <div className="flex items-center space-x-3 text-gray-400">
            <FaCog className="hover:text-white cursor-pointer" />
            <FaBell className="hover:text-white cursor-pointer" />
            <FaUser className="hover:text-white cursor-pointer" />
            <FaEye className="hover:text-white cursor-pointer" />
          </div>

          <span className="text-gray-600">|</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-violet-600 hover:bg-violet-700 text-white text-lg">
            <BiPlus />
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-400 mb-4">
        <span>Home</span> / <span>Formula</span> / <span className="font-semibold">User</span>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <div className="relative w-full max-w-md">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Type to search"
            className="w-full pl-10 pr-3 py-2 rounded bg-[#1E1E1E] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="ml-3 px-5 py-2 bg-[#252525] text-gray-300 rounded-lg text-sm border border-[#30363d] flex items-center gap-1.5 font-medium">
          Filters <IoFilter />
        </button>
      </div>

      <div className="bg-[#1E1E1E] shadow rounded-lg overflow-hidden border border-gray-700">
        <table className="min-w-full">
          <thead className="bg-[#232323] text-gray-400">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium">
                <input
                  type="checkbox"
                  className="appearance-none w-4 h-4 border border-gray-500 rounded bg-gray-800 checked:bg-blue-500 checked:border-transparent"
                />
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">User</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Active</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Staff</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Superuser</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-[#2A2A2A]">
                <td className="px-4 py-3 text-sm">
                  <input
                    type="checkbox"
                    className="appearance-none w-4 h-4 border border-gray-500 rounded bg-gray-800 checked:bg-blue-500 checked:border-transparent"
                  />
                </td>
                <td className="px-4 py-3 text-sm">{user.username}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${user.active ? "bg-green-500" : "bg-red-500"}`}></span>
                    {user.active ? "True" : "False"}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${user.staff ? "bg-green-500" : "bg-red-500"}`}></span>
                    {user.staff ? "True" : "False"}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${user.superuser ? "bg-green-500" : "bg-red-500"}`}></span>
                    {user.superuser ? "True" : "False"}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">{user.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-sm text-gray-400 border-t border-gray-700 pt-4">
        {users.length} user{users.length !== 1 && "s"}
      </div>
    </div>
  );
};

export default UserPage;