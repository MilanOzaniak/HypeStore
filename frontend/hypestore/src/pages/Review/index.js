import React from 'react'
import './review.css';

const review = () => {
  return (
    <div>
        <div className='container1'>
            <div className='profile-details1'>
                <div className='pd-row1'>
                    <div className='left1'>
                        <img src="" className='pd-image1'></img>
                    </div>
                    <div className='Info'>
                     <div className='Profile-Info1'>
                        </div>
                     <div className='Profile-Email1'>
                     </div>
                        <div className='Profile-Number1'>
                        </div>
                    </div>
                </div>
            </div>
    </div>
        <div className="submenu">
            <a className='active' href="/Product">Product</a>
            <a className='active' href="/Favorite">Favorite</a>
            <a className='active' href="/Reserved">Reserved</a>
            <a className='active' href="/Review">Review</a>
     </div>
    </div>
  )
}

export default review;