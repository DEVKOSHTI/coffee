import React from 'react'

function Contact() {
    return (
      <div >
              <div className="contact_section layout_padding" id='Contact'>
                  <div className="container">
                      <h1 className="contact_text">Contact Us</h1>
                  </div>
              </div>
              <div className="contact_section_2 layout_padding">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-6 padding_0">
                              <div className="mail_section">
                                  <div className="email_text">
                                      <div className="form-group">
                                          <input type="text" className="email-bt" placeholder="Name" name="Email" />
                                      </div>
                                      <div className="form-group">
                                          <input type="text" className="email-bt" placeholder="Email" name="Email" />
                                      </div>
                                      <div className="form-group">
                                          <input type="text" className="email-bt" placeholder="Phone Number" name="Email" />
                                      </div>
                                      <div className="form-group">
                                          <textarea className="massage-bt" placeholder="Message" rows="5" id="comment" name="Message"></textarea>
                                      </div>
                                      <div className="send_btn">
                                          <div type="text" className="main_bt"><a href="#">SEND</a></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 padding_0">
                              <div className="map-responsive">
                              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14690.850507577581!2d72.65323785044832!3d22.997592617057276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87cf76479217%3A0xbe50540453c71a8c!2sVastral%2C%20Ahmedabad%2C%20Gujarat%20380038!5e0!3m2!1sen!2sin!4v1714919847915!5m2!1sen!2sin"
  width="800"
  height="480"
  style={{ border: '0' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
  }

  export default  Contact;

  

  