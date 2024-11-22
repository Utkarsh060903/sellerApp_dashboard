import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../slices/toggleSlice';
import sun from "../assets/sun.png"
import moon from "../assets/moon.png"

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);
  const dispatch = useDispatch()
  const mode = useSelector(state => state.mode)

  const togglefn = () => {
    setIsToggled(!isToggled)
    if(mode == 'light'){
        dispatch(toggle("dark"))
    }
    else{
        dispatch(toggle("light"))
    }
  }

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={togglefn}
        className={`relative w-24 h-12 rounded-full p-1 transition-colors duration-300 ${
          isToggled ? 'bg-[#696FFB] '  : 'bg-[#696FFB]'
        }`}
      >
        <div
          className={`relative w-10 h-10 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
            isToggled ? 'translate-x-12' : 'translate-x-0'
          }`}
        >
          {isToggled ? (
            <div className="flex items-center justify-center h-full">
              <span role="img" aria-label="moon">
              <img src={moon} alt="" />
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <span role="img" aria-label="sun">
              <img src={sun} alt="" />
              </span>
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

export default ToggleButton;
