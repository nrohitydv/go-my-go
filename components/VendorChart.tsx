"use client";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "0-20", value: 20 },
  { name: "21-40", value: 30 },
  { name: "41-60", value: 25 },
  { name: "61-80", value: 15 },
  { name: "81-100", value: 10 },
];

const COLORS = ["#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0"];

const VendorBreakdownChart: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-bold mb-4">Vendor breakdown</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" verticalAlign="middle" align="right" />
      </PieChart>
      <button className="mt-4 px-4 py-2 border border-slate-200 rounded hover:bg-purple-700">
        View full report
      </button>
    </div>
  );
};

export default VendorBreakdownChart;
