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
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));


function Navbar(props) {
  const [click,setclick]=useState(0)
  const [Toggle,settoggle]=useState('');

const buttonisclick=()=>{
  setclick(click+1);
}


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
      <a href="\">
   <div><img className="h-20 object-fill outline-none cursor-pointer" src="public\logo\logo.png" alt="" /></div></a>

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
      
<Link>
 <div className="hover:scale-110 transition duration-300 ease-in-out hover:-translate-y-1  p-1">
    <Dropdown >
      <MenuButton to='/Login'><FaRegUser />Login</MenuButton>
      <Menu>
        <MenuItem component={Link} to="/Profile">Profile</MenuItem>
        <MenuItem component={Link} to="/Myaccount">My account</MenuItem>
        <MenuItem component={Link} to="/Logout">Logout</MenuItem>
      </Menu>
    </Dropdown>
 </div>
</Link>

<div>
  <input className="border-1 h-10 hover:border-slate-300 rounded-md border-white cursor-pointer" type="search" placeholder="Search anything here"/><SearchIcon className=" cursor-pointer border-none rounded-md w-10 h-10  text-white bg-blue-400 hover:text-black"></SearchIcon>
</div>

<button className="text-xl border-0 border-white/50 p-2 cursor-pointer" onClick={handletoggle}>{Toggle==="Dark" ? <FaMoon />:<CiLight />}</button>

<div>    <IconButton aria-label="cart">
      <StyledBadge badgeContent={click} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton></div>
    


    </div>
  );
}

export default Navbar;
