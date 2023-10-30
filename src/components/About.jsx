import React from 'react'
import { Helmet } from 'react-helmet'

export default function About() {
  return (
    <>
      <Helmet>
          <title> About</title>
      </Helmet>

      <div className='vh-100 contentColor d-flex justify-content-center align-items-center '>
        
        <div className='text-center text-white'>
          <h2 className='fw-bolder fs-1 '>ABOUT COMPONENT</h2>

          <div className='my-3'>
          <i class="fa-solid fa-grip-lines fs-3"></i>
          <i class="fa-solid fa-star fs-3 mx-3"></i>
          <i class="fa-solid fa-grip-lines fs-3"></i>
          </div>

          <div className='d-flex text-start px-5'>
            <p className='p-5'>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

            </p>
            <p className='p-5'>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

            </p>
          </div>
        </div> 
      </div>

    
    </>
  )
}
