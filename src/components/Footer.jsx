import React from 'react'

export default function Footer() {
  return (
    <div className='  text-white text-center '>
      <div className='mainColor d-flex justify-content-around  py-5'>
        <div className='my-5'>
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>

        <div className='my-5'>
          <h3>AROUND THE WEB</h3>
          <div className='d-flex justify-content-center align-items-center'>
          <i class="fa-brands fa-facebook mx-2 fs-5"></i>
          <i class="fa-brands fa-twitter mx-2 fs-5"></i>
          <i class="fa-brands fa-instagram mx-2 fs-5"></i>
          <i class="fa-brands fa-linkedin mx-2 fs-5"></i>

          </div>
        </div>

        <div className='my-5'>
          <h3>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Bootstrap </p>
          <p>theme created by Route</p>
        </div>
      </div>

      <div className='text-center mainColorDarker py-4'>
          Copyright © Your Website 2021
      </div>
    </div>
  )
}
