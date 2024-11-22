import React from 'react';

const IntegrationList = ({ integrations }) => {
  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="w-full border-separate" style={{ borderSpacing: '0 10px' }}>
          <thead className="bg-indigo-50 text-gray-500 text-sm font-medium dark:bg-white-8">
            <tr>
              <th className="text-left p-3 rounded-l-lg dark:text-white-6">Application</th>
              <th className="text-left p-3 dark:text-white-6">Type</th>
              <th className="text-left p-3 dark:text-white-6">Rate</th>
              <th className="text-left p-3 rounded-r-lg dark:text-white-6">Profit</th>
            </tr>
          </thead>
          <tbody>
            {integrations.map((integration, index) => (
              <tr
                key={index}
                className="bg-white dark:bg-custom-blue"
              >
                <br />
                {/* <hr /> */}
                <td className="p-3 flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                  />
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="w-6 h-6 rounded"
                  />
                  <span className="font-semibold text-gray-700 dark:text-white">
                    {integration.name}
                  </span>
                </td>
                <td className="p-3 text-gray-500">{integration.type}</td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: `${integration.rate}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-white-6">
                      {integration.rate}%
                    </span>
                  </div>
                </td>
                <td className="p-3 font-bold text-gray-700 dark:text-white-6">
                  ${integration.profit.toFixed(2)}
                </td>
                <hr />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IntegrationList;