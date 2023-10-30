import React from 'react'
import { Helmet } from 'react-helmet'
import img1 from '../Assets/images/port1.png'
import img2 from '../Assets/images/port2.png'
import img3 from '../Assets/images/port3.png'
export default function Portfolio() {
  return (
    <>
        <Helmet>
            <title> Portfolio</title>
        </Helmet>

      <div className='vh-100  d-flex justify-content-center align-items-center '>
        
        <div className='text-center textMain'>
          <h2 className='fw-bolder fs-1 '>PORTFOLIO COMPONENT</h2>

          <div className='my-3'>
          <i class="fa-solid fa-grip-lines fs-3"></i>
          <i class="fa-solid fa-star fs-3 mx-3"></i>
          <i class="fa-solid fa-grip-lines fs-3"></i>
          </div>

          <div className='d-flex justify-content-between align-items-center'>
            <img className='m-3 rounded-4' width={350} src={img1} alt="" />
            <img className='m-3 rounded-4' width={350} src={img2} alt="" />
            <img className='m-3 rounded-4' width={350} src={img3} alt="" />
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <img className='m-3 rounded-4' width={350} src={img1} alt="" />
            <img className='m-3 rounded-4' width={350} src={img2} alt="" />
            <img className='m-3 rounded-4' width={350} src={img3} alt="" />
          </div>
        </div> 
      </div>

    </>
  )
}
