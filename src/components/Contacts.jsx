import React from 'react'
import { Helmet } from 'react-helmet'

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title> Contacts</title>
      </Helmet>

      <div className='vh-100   '>
        
        <div className='text-center textMain my-5'>
          <h2 className='fw-bolder fs-1 '>CONTACTS SECTION</h2>

          <div className='my-3'>
            <i class="fa-solid fa-grip-lines fs-3"></i>
            <i class="fa-solid fa-star fs-3 mx-3"></i>
            <i class="fa-solid fa-grip-lines fs-3"></i>
          </div>
        </div> 

          <form className='text-start w-50 mx-auto my-5'>
                <div class="mb-3">
                  <label htmlFor="exampleInputname" class="form-label textcContent">userName :</label>
                  <input type="text" class="form-control" id="exampleInputname" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  <label htmlFor="exampleInputEmail1" class="form-label textcContent">userAge :</label>
                  <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  <label htmlFor="exampleInputEmail1" class="form-label textcContent">userEmail :</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div class="mb-3">
                  <label htmlFor="exampleInputPassword1" class="form-label textcContent">userPassword :</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn contentColor">Send Message</button>
          </form>
      </div>

    </>
  )
}
