import smile from "../assets/smile_navbar.png"
import DropdownMenu from './DropDownMenu';

const Navbar = () => {
    return (
      <nav className="p-4 flex justify-between items-center h-[80px] border dark:bg-custom-blue">
        <h1 className="text-2xl font-bold dark:text-white">Dashboard</h1>
        <div className="flex items-center space-x-4">
          
          <DropdownMenu />
          <div className='w-[106px]'>
          <img width="34px" height="34px" src={smile} alt="" />
          </div>
        </div>
      </nav>
    );
  };
  

export default Navbar
