"use client";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: "Feb",
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: "Mar",
    uv: 20,
    pv: 98,
    amt: 22,
  },
  {
    name: "Apr",
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: "May",
    uv: 18,
    pv: 48,
    amt: 21,
  },
  {
    name: "Jun",
    uv: 23,
    pv: 38,
    amt: 25,
  },
  {
    name: "Jul",
    uv: 34,
    pv: 43,
    amt: 21,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} tickCount={11} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            yAxisId={0}
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" yAxisId={0} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
