import React from 'react'
import { Link } from 'react-router-dom';



export default function Navbar() {
  return (
    <div className=''>
        <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          {/* <a className="navbar-brand"><img src={Warbler} alt="Image not found" ></img></a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                 <Link to="/ " className="nav-link">Home</Link>
             </li>
             <li className="nav-item">
                <Link to="/product" className="nav-link">Products</Link>
             </li>
             <li className="nav-item">
                <Link to="/aboutus" className="nav-link">About Us</Link>
             </li>
           </ul>
        </div>
      </div>
     </nav> 
    </div>
  );
}
