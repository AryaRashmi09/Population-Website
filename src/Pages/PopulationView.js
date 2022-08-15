import react from 'react';
import React, { useState, useEffect } from "react";
import {
LineChart,
Line,
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
ResponsiveContainer,
} from "recharts";

export default function App(props) {
			const chartData = props.populationRowData.map(rowData => ({
			name: rowData.reliabilty,
			l1: rowData.year,
			l2: rowData.value,
			}))

    return (
	<div style={{ width: "1100px",height: "600px",backgroundColor: "black" }}>
	<ResponsiveContainer width="100%"
						height="100%">
		<LineChart
		width={500}
		height={300}
		data={chartData}
		margin={{
			top: 5,
			right: 30,
			left: 20,
			bottom: 5,
		}}
		>
		<CartesianGrid strokeDasharray="3 3" />
		<XAxis dataKey="name" />
		<YAxis />
		<Tooltip />
		<Legend />
		<Line
			type="monotone"
			dataKey="l2"
			stroke="#8884d8"
			activeDot={{ r: 8 }}
		/>
		<Line type="monotone"
				dataKey="l1"
				stroke="#82ca9d" />
		</LineChart>
	</ResponsiveContainer>
	<div><br></br></div>
	<ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="l1" fill="#8884d8" />
          <Bar dataKey="l2" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
	</div>
	
);
}
