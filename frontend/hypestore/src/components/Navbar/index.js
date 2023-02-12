import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg'
import { useState } from 'react';



const Navbar = ({toogle}) => {
  const currentUser = localStorage.getItem("userName");
  const [isVisible] = useState(currentUser === null);

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  function handleLogOut(){
    localStorage.clear();
    window.location.href = "/";
  }

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            HYPESTORE
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/Shoes' className='nav-links' onClick={closeMobileMenu}>
              Shoes
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
          </li>
          <li className='nav-item'>
            <Link
              to='/clothing'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Clothing
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/accessories'
              className='nav-links'
              onClick={closeMobileMenu}>
              Accessories
            </Link>
          </li>
          <div className='dropdown'>
            <li className='dropbtn' style={{display: isVisible? 'block' : 'none'}}>
              <Link className='dropbtn' to='/signup'>Log in</Link>
            </li>
            <div className='drop'>
              <li style={{display: isVisible? 'none' : 'flex'}}>
                <a className="dropbtn">{currentUser}</a>
              </li>
              <div className='dropdown-content'>
                <Link to={`/currentUser/${currentUser}`}>Profile</Link>
                <Link to='/' onClick={handleLogOut}>Log Out</Link>
              </div>
            </div>
          </div>
        </ul>

        <div className='addproduct-button' style={{display: isVisible? 'none' : 'block'}}>
          <Link to={'/createitempage'} className='btn'>
            Add product
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;