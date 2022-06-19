import React from 'react'
import RoseTea from "./Rose Tea.png";
import GreenTea from "./Green Tea.png";
import BrownTea from "./Brown Tea.png";
import "./product.css";


export default function Product() {
  return (
    <div className='container'>
         <div className='row g-3'>
          <div className='col-12 col-md-7 col-lg-4'>
            <div className='card'>
              <div className='imgbox'>
               <img src={RoseTea} alt='iijj not ' className='card-img-top' />
              </div>
                <div className='card-body'>
                <h2 className='card-title'>Rose Tea</h2>
                <h3 className='card-text'> $120 </h3>
                <a href="#" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='card'>
             <div className='imgbox'>
               <img src={GreenTea} alt='not ' className='card-img-top' />
              </div>
                <div className='card-body'>
                <h2 className='card-title'>Green Tea</h2>
                <h2 className='card-text'> $300 </h2>
                <a href="#" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='card'>
              <div className='imgbox'>
                <img src={BrownTea} alt='not ' className='card-img-top' />
              </div>
                <div className='card-body'>
                <h2 className='card-title'>Brown Tea</h2>
                <h3 className='card-text'> $250</h3>
                <a href="#" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
        </div>      
    </div>
  )
}

