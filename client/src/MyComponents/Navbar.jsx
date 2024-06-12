import React, { useState } from 'react';
import './Navbar.css';
import { TbTruckDelivery } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { BsCart4 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../storeToken/auth";
export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  
  return (
    <nav>
      <div className='brand'>
        <TbTruckDelivery className='icons' id='brandicon' />
        <Link className='icons' id='brand' to='/' >QuickCart</Link>
      </div>
      <ul className={menuOpen ? 'show' : ""}>
        <NavLink className='icons' id='N' to='/' onClick={() => setMenuOpen(!menuOpen)}>Home</NavLink>
        <NavLink className='icons' id='N' to='/About' onClick={() => setMenuOpen(!menuOpen)}>About</NavLink>
        <NavLink className='icons' id='N' to='/Categories' onClick={() => setMenuOpen(!menuOpen)}>Categories</NavLink>
        {isLoggedIn ? (
          <NavLink className='icons' id='N' to="/logout" onClick={() => setMenuOpen(!menuOpen)}>Logout</NavLink>
        ) : (
          <>
            <NavLink className='icons' id='N' to="/register" onClick={() => setMenuOpen(!menuOpen)}> Register </NavLink>
            <NavLink className='icons' id='N' to="/login" onClick={() => setMenuOpen(!menuOpen)}> Login </NavLink>
          </>

        )}
        <NavLink className='icons' to='/Cart'><BsCart4 /></NavLink>
      </ul>
      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>{!menuOpen ? (<TiThMenu />) : (<ImCross />)}</div>
    </nav>
  );
}
export default Header;
