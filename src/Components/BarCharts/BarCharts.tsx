import React from 'react';
import{  Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart } from 'recharts';

const BarCharts = () => {
    const data = [
        {
          name: 'Living Room',
          pv: 240,
          amt: 240,
        },
        {
          name: 'Bed Room',
          pv: 139,
          amt: 221,
        },
        {
          name: 'Chair',
          pv: 980,
          amt: 229,
        },
        {
          name: 'Dining Room',
          pv: 390,
          amt: 200,
        },
        {
          name: 'Mattress',
          pv: 480,
          amt: 218,
        },
        {
          name: 'Study',
          pv: 380,
          amt: 250,
        },
        {
          name: 'Office',
          pv: 430,
          amt: 200,
        },
        {
          name: 'Light',
          pv: 400,
          amt: 210,
        },
      ];
    return (


      <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#1f2937" />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
  </ResponsiveContainer>


    );
};

export default BarCharts;