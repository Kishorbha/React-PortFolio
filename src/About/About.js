import React from "react"
import "./about.css"
import Fade from "react-reveal/Fade"
import profile from "../images/team-kishor.png"

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row d-flex align-items-center">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={profile} alt="about_image" />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-details">
              <div className="about-title">
                <h5>About me</h5>
                <span className="line"></span>
              </div>

              <Fade left>
                <p>
                  An optimistic and enthusiastic software developer eager to
                  contribute to team success through hard work, attention to
                  detail, and excellent problem-solving skills, motivated to
                  learn, grow and excel in the organization.
                </p>
              </Fade>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default About
