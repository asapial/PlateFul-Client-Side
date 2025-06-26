import React from 'react';
import { FaBoxOpen, FaUserAlt, FaChartPie, FaStar } from 'react-icons/fa';

// Example chart using recharts (install with: npm install recharts)
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const DashBoardOverview = () => {
  // Example stats, replace with real data as needed
  const totalItems = 120;
  const myItems = 18;
  const featuredItems = 7;

  // Example chart data
  const chartData = [
    { name: 'Total', value: totalItems },
    { name: 'Mine', value: myItems },
    { name: 'Featured', value: featuredItems },
  ];
  const COLORS = ['#6366f1', '#f472b6', '#facc15'];

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        Dashboard Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Total Products/Items Card */}
        <div className="card bg-base-100 shadow-xl border border-primary">
          <div className="card-body flex flex-row items-center gap-6">
            <div className="bg-primary text-primary-content rounded-full p-4 text-3xl">
              <FaBoxOpen />
            </div>
            <div>
              <h3 className="card-title text-lg text-base-content/80">Total Products/Items</h3>
              <p className="text-4xl font-extrabold text-primary">{totalItems}</p>
            </div>
          </div>
        </div>
        {/* My Items Card */}
        <div className="card bg-base-100 shadow-xl border border-secondary">
          <div className="card-body flex flex-row items-center gap-6">
            <div className="bg-secondary text-secondary-content rounded-full p-4 text-3xl">
              <FaUserAlt />
            </div>
            <div>
              <h3 className="card-title text-lg text-base-content/80">My Items</h3>
              <p className="text-4xl font-extrabold text-secondary">{myItems}</p>
            </div>
          </div>
        </div>
        {/* Featured Items Card */}
        <div className="card bg-base-100 shadow-xl border border-accent">
          <div className="card-body flex flex-row items-center gap-6">
            <div className="bg-accent text-accent-content rounded-full p-4 text-3xl">
              <FaStar />
            </div>
            <div>
              <h3 className="card-title text-lg text-base-content/80">Featured Items</h3>
              <p className="text-4xl font-extrabold text-accent">{featuredItems}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Chart Section */}
      <div className="card bg-base-100 shadow-xl border border-info p-6">
        <h3 className="text-xl font-semibold text-info mb-4 flex items-center gap-2">
          <FaChartPie /> Items Distribution
        </h3>
        <div className="w-full h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashBoardOverview;