// // import React from "react";
// // import home from "../assets/dashboard-icon.svg";
// // import wallet from "../assets/payment-icon.svg";
// // import people from "../assets/customers-icon.svg";
// // import bag from "../assets/product-icon.svg";
// // import invoice from "../assets/invoice-icon.svg";
// // import stats from "../assets/analytics-icon.svg";
// // import settings from "../assets/setting-icon.svg";
// // import security from "../assets/security-icon.svg";
// // import help from "../assets/help-icon.svg";
// // import logout from "../assets/logout-icon.svg";
// // import messages from "../assets/messages-icon.svg"
// // import logo from "../assets/SellerApp Icon Logo.svg"
// // import openNav from "../assets/open-nav-icon.svg"
// // import closeNav from "../assets/close-nav-icon.svg"

// // const Sidebar = () => {
// //   const menuItems = [
// //     { icon: home, label: "Dashboard"},
// //     { icon: wallet, label: "Payment"},
// //     { icon: people, label: "Customers"},
// //     { icon: messages, label: "Messages"},
// //     { icon: bag, label: "Products"},
// //     { icon: invoice, label: "Invoice"},
// //     { icon: stats, label: "Analytics"},
// //     { icon: settings, label: "Settings"},
// //     { icon: security, label: "Security"},
// //     { icon: help, label: "Help"},
// //     { icon: logout, label: "Logout"},
// //   ];
  
// //   return (
// //     <aside className="w-[200px] bg-white shadow-md h-[1000px] flex flex-col dark:bg-custom-blue">
// //       <div className="h-20 flex items-center justify-center border-b gap-4">
// //         <img src={logo} alt="SellerApp Logo" className="h-12 dark:filter dark:invert" />
// //         <img src={closeNav} alt=""  className="h-4 dark:filter dark:invert"/>
// //       </div>
// //       <ul className="flex-1 p-4 space-y-4">
// //         {menuItems.map((item, index) => (
// //           <li
// //             key={index}
// //             className="flex items-center gap-4 p-2 rounded-lg cursor-pointer"
// //           >
// //             <img src={item.icon} alt={`${item.label} Icon`} className="w-6 h-6 dark:filter dark:invert" />
// //             <span className="text-sm font-medium dark:text-white">{item.label}</span>
// //           </li>
// //         ))}
// //       </ul>
// //     </aside>
// //   );
// // };

// // export default Sidebar;

// import React, { useState } from "react";
// import home from "../assets/dashboard-icon.svg";
// import wallet from "../assets/payment-icon.svg";
// import people from "../assets/customers-icon.svg";
// import bag from "../assets/product-icon.svg";
// import invoice from "../assets/invoice-icon.svg";
// import stats from "../assets/analytics-icon.svg";
// import settings from "../assets/setting-icon.svg";
// import security from "../assets/security-icon.svg";
// import help from "../assets/help-icon.svg";
// import logout from "../assets/logout-icon.svg";
// import messages from "../assets/messages-icon.svg";
// import logo from "../assets/SellerApp Icon Logo.svg";
// import openNav from "../assets/open-nav-icon.svg";
// import closeNav from "../assets/close-nav-icon.svg";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const menuItems = [
//     { icon: home, label: "Dashboard" },
//     { icon: wallet, label: "Payment" },
//     { icon: people, label: "Customers" },
//     { icon: messages, label: "Messages" },
//     { icon: bag, label: "Products" },
//     { icon: invoice, label: "Invoice" },
//     { icon: stats, label: "Analytics" },
//     { icon: settings, label: "Settings" },
//     { icon: security, label: "Security" },
//     { icon: help, label: "Help" },
//     { icon: logout, label: "Logout" },
//   ];

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <aside
//       className={`bg-white shadow-md h-[1000px] flex flex-col dark:bg-custom-blue transition-all duration-300 ${
//         isOpen ? "w-[200px]" : "w-[100px]"
//       }`}
//     >
//       <div className="h-20 flex items-center justify-between border-b dark:border-white px-4">
//         {isOpen ? (
//           <span className="text-lg font-bold dark:text-white">SellerApp</span>
//         ) : (
//           <img src={logo} alt="SellerApp Logo" className="h-12 dark:filter dark:invert" />
//         )}
//         <img
//           src={isOpen ? closeNav : openNav}
//           alt=""
//           className="h-4 dark:filter dark:invert cursor-pointer"
//           onClick={toggleSidebar}
//         />
//       </div>
//       <ul className="flex-1 p-4 space-y-4 ">
//         {menuItems.map((item, index) => (
//           <li
//             key={index}
//             className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer${
//               isOpen ? "justify-start hover:dark:bg-hover-color" : "justify-center hover:dark:bg-hover-color"
//             }`}
//           >
//             <img
//               src={item.icon}
//               alt={`${item.label} Icon`}
//               className="w-6 h-6 dark:filter dark:invert"
//             />
//             {isOpen && (
//               <span className="text-sm font-medium dark:text-white">{item.label}</span>
//             )}
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import home from "../assets/dashboard-icon.svg";
import wallet from "../assets/payment-icon.svg";
import people from "../assets/customers-icon.svg";
import bag from "../assets/product-icon.svg";
import invoice from "../assets/invoice-icon.svg";
import stats from "../assets/analytics-icon.svg";
import settings from "../assets/setting-icon.svg";
import security from "../assets/security-icon.svg";
import help from "../assets/help-icon.svg";
import logout from "../assets/logout-icon.svg";
import messages from "../assets/messages-icon.svg";
import logo from "../assets/SellerApp Icon Logo.svg";
import openNav from "../assets/open-nav-icon.svg";
import closeNav from "../assets/close-nav-icon.svg";
import light from "../assets/light-toggle.svg"
import dark from "../assets/dark-toggle.svg"
import ToggleButton from "./toggleButton";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: home, label: "Dashboard" },
    { icon: wallet, label: "Payment" },
    { icon: people, label: "Customers" },
    { icon: messages, label: "Messages" },
    { icon: bag, label: "Products" },
    { icon: invoice, label: "Invoice" },
    { icon: stats, label: "Analytics" },
    { icon: settings, label: "Settings" },
    { icon: security, label: "Security" },
    { icon: help, label: "Help" },
    { icon: logout, label: "Logout" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`bg-white shadow-md h-[1000px] flex flex-col dark:bg-custom-blue transition-all duration-300 ${
        isOpen ? "w-[200px]" : "w-[100px]"
      }`}
    >
      <div className="h-20 flex items-center justify-between border-b px-4">
        {isOpen ? (
          <span className="text-lg font-bold dark:text-white">SellerApp</span>
        ) : (
          <img src={logo} alt="SellerApp Logo" className="h-12 dark:filter dark:invert" />
        )}
        <img
          src={isOpen ? closeNav : openNav}
          alt=""
          className="h-4 dark:filter dark:invert cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <ul className="flex-1 p-4 space-y-4">
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <li
              className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer ${
                isOpen ? "justify-start hover:dark:bg-hover-color" : "justify-center hover:dark:bg-hover-color"
              }`}
            >
              <img
                src={item.icon}
                alt={`${item.label} Icon`}
                className="w-6 h-6 dark:filter dark:invert"
              />
              {isOpen && (
                <span className="text-sm font-medium dark:text-white">{item.label}</span>
              )}
            </li>
            {(index + 1) % 3 === 0 && (
              <hr className="border-t border-gray-200 dark:border-white-6 w-full" />
            )}
          </React.Fragment>
        ))}
      </ul>
      <div className="mb-[50px]">
        <ToggleButton />
      </div>
    </aside>
  );
};

export default Sidebar;