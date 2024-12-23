import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Text } from 'recharts';

const UserStatsGauge = ({ registeredUsers }) => {
  const { total, premium, basic } = registeredUsers;

  const premiumPercentage = (premium / total) * 100;
  const basicPercentage = (basic / total) * 100;

  const data = [
    { name: 'Premium', value: premiumPercentage },
    { name: 'Basic', value: basicPercentage },
    { name: 'Empty', value: 100 - (premiumPercentage + basicPercentage) }, // Empty space
  ];

  const COLORS = ['#818CF8', '#C7D2FE', '#F3F4F6'];

  const CenterLabel = ({ viewBox }) => {
    const { cx, cy } = viewBox;
    return (
      <>
        <Text
          x={cx}
          y={cy - 30}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-black text-2xl font-bold"
        >
          {total.toLocaleString()}
        </Text>
        <Text
          x={cx}
          y={cy + 20}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-gray-500 text-base"
        >
          Total users
        </Text>
      </>
    );
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-500 mb-4 dark:text-white">
        Registered Users
      </h3>
      <div className="h-64"> {/* Increased height */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={100}
              startAngle={180}
              endAngle={0}
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <CenterLabel />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between">
        <div className="text-center">
          <div className="text-xl font-semibold text-[#818CF8]">
            {premium.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">Premium Users</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-semibold text-[#C7D2FE]">
            {basic.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">Basic Users</div>
        </div>
      </div>
    </div>
  );
};

export default UserStatsGauge;
