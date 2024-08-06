import React from 'react'

function Footer() {
    return (
      <footer className="footer_section layout_padding">
      <div className="container">
          <div className="row">
              <div className="col-lg-3 col-sm-6">
                  <h3 className="useful_text">About</h3>
                  <p className="footer_text"> CozyCoffee is a creative coffee shope for those who seeks outstanding cup of coffee. We are dedicated and responsible for precise and better quality of coffee. Quality is our first priority. This includes our skills, equipment, ingredients, and our services.</p>
              </div>
              <div className="col-lg-3 col-sm-6">
                  <h3 className="useful_text">Menu</h3>
                  <div className="footer_menu">
                      <ul>
                          <li><a href="/">Home</a></li>
                          <li><a href="/about">About Us</a></li>
                          <li><a href="/gallery">Gallery</a></li>
                          <li><a href="/services">Services</a></li>
                          <li><a href="/contact">Contact Us</a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                  <h3 className="useful_text">Useful Link</h3>
                  <p className="dummy_text"><a href='https://github.com/DEVKOSHTI'>https://github.com/DEVKOSHTI</a></p>
              </div>
              <div className="col-lg-3 col-sm-6">
                  <h3 className="useful_text">Contact Us</h3>
                  <div className="location_text">
                      <ul>
                          <li>
                              <a href="#">
                                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                                  <span className="padding_left_10">Address: Vastral,Ahmedabad</span>
                              </a>
                          </li>
                          <li>
                              <a href="#">
                                  <i className="fa fa-phone" aria-hidden="true"></i>
                                  <span className="padding_left_10">Call: +91 9327501749</span>
                              </a>
                          </li>
                          <li>
                              <a href="#">
                                  <i className="fa fa-envelope" aria-hidden="true"></i>
                                  <span className="padding_left_10">Email: devkoshti0119@gmial.com</span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
     
  </footer>
    );
  }

  export  default Footer;
  