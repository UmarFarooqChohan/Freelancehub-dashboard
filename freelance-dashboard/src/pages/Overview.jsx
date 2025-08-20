import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaFolder, FaDollarSign, FaTasks } from "react-icons/fa";

const data = [
  { month: "Jan", earnings: 1200 },
  { month: "Feb", earnings: 2100 },
  { month: "Mar", earnings: 1800 },
  { month: "Apr", earnings: 2500 },
  { month: "May", earnings: 3100 },
  { month: "Jun", earnings: 2800 },
];

function Overview() {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow hover:shadow-lg transition group">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl text-blue-600 dark:text-blue-300">
              <FaFolder className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-gray-500 dark:text-gray-400 text-sm">
                Total Projects
              </h3>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                24
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow hover:shadow-lg transition group">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl text-green-600 dark:text-green-300">
              <FaDollarSign className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-gray-500 dark:text-gray-400 text-sm">
                Earnings
              </h3>
              <p className="text-2xl font-bold text-green-600">$15,300</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow hover:shadow-lg transition group">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-100 dark:bg-red-900 rounded-xl text-red-600 dark:text-red-300">
              <FaTasks className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-gray-500 dark:text-gray-400 text-sm">
                Tasks Due
              </h3>
              <p className="text-2xl font-bold text-red-500">8</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart + Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Monthly Earnings
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#888" opacity={0.2} />
              <XAxis dataKey="month" stroke="currentColor" />
              <YAxis stroke="currentColor" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  borderRadius: "8px",
                  border: "none",
                  color: "#fff",
                }}
              />
              <Bar dataKey="earnings" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Recent Activity
          </h3>
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li className="p-3 rounded-lg bg-gray-50 dark:bg-zinc-800 hover:bg-blue-50 dark:hover:bg-zinc-700 transition">
              ✅ Completed <span className="font-medium">Landing Page</span>
            </li>
            <li className="p-3 rounded-lg bg-gray-50 dark:bg-zinc-800 hover:bg-yellow-50 dark:hover:bg-zinc-700 transition">
              🕒 Deadline soon for{" "}
              <span className="font-medium">E-commerce App</span>
            </li>
            <li className="p-3 rounded-lg bg-gray-50 dark:bg-zinc-800 hover:bg-green-50 dark:hover:bg-zinc-700 transition">
              💰 Payment received for{" "}
              <span className="font-medium">Portfolio Website</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Overview;
