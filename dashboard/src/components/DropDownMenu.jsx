// import React from "react";
// import { addData } from "../slices/dataSlice.js";
// import { useSelector, useDispatch } from "react-redux";

// const DropdownMenu = () => {
//   const dispatch = useDispatch();

//   const submitHandler = (e) => {
//     dispatch(addData(e.target.value));
//   };
//   // const [value, setValue] = useState(0);

//   const value = useSelector((state) => state.data);

//   return (
//     <div>
//       <select name="cars" id="cars" value={value} onChange={submitHandler}>
//         <option value="0">US</option>
//         <option value="1">Germany</option>
//         <option value="2">France</option>
//         <option value="3">Belgium</option>
//       </select>
//     </div>
//   );
// };

// export default DropdownMenu;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../slices/dataSlice.js";
import down from "../assets/down_arrow.svg";

const DropdownMenu = () => {
  const dispatch = useDispatch()
  
  const submitHandler = (e) => {
    setName(countries[e.target.value])
    setFlag(flags[e.target.value])
    dispatch(addData(e.target.value));
  };
  
  const value = useSelector((state) => state.data);
  const countries = ['USA', 'Germany', 'China', 'India']
  const flags = ['https://cdn.britannica.com/81/4481-004-660915ED/flag-Stars-and-Stripes-July-4-1912.jpg', 'https://cdn.britannica.com/97/897-050-0BFECDA5/Flag-Germany.jpg?w=400&h=300&c=crop', 'https://cdn.britannica.com/90/7490-050-5D33348F/Flag-China.jpg', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png']
  const [name, setName] = useState(countries[value])
  const [flag, setFlag] = useState(flags[value])

  return (
    <div className="flex justify-center items-center">
      <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-md w-[250px] dark:bg-down-menu justify-between">
        <div className="flex items-center">
        <span className="text-lg mr-2 dark:text-white"><img className="rounded-full " height="22px" width="22px" src={flags[value]} alt="" /></span>
        <span className="text-sm font-medium text-black dark:text-white">
          {name}
        </span>
        </div>
       
        <div className="flex flex-row justify-around">

        <div className="">
          <select
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            value={value}
            onChange={submitHandler}
          >
            <option value="0">USA</option>
            <option value="1">Germany</option>
            <option value="2">China</option>
            <option value="3">India</option>
          </select>
        </div>
        <div>
          {/* Dropdown Icon */}
          <img src={down} alt="" className="dark:filter dark:invert" />
        </div>
            </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
