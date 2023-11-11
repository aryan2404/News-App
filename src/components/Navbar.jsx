//import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const Navbar= ()=>{
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">News Panda</Link>
        <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
          <span className="navbar-hrefggler-icon"></span>
        </buthrefn>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item"><Link  className="nav-link" to="/Business">Business</Link></li>
            <li className="nav-item"><Link  className="nav-link" to="/Technology">Technology</Link></li>
            <li className="nav-item"><Link  className="nav-link" to="/Sports">Sports</Link></li>
            <li className="nav-item"><Link  className="nav-link" to="/Health">Health</Link></li>
            <li className="nav-item"><Link  className="nav-link" to="/Fashion">Fashion</Link></li>
           </ul>
          
        </div>
      </div>
    </nav>
      </div>
    )
  }


export default Navbar
