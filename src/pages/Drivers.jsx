import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Drivers = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 p-6">
      <div className="flex justify-between items-center border-b border-gray-700 mb-4 pb-2">
        <div className="flex space-x-6">
          <button className="text-sm font-medium text-blue-500 border-b-2 border-blue-500 px-2 pb-1">
            General
          </button>
          <button className="text-sm font-medium text-gray-400 hover:text-white px-2 pb-1">
            Standings
          </button>
        </div>

        <div className="flex space-x-2">
          <button className="bg-transparent border border-gray-500 px-4 py-2 rounded-md text-gray-300 text-sm">
            Action with form
          </button>
          <button className="bg-transparent border border-gray-500 px-4 py-2 rounded-md text-gray-300 text-sm flex items-center justify-between">
            More <span className="ml-1"><FaChevronDown size={10} /></span>
          </button>
          <button className="bg-transparent border border-gray-500 px-4 py-2 rounded-md text-gray-300 text-sm">
            Object permissions
          </button>
          <button className="bg-transparent border border-gray-500 px-4 py-2 rounded-md text-gray-300 text-sm">
            History
          </button>
        </div>
      </div>

      
      <div className="bg-[#121212] py-4 rounded-lg border-2 border-dotted border-gray-700 my-6">
        <div className="space-y-2">
          <div className="flex items-center px-5 text-gray-300">
            Change form before template
          </div>
        </div>
      </div>


      <div className="bg-[#121212] py-4 rounded-lg border border-gray-700">
        {/* Container for all fields */}
        <div className="divide-y divide-gray-700 space-y-2">

          {/* Row - First Name */}
          <div className="flex items-center pb-4 px-5">
            <label className="w-1/4 text-gray-300 text-sm font-semibold">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-3/4 bg-[#121212] border border-gray-700 rounded-md px-3 py-[10px] text-gray-300 focus:ring-1 focus:ring-blue-500 outline-none"
              value="Sergey"
            />
          </div>

          {/* Row - Last Name */}
          <div className="flex items-center pb-4 px-5">
            <label className="w-1/4 text-gray-300 text-sm font-medium">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-3/4 bg-[#121212] border border-gray-700 rounded-md px-3 py-[10px] text-gray-300 focus:ring-1 focus:ring-blue-500 outline-none"
              value="Sirotkin"
            />
          </div>

          {/* Row - Resume Upload */}
          <div className="flex items-center pb-4 px-5">
            <label className="w-1/4 text-gray-300 text-sm font-medium">
              Resume
            </label>
            <div className="relative w-3/4">
              <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              <div className="w-full bg-[#121212] border border-gray-700 rounded-md px-3 py-[10px] text-gray-400 flex justify-between items-center">
                Choose file to upload
                <span className="text-gray-500">&#8682;</span>
              </div>
            </div>
          </div>

          {/* Row - Picture Upload */}
          <div className="flex items-center pb-4 px-5">
            <label className="w-1/4 text-gray-300 text-sm font-medium">
              Picture
            </label>
            <div className="relative w-3/4">
              <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              <div className="w-full bg-[#121212] border border-gray-700 rounded-md px-3 py-[10px] text-gray-400 flex justify-between items-center">
                Choose file to upload
                <span className="text-gray-500">&#8682;</span>
              </div>
            </div>
          </div>

          {/* Row - Code */}
          <div className="flex items-center pb-4 px-5">
            <label className="w-1/4 text-gray-300 text-sm font-medium">
              Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-3/4 bg-[#121212] border border-gray-700 rounded-md px-3 py-[10px] text-gray-300 focus:ring-1 focus:ring-blue-500 outline-none"
              value="SIR"
            />
          </div>

          {/* Row - Color Picker */}
          <div className="flex items-center px-5 py-4">
            <label className="w-1/4 text-gray-300 text-sm font-medium">
              Color
            </label>
            <div className="relative w-[100px] h-[35px] border border-gray-700 rounded-md overflow-hidden">
              <input type="color" className="absolute inset-0 w-full h-full cursor-pointer" />
            </div>
          </div>

          {/* Row - Link */}
          <div className="flex items-center pt-4 px-5">
            <label className="w-1/4 text-gray-300 text-sm font-medium">
              Link
            </label>
            <input
              type="text"
              className="w-3/4 bg-[#121212] border border-gray-700 rounded-md px-3 py-[10px] text-gray-300 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 border-t border-gray-700 pt-4">
        {/* Left Buttons */}
        <div className="flex space-x-3">
          <button className="bg-transparent border border-gray-500 text-gray-300 px-4 py-[.65rem] rounded-md text-sm font-semibold">
            Close
          </button>
          <button className="bg-[#ff232351] text-red-400 px-4 py-2 rounded-md text-sm font-semibold">
            Delete driver
          </button>
        </div>

        {/* Right Buttons */}
        <div className="flex space-x-3">
          <button className="bg-transparent border border-gray-500 text-gray-300 px-4 py-2 rounded-md text-sm font-semibold">
            Save and add another
          </button>
          <button className="bg-transparent border border-gray-500 text-gray-300 px-4 py-2 rounded-md text-sm font-semibold">
            Save and continue editing
          </button>
          <button className="bg-[#4a008fab] text-violet-300 px-4 py-2 rounded-md text-sm font-semibold">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drivers
