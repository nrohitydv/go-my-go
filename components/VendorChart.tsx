"use client";
import { HiOutlineDotsVertical } from "react-icons/hi";
import React, { PureComponent } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";

const data = [
  { name: "81-100", value: 250 },
  { name: "61-80", value: 200 },
  { name: "41-60", value: 150 },
  { name: "21-40", value: 100 },
  { name: "0-20", value: 50 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

export default class Example extends PureComponent {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative", // Added relative positioning
        }}
      >
        <div style={{ marginBottom: 10 }}>
          <h2 className="text-xl font-bold mb-4">Vendor Breakdown</h2>
          <div style={{ position: "absolute", top: 0, right: 0 }}>
            <HiOutlineDotsVertical size={24} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 1 }}>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                <HiOutlineDotsVertical />

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
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            {data.map((entry, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: COLORS[index % COLORS.length],
                    marginRight: 8,
                  }}
                ></div>
                <span>{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
