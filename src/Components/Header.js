import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className='header_logo'>
        <div className='main_info'>
            <h5>Time to drink tea!</h5>
              <div className='info_2'>
                <p>Tea and Botanical solution Supplies gives optimal satisfaction 
                <br></br>to your taste buds.</p>
              </div>
        </div>
              <div className='btn-1'>
                <button type="button" class="btn btn-primary mb-3 flex-fill btn-lg " disabled>Read More</button>
              </div>
      </div>
  )
}

export default Header