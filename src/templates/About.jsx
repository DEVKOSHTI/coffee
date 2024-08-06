import React from 'react'

function About() {
    return (
      <div className="about_section layout_padding" id='AboutUs'>
          <div className="container">
      <div className="row">
          <div className="col-md-6">
              <div className="about_taital_main">
                  <div className="about_taital">About Us :</div>
                  
                  <p className="about_text"> CozyCoffee is a creative coffee shope for those who seeks outstanding cup of coffee. We are dedicated and responsible for precise and better quality of coffee. Quality is our first priority. This includes our skills, equipment, ingredients, and our services.</p>
              </div>
          </div>
          <div className="col-md-6">
              <div className="about_img"><img src="images/about-img.png" alt="About Us" /></div>
          </div>
      </div>
  </div>
      </div>
    );
  }

  export  default About;
  