import React, { useState } from "react";
import { FaArrowDown, FaArrowUp, FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

const metrics = [
    { label: "Active drivers", value: 19, percentage: "+2.8%", isPositive: true },
    { label: "Inactive drivers", value: 17, percentage: "-12.8%", isPositive: false },
    { label: "Total points", value: "19,831.5", percentage: "+24.2%", isPositive: true },
    { label: "Total races", value: 195, percentage: "-10.0%", isPositive: false },
];

const driversData = [
    { name: "di Resta, Paul", team: "Williams Mercedes", points: 0, wins: 1, status: "Inactive", code: "DIR", image: "/drivers/dir.png" },
    { name: "Sirotkin, Sergey", team: "Williams Mercedes", points: 1, wins: 0, status: "Active", code: "SIR", image: "/drivers/sir.png" },
    { name: "Lotterer, Andre", team: "Caterham Renault", points: 0, wins: 0, status: "Active", code: "LOT", image: "/drivers/lot.png" },
    { name: "Bianchi, Jules", team: "Marussia Ferrari", points: 2, wins: 0, status: "Inactive", code: "BIA", image: "/drivers/bia.png" },
    { name: "Chilton, Max", team: "Marussia Ferrari", points: 0, wins: 0, status: "Inactive", code: "CHI", image: "/drivers/chi.png" },
    { name: "Kobayashi, Kamui", team: "Caterham Renault", points: 0, wins: 0, status: "Inactive", code: "KOB", image: "/drivers/kob.png" },
    { name: "Sutil, Adrian", team: "Sauber Ferrari", points: 0, wins: 0, status: "-", code: "SUT", image: "/drivers/sut.png" },
    { name: "Vergne, Jean-Eric", team: "STR Renault", points: 22, wins: 0, status: "Inactive", code: "VER", image: "/drivers/ver.png" },
];

const getStatusBadge = (status) => (
    <span className={`px-3 py-1 text-xs font-semibold rounded-md 
        ${status === "Active" ? "bg-[#0080004b] text-green-400" : "bg-[#e1353554] text-red-400"}`}>
        {status.toUpperCase()}
    </span>
);


const getCodeTag = (code) => (
    <span className="px-2 py-1 text-xs font-semibold rounded-md bg-[#3A3A3A] text-white">
        {code}
    </span>
);

const Dashboard = () => {
    const [selectedDrivers, setSelectedDrivers] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (code) => {
        setSelectedDrivers((prev) =>
            prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
        );
    };

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedDrivers([]);
        } else {
            setSelectedDrivers(driversData.map((driver) => driver.code));
        }
        setSelectAll(!selectAll);
    };

    return (
        <div className="p-6 bg-[#161b22] min-h-screen text-gray-200">

            <div className="grid grid-cols-4 gap-3 mb-4">
                {metrics.map((metric, index) => (
                    <div key={index} className="bg-[#121212] px-5 py-4 rounded-lg border border-[#252525] text-gray-300">
                        <h3 className="text-xs uppercase text-gray-400">{metric.label}</h3>
                        <div className="flex items-center justify-between mt-1">
                            <span className="text-xl font-semibold">{metric.value}</span>
                            <span className={`flex items-center text-xs font-medium ${metric.isPositive ? "text-green-500" : "text-red-500"}`}>
                                {metric.isPositive ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                                {metric.percentage}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mb-6 flex justify-between items-center bg-[#121212] p-3 rounded-lg border border-[#252525]">
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
            <div className="bg-[#121212] p-4 rounded-lg border border-[#252525] overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-[#252525] text-gray-400">
                            <th className="py-3 px-4 text-xs font-medium text-gray-500">
                                <input
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                    className="appearance-none w-4 h-4 border border-gray-500 rounded bg-gray-800 checked:bg-blue-500 checked:border-transparent"
                                />
                            </th>
                            <th className="py-3 px-4 text-xs font-bold text-gray-300">Driver</th>
                            <th className="py-3 px-4 text-xs font-bold text-gray-300">Constructor</th>
                            <th className="py-3 px-4 text-xs font-bold text-gray-300">Total Points</th>
                            <th className="py-3 px-4 text-xs font-bold text-gray-300">Total Wins</th>
                            <th className="py-3 px-4 text-xs font-bold text-gray-300">Status</th>
                            <th className="py-3 px-4 text-xs font-bold text-gray-300">Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {driversData.map((driver, index) => (
                            <tr key={index} className="border-b border-[#252525] text-gray-300 hover:bg-[#1b1f24] transition">
                                <td className="py-3 px-4">
                                    <input
                                        type="checkbox"
                                        checked={selectedDrivers.includes(driver.code)}
                                        onChange={() => handleCheckboxChange(driver.code)}
                                        className="appearance-none w-4 h-4 border border-gray-500 rounded bg-gray-800 checked:bg-blue-500 checked:border-transparent"
                                    />
                                </td>

                                <td className="py-3 px-4 flex items-center gap-3">
                                    <img src={driver.image} alt={driver.name} className="w-8 h-8 rounded-full border border-gray-600" />
                                    {driver.name}
                                </td>

                                <td className="py-3 px-4">{driver.team}</td>
                                <td className="py-3 px-4">{driver.points}</td>
                                <td className="py-3 px-4">{driver.wins}</td>
                                <td className="py-3 px-4">{getStatusBadge(driver.status)}</td>
                                <td className="py-3 px-4">{getCodeTag(driver.code)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Dashboard;
