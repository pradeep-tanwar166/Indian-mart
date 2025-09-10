import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';




function Navbar() {
  const [Toggle,settoggle]=useState('');
const handletoggle= ()=>{
if(Toggle==="Dark"){
  settoggle("light");
  document.body.style.backgroundColor="white"
}
else{
  settoggle("Dark");
 document.body.style.backgroundColor="black"
}
}
  return (
    <div className="justify-around flex border-none h-20 items-center bg-white">
      <Link
        to="/"
        className="hover:scale-110  p-1 rounded-md border-1 border-slate-300 hover:bg-slate-200 transition duration-300 ease-in-out hover:-translate-y-1"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="hover:scale-110 rounded-md hover:bg-white/50 p-1 transition duration-300 ease-in-out hover:-translate-y-1"
      >
        About Us
      </Link>
      <Link
        to="/contact"
        className="hover:scale-110 rounded-md transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/50 p-1"
      >
        Contact Us
      </Link>
      

 <div className="hover:scale-110 transition duration-300 ease-in-out hover:-translate-y-1  p-1">
    <Dropdown >
      <MenuButton><FaRegUser />Login</MenuButton>
      <Menu>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Dropdown>
 </div>

<div></div>

<div>
  <input className="border-1 h-10 hover:border-slate-300 rounded-md border-white" type="search" placeholder="Search anything here"/><SearchIcon className="border-none rounded-md w-10 h-10 p-2 text-white bg-blue-400 hover:text-black"></SearchIcon>
</div>

<button className="text-xl border-0 border-white/50 p-2" onClick={handletoggle}>{Toggle==="Dark" ? <FaMoon />:<CiLight />}</button>
    
    </div>
  );
}

export default Navbar;
