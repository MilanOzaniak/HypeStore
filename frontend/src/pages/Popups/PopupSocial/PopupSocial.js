import React from 'react'
import './PopupSocial.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import Popup from 'reactjs-popup'

const PopupSocial = () => {
  return (
    <Popup trigger={<button>change socials</button>}>
        <div className='center'>
            <button id='show-setsocialmedia'>SOCIAL MEDIA</button>
        </div>
        <div className='popup2'>
        <div className='close-btn'>X</div>
            <div className='formS'>
                <h2 className='title2'>SOCIAL MEDIA</h2>
                <div className='form-element'>
                    <FaFacebook className='fa'></FaFacebook>
                    <label for='facebook-name'>Facebook</label>
                    <input
                      type='text'  
                      id='facebook_name' 
                      placeholder='Facebook Name'
                    />
                </div>
                <div className='form-element'>
                <FaInstagram className='ig'></FaInstagram>
                <label for='instagram-name'>Instagram Name</label>
                
                    <div className='row'>
                        
                        <input
                            type='text'
                            id='instagram_name'  
                            placeholder='Instagram Name'    
                        />
                    </div>
                </div>
                <div className='form-elementbutton'>
                    <button>SAVE CHANGES</button>
                </div>
            </div>
        </div>
    </Popup>
  )
}

export default PopupSocial