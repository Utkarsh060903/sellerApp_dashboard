import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import randomCountryData from "../../assets/randomCountryData.js";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white shadow-md p-2 rounded text-sm">
        <p className="font-semibold">{label}</p>
        <p>Revenue: ${payload[0].value}</p>
        <p>Target: ${payload[1].value}</p>
      </div>
    );
  }
  return null;
};

const SalesOverview = () => {
  const data =
    randomCountryData[useSelector((state) => state.data)].salesOverview;
  console.log(data);

  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const totalTarget = data.reduce((sum, item) => sum + item.target, 0);
  return (
    <div className="h-full ml-[100px] flex flex-col">
      <div className="flex items-center mb-4 ml-[500px] gap-5">
        <div>
          <div className="flex items-center justify-between gap-2">
            <div className="h-[6px] w-[6px] rounded-full bg-[#696FFB]"></div>
            <p className="text-sm font-semibold text-black opacity-60 dark:text-white-6">
              Total Revenue
            </p>
          </div>

          <p className="text-[16px] font-bold text-black dark:text-white">
            ${totalRevenue.toFixed(2)}
          </p>
        </div>

        
        <div>
        <div className="flex items-center justify-between gap-2">
            <div className="h-[6px] w-[6px] rounded-full bg-[#FF9E2B]"></div>
            <p className="text-sm font-semibold text-black opacity-60 dark:text-white-6">
              Total Target
            </p>
          </div>
          <p className="text-[16px] font-bold text-black dark:text-white">
            ${totalTarget.toFixed(2)}
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
          <XAxis dataKey="month" className="text-sm dark:bg-white" />
          {/* <YAxis domain={[0, 20000]} tickFormatter={(value) => `$${value / 1000}k`} /> */}
          <YAxis
            orientation="right"
            ticks={[0, 10000, 20000]} // Explicitly setting ticks
            tickFormatter={(value) => `$${value / 1000}k`}
            tick={{ fontSize: 12, fill: "#6b7280" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="#f97316"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesOverview;
