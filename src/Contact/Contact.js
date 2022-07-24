import React from "react"
import "./contact.css"
import { IoIosSend } from "react-icons/io"
import Fade from "react-reveal/Fade"
const Contact = () => {
  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="image-class">
              <img src="https://images.pexels.com/photos/326519/pexels-photo-326519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contact Form</h5>
              </div>
              <form>
                <div className="contact-form">
                  <label className="form-lebel">Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">E-mail</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Job Types</label>
                  <select className="custom-select">
                    <option>Full-time</option>
                    <option>Working Student</option>

                    <option>Part-time</option>

                    <option>Contract</option>
                  </select>
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Your Message</label>
                  <textarea
                    type="text"
                    maxLength="500"
                    className="form-control"
                    rows="4"
                  />
                </div>

                <div className="button-submit">
                  <p>
                    Send <IoIosSend size={20} />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Contact
