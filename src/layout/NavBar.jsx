import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar =()=>{return(<>
<div className="container-fluid nav bg">
<div className="row">
    <div className="col-10 mx-auto">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid wtcolor">
    <NavLink  className="navbar-brand" to="/">
      Rigthway Industries
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact className="nav-link active" activeClassName='menu_active'  aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='menu_active'  to="/service">
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='menu_active'  to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='menu_active'  to="/contact">
            Contact
          </NavLink>
        </li>
       
    
      </ul>
    
    </div>
  </div>
</nav>  </div>
</div>
</div>

</>)}

export default NavBar