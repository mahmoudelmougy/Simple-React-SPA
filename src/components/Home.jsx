import React from 'react'
import { Helmet } from 'react-helmet'
import boyicon from '../Assets/images/avataaars.svg'
export default function Home() {
  return (
    <>
    <Helmet>
      <title> Home</title>
    </Helmet>

    <div className='vh-100 contentColor d-flex justify-content-center align-items-center '>
      
      <div className='text-center text-white'>
        <img width={300} src={boyicon} alt="" />
        <h2 className='fw-bolder fs-1 mt-5'>START FRAMEWORK</h2>
        <div className='my-3'>

        <i class="fa-solid fa-grip-lines fs-3"></i>
        <i class="fa-solid fa-star fs-3 mx-3"></i>
        <i class="fa-solid fa-grip-lines fs-3"></i>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div> 
    </div>
    
    </>
  )
}
