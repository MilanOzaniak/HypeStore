import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div className="Footer">
    <div className="Footer-Content">
        <div className="Footer-Copyright">
            © 2022-2023 Hypestore
        </div>
        <div className="Footer-Links">
            <a className='Footer-Link' href="/Shoes">Shoes</a>
            <a className='Footer-Link' href="/Clothing">Clothing</a>
            <a className='Footer-Link' href="/Accessories">Accessories</a>
            <a className='Footer-Link' href="/Aboutus">About us</a>
        </div>
    </div>
</div>
  )
}

export default Footer