"use client";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "0-20", value: 20 },
  { name: "21-40", value: 30 },
  { name: "41-60", value: 25 },
  { name: "61-80", value: 15 },
  { name: "81-100", value: 10 },
];

const COLORS = ["#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0"];

const VendorChart: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex flex-col items-center p-2 bg-white shadow rounded-lg ${
        isExpanded ? "fixed inset-0 z-50 p-8 bg-white" : ""
      }`}
    >
      <div className="flex justify-between w-full relative">
        <h2 className="text-lg font-bold mb-4">Vendor breakdown</h2>
        <div className="relative group">
          <BsThreeDotsVertical className="cursor-pointer" />
          <div className="absolute right-0 mt-2 p-2 w-24 bg-blue-500 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Edit
          </div>
        </div>
      </div>

      <div className={`flex ${isExpanded ? "flex-col md:flex-row" : ""}`}>
        <div className="flex-shrink-0">
          <PieChart
            width={isExpanded ? 500 : 250}
            height={isExpanded ? 500 : 250}
          >
            <Pie
              data={data}
              cx={isExpanded ? 250 : 150}
              cy={isExpanded ? 250 : 150}
              innerRadius={isExpanded ? 100 : 60}
              outerRadius={isExpanded ? 200 : 80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className="flex flex-col justify-center ml-2 mt-4 md:mt-0">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center mb-2">
              <div
                className="w-4 h-4 mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <span>{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        className="mt-4 px-4 py-2 border border-slate-200 rounded hover:bg-purple-700"
        onClick={handleButtonClick}
      >
        {isExpanded ? "Close full report" : "View full report"}
      </button>
    </div>
  );
};

export default VendorChart;
