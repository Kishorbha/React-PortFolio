import React from "react";
import "./projects.css";
import ProjectList from "./ProjectList";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const Projects = () => {
  const projectList = [
    {
      name: "MERN Stack Job Portal",
      des: "This project is to publish job for the employer and apply job for smployees",

      techused: [
        {
          techname: "Nuxt js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Express js",
        },
      ],
      projectlink: "https://react-company-profile.netlify.app/",
    },
    {
      name: "MERN Stack Job Portal",
      des: "This project is to publish job for the employer and apply job for smployees",
      techused: [
        {
          techname: "Nuxt js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Express js",
        },
      ],
      projectlink: "https://react-company-profile.netlify.app/",
    },
    {
      name: "MERN Stack Event Management",
      des: "This project is to publish job for the employer and apply job for smployees",
      techused: [
        {
          techname: "Nuxt js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Express js",
        },
      ],
      projectlink: "https://react-company-profile.netlify.app/",
    },
    {
      name: "MERN Stack Event Management",
      des: "This project is to publish job for the employer and apply job for smployees",
      techused: [
        {
          techname: "Nuxt js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Express js",
        },
      ],
      projectlink: "https://react-company-profile.netlify.app/",
    },
    {
      name: "MERN Stack Event Management",
      des: "This project is to publish job for the employer and apply job for smployees",
      techused: [
        {
          techname: "Nuxt js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Express js",
        },
      ],
      projectlink: "https://react-company-profile.netlify.app/",
    },
    {
      name: "MERN Stack Event Management",
      des: "This project is to publish job for the employer and apply job for smployees.This project is to publish job for the employer and apply job for smployees.This project is to publish job for the employer and apply job for smployees ",
      techused: [
        {
          techname: "Nuxt js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Express js",
        },
      ],
      projectlink: "https://react-company-profile.netlify.app/",
    },
  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <Flip left>
          <h5>Projects</h5>
          <span className="line"></span>
        </Flip>
      </div>
      <div className="row">
        {projectList.map((item, index) => (
          <Fade right>
            <div className="col-xl-6, col-lg-6, col-md-6, col-sm-6">
              <ProjectList key={index} {...item} index={index} />
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Projects;
