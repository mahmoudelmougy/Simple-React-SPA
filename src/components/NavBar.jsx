import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg mainColor navbar-dark nav-text py-3">
        <div className="container ">
          <Link className="navbar-brand fs-3 "  to="/home">START FRAMEWORK</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
         
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body " >
              <ul className="navbar-nav  justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/about">ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link "  to="/Portfolio">PORTFOLIO</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacts">CONTACTS</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
