import React from 'react'
import './style.css'
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa'

const Footer = () => {
  return (
  <div className='footer'>
    <div class="footer-distributed">

        <div class="footer-left">
            <h3>Hypestore</h3>

            <p class="footer-links">
            <a href="/HypeStoreFrontend/Shoes">Shoes</a>
            <a href="/HypeStoreFrontend/Clothing">Clothing</a>
            <a href="/HypeStoreFrontend/Accessories">Accessories</a>
            <a  href="/Aboutus">About us</a>
            </p>

            <p class="footer-company-name">Copyright © 2022 </p>
        </div>

        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p>Kontaktné info</p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p>+421 903 372 **1</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p>hypestore@gmail.com</p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                "Oživte svoj šatník a zarobte si peniaze! S našou stránkou môžete jednoducho a bez problémov predať svoje oblečenie, topánky a doplnky. Buďte súčasťou našej komunity a premeňte vaše nadbytočné veci na hotovosť."
            </p>
            <div class="footer-icons">
                <a href="#"><FaInstagram></FaInstagram></a>
                <a href="#"><FaFacebookSquare></FaFacebookSquare></a>
                <a href="#"><FaInstagram></FaInstagram></a>
                <a href="#"><FaFacebookSquare></FaFacebookSquare></a>
                
            </div>
        </div>
    </div>
  </div>
  )
}

export default Footer