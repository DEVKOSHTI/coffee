import React from 'react'
// import LoginModal from './LoginModel';
// import LoginSignup from './LoginSignup';

function Navbar({toggleComponent,login,onLogout}) {
  const handlelogout = () => {
    onLogout();
};

    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo"><a href="index.html"><img src="coffeecozy2.jpg" alt="logo" /></a></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#Order">Order</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#AboutUs">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">Contact Us</a>
            </li>
            <li className="nav-item">
            {login?
            <button className="nav-link" onClick={handlelogout} >Logout</button>:
            <button className="nav-link" onClick={toggleComponent} >Login</button>
            }
            </li>
          </ul>
        </div>
      </nav>
      </>
    );
  }

  export  default Navbar;
  