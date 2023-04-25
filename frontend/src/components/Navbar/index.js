import React from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({toogle}) => {
  const history = useHistory();
  const currentUser = localStorage.getItem("userName");
  const [isVisible] = useState(currentUser === null);

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handleLogOut(){
    localStorage.clear();
    window.location.reload()
    history.push('/HypeStoreFrontend/')
  }

  return (
    <>
      <nav className='navbar'>
        <Link to='/HypeStoreFrontend/' className='navbar-logo'>
            HYPESTORE
        </Link>
        <div className='menu-icon' onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link to='/HypeStoreFrontend/Shoes' className='nav-links'onClick={toggleMenu}>Topánky</Link>
          </li>
          <li className='nav-item'>
            <Link to='/HypeStoreFrontend/clothing' className='nav-links'onClick={toggleMenu} > Oblečenie</Link>
          </li>
          <li className='nav-item'>
            <Link to='/HypeStoreFrontend/accessories' className='nav-links'onClick={toggleMenu}> Doplnky</Link>
          </li>
          <li className='nav-item'>
            <div className='dropdown'>
              <li className='dropbtn' style={{display: isVisible? 'block' : 'none'}}>
                <Link className='dropbtn' to='/HypeStoreFrontend/login'>Log in</Link>
              </li>
              <div className='drop' onClick={toggleMenu} style={{display: !isVisible? 'block' : 'none'}}> 
                <a className="dropbtn" >{currentUser}</a>
                <div className='dropdown-content' onClick={toggleMenu}>
                  <Link to={`/HypeStoreFrontend/profile/${currentUser}`}>Profile</Link>
                  <Link to={'/HypeStoreFrontend/'} onClick={handleLogOut}>Log Out</Link>
                </div>
              </div>
            </div>
          </li>
          <li className='nav-item'>
          <div className='addproduct-button' style={{display: isVisible? 'none' : 'block'}}>
            <Link to={'/HypeStoreFrontend/createitempage'} className='btn'>Pridať&nbsp;produkt</Link>
          </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;