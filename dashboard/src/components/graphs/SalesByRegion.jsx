import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const SalesRadarChart = ({ data }) => {
  return (
    <div className="">
      <h3 className="text-sm font-semibold text-gray-500 mb-4 dark:text-white">
        Sales by Region
      </h3>

      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis
              dataKey="region"
              tick={{ fill: "#374151", fontSize: 12 }}
            />
            <Radar
              name="Sales"
              dataKey="sales"
              fill="#696FFB"
              fillOpacity={0.6}
              stroke="#696FFB"
            />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesRadarChart;
