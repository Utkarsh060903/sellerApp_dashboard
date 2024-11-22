// import React from "react";
// import {
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   Radar,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts";

// const SalesRadarChart = ({ data }) => {
//   return (
//     <div className="">
//       <h3 className="text-sm font-semibold text-gray-500 mb-4 dark:text-white">
//         Sales by Region
//       </h3>
//       <div className="w-full h-[180px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <RadarChart data={data}>
//             <PolarGrid stroke="#e5e7eb" />
//             <PolarAngleAxis
//               dataKey="region"
//               tick={{ fill: "#374151", fontSize: 12 }}
//             />
//             {/* <PolarRadiusAxis angle={30} domain={[0, 3000]} stroke="#d1d5db" /> */}
//             <Radar
//               name="Sales"
//               dataKey="sales"
//               fill="#4F46E5"
//               fillOpacity={0.6}
//               stroke="#4F46E5"
//             />
//             <Tooltip />
//           </RadarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default SalesRadarChart;

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
      {/* Increased the height and width */}
      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis
              dataKey="region"
              tick={{ fill: "#374151", fontSize: 12 }}
            />
            {/* Removed PolarRadiusAxis as per the previous change */}
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
