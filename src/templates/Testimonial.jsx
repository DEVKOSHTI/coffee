import React from 'react'

function Testimonial() {
    return (
      <div className="client_section layout_padding">
        <div className="container">
                  <div className="row">
                      <div className="col-sm-12">
                          <h1 className="client_taital">Testimonial</h1>
                          <p className="client_text">Our Review</p>
                      </div>
                  </div>
              </div>
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                     
                  </ol>
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                          <div className="client_section_2">
                              <div className="container">
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="testimonial_section_2">
                                              <h4 className="client_name_text">Tapasya <span className="quick_icon"><img src="images/quick-icon.png" alt="Quick Icon" /></span></h4>
                                              <p className="customer_text">I would probably say that this coffee shop is a must for coffee lovers! The service was good, and the variety of coffee served in the ambiance was very satisfying. If you like your coffee shops, then this is a must-visit! We will be back again!</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                     
                  </div>
              </div>
      </div>
    );
  }

  export  default Testimonial;
  