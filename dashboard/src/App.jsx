import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import randomCountryData from "./assets/randomCountryData.js";
import { useSelector } from "react-redux";
import { useState } from "react";

const App = () => {
  const index = useSelector((state) => state.data);
  // const [mode, setMode] = useState('light')
  const mode = useSelector(state => state.mode)


  const countryData = randomCountryData[index];

  return (
    <div className={`theme ${mode}`}>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <MainContent countryData={countryData} />
        </div>
      </div>
    </div>
  );
};

export default App;
