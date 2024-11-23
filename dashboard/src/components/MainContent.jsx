import React from "react";
import SalesRadarChart from "./graphs/SalesByRegion";
import UserStatsGauge from "./graphs/RegisteredUser"; // Import your gauge chart component
import IntegrationList from "./graphs/IntegrationList";
import stripe from "../assets/stripe.png";
import shopify from "../assets/shopify.png";
import zapier from "../assets/zapier.png";
import SalesOverview from "./graphs/SalesOverview";
import registerLight from "../assets/register-light-theme.svg"
import registerDark from "../assets/register-dark-theme.svg"
import { useSelector } from "react-redux";

const MainContent = ({ countryData }) => {
  const {
    totalIncome,
    incomeChange,
    profit,
    profitChange,
    totalViews,
    viewChange,
    conversionRate,
    conversionRateChange,
    salesByRegion,
    registeredUsers,
    integrations,
    salesOverview,
  } = countryData;

  // Convert salesByRegion object to array for the RadarChart
  const salesData = Object.entries(salesByRegion).map(([region, sales]) => ({
    region,
    sales,
  }));

  const mode = useSelector(state => state.mode)

  return (
    <div className="flex-1 bg-gray-100 p-6 dark:bg-slate-500">
      {/* Header Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-4 w-[310px] h-[150px] rounded-lg shadow-md flex flex-col gap-4 dark:bg-custom-blue">
          <h3 className="text-sm font-semibold text-black dark:text-white">
            Total Income
          </h3>
          <p className="text-2xl font-bold dark:text-white">
            $ {totalIncome.toFixed(2)}
          </p>
          <p className="text-sm flex gap-2 dark:text-white-6">
            <div
              className={`bg-black border-none rounded p-[2px] ${
                incomeChange > 0 ? "bg-green-dark" : "bg-red-dark"
              } dark:text-white`}
            >
              <span
                className={`${
                  incomeChange > 0
                    ? " dark:text-white text-black"
                    : "text-red-500 dark:text-white"
                } p-1 rounded-md`}
              >
                {incomeChange > 0 ? "↑" : "↓"}
              </span>
              <span
                className={`${
                  incomeChange > 0
                    ? "text-black dark:text-white"
                    : "text-red-500 dark:text-white"
                } p-1 rounded-md`}
              >
                {incomeChange.toFixed(2)}%
              </span>
            </div>{" "}
            Compared to last month
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 dark:bg-custom-blue">
          <h3 className="text-sm font-semibold text-black dark:text-white">
            Profit
          </h3>
          <p className="text-2xl font-bold dark:text-white">
            $ {profit.toFixed(2)}
          </p>
          <p className="text-sm flex gap-2 dark:text-white-6">
            <div
              className={`bg-black border-none rounded p-[2px] ${
                profitChange > 0 ? "bg-green-dark" : "bg-red-dark"
              } dark:text-white`}
            >
              <span
                className={`${
                  profitChange > 0
                    ? "text-black dark:text-white"
                    : "text-black dark:text-white"
                } p-1 rounded-md`}
              >
                {profitChange > 0 ? "↑" : "↓"}
              </span>
              <span
                className={`${
                  profitChange > 0
                    ? "text-black dark:text-white"
                    : "text-black dark:text-white"
                } p-1 rounded-md`}
              >
                {profitChange.toFixed(2)}%
              </span>
            </div>{" "}
            Compared to last month
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 dark:bg-custom-blue">
          <h3 className="text-sm font-semibold text-black dark:text-white">
            Total Views
          </h3>
          <p className="text-2xl font-bold dark:text-white">
            {totalViews.toFixed(2)}
          </p>
          <p className="text-sm flex gap-2 dark:text-white-6">
            <div
              className={`bg-black border-none rounded p-[2px] ${
                viewChange > 0 ? "bg-green-dark" : "bg-red-dark"
              } dark:text-white`}
            >
              <span
                className={`${
                  viewChange > 0
                    ? "text-black dark:text-white"
                    : "text-black dark:text-white"
                } p-1 rounded-md`}
              >
                {viewChange > 0 ? "↑" : "↓"}
              </span>
              <span
                className={`${
                  viewChange > 0
                    ? "text-black dark:text-white"
                    : "text-black dark:text-white"
                } p-1 rounded-md`}
              >
                {viewChange.toFixed(2)}%
              </span>
            </div>{" "}
            Compared to last month
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 dark:bg-custom-blue">
          <h3 className="text-sm font-semibold text-black dark:text-white">
            Conversion Rate
          </h3>
          <p className="text-2xl font-bold dark:text-white">
            {conversionRate.toFixed(2)}%
          </p>
          <p className="text-sm flex gap-2 dark:text-white-6">
            <div
              className={`bg-black border-none rounded p-[2px] ${
                conversionRateChange > 0 ? "bg-green-dark" : "bg-red-dark"
              } dark:text-white`}
            >
              <span
                className={`${
                  conversionRateChange > 0
                    ? "text-black dark:text-white"
                    : "text-black dark:text-white"
                } p-1 rounded-md`}
              >
                {conversionRateChange > 0 ? "↑" : "↓"}
              </span>
              <span
                className={`${
                  conversionRateChange > 0
                    ? "text-black dark:text-white"
                    : "text-black dark:text-white"
                } p-1 rounded-md`}
              >
                {conversionRateChange.toFixed(2)}%
              </span>
            </div>{" "}
            Compared to last month
          </p>
        </div>
      </div>

      {/* Graph Section */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {/* Sales Overview - Wider Graph */}
        <div className="col-span-2 bg-white p-4 rounded-lg shadow-md h-[299px] dark:bg-custom-blue">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-white">
            Sales Overview
          </h3>
          <SalesOverview />
        </div>

        {/* Sales by Region - Narrower Graph */}
        <div className="bg-white p-4 rounded-lg shadow-md h-[299px] dark:bg-custom-blue ">
          <SalesRadarChart data={salesData} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="col-span-1 bg-white p-4 rounded-lg shadow-md dark:bg-custom-blue relative">
          <UserStatsGauge registeredUsers={registeredUsers} />
          <div className="flex flex-col items-center justify-between gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src={mode == 'dark' ? registerDark : registerLight} alt="" />
                <div className="dark:text-white ">{registeredUsers.total}</div>
                <div className="text-black-60 dark:text-white-6">Total Users</div>
          </div>
        </div>

        {/* List of Integrations */}
        <div className="col-span-2 bg-white p-4 rounded-lg shadow-md dark:bg-custom-blue">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-white">
            List of Integrations
          </h3>
          <div className="mt-4 space-y-2">
            <IntegrationList integrations={integrations} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
