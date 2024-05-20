"use client";
import React from "react";
import { LineChart, Line, CartesianGrid, Tooltip, Legend } from "recharts";
import { XAxis, YAxis } from "recharts";
import { data } from "@/constants";

const AverageVendorRatingChart: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-bold mb-4">Average vendor rating</h2>
      <p className="text-sm text-gray-500 mb-6">
        Track how your rating compares to your industry average.
      </p>
      <LineChart width={600} height={350} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="yourRating"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="industryAverage" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default AverageVendorRatingChart;
