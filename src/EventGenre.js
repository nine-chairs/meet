import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';



export default function EventGenre({ events }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  }, [events]);

  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

  const getData = () => {
    const data = genres.map((genre) => {
      const value = events.filter((event) =>
        event.summary
          .split(' ')
          .find((word) => word.toLowerCase().includes(genre.toLowerCase()))
      ).length;

      return { name: genre, value };
    });
    return data;
  };



  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width={400} height={400} >
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={120}
          fill="#8884d8"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          dataKey="value"
        >
        </Pie>
      </PieChart>
    </ResponsiveContainer>

  );



}