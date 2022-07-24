import React, { useState } from "react"
import "./WorkExperience.css"
import Flip from "react-reveal/Flip"

import { GrWorkshop } from "react-icons/gr"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const WorkExperience = () => {
  const data = [
    {
      name: "NEPUTER TECH",
      position: "MERN stack developer",
      year: "2022-now",
      des: "Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      techused: [
        {
          techname: "Node js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Nest js",
        },
      ],
    },

    {
      name: "HASH TECHNOLOGIES",
      position: "Associate Engineer",
      year: "2021-2022",
      des: "Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",

      techused: [
        {
          techname: "React js",
        },
        {
          techname: "Node js",
        },

        {
          techname: "Express js",
        },
      ],
    },
    {
      name: "MAXGEN TECHNOLOGIES PVT LTD",
      position: "Junior developer",
      year: "2020-2021",
      des: "Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",

      techused: [
        {
          techname: "Java",
        },
        {
          techname: "JDBC",
        },
        {
          techname: "Servlets",
        },
      ],
    },
  ]

  const colors = [
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#FF1042",
  ]

  return (
    <div className="container" id="workexperience">
      <div className="section-title">
        <Flip left>
          <h5>Work-Experience</h5>
          <span className="line"></span>
        </Flip>
      </div>

      <VerticalTimeline>
        {data.map((item, index) => (
          <VerticalTimelineElement
            contentStyle={{ background: colors[index], color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={item.year}
            dateClassName="date"
            iconStyle={{ background: colors[index], color: "#fff" }}
            icon={<GrWorkshop color="white" />}
          >
            <h3 className="vertical-timeline-element-titles">{item.name}</h3>
            <h4 className="vertical-timeline-element-subtitles">
              {item.position}
            </h4>
            <div className="row">
              {item.techused.map((tec, index) => (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div key={index} className="tech-used-at-work">
                    <p>{tec.techname}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>{item.des}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default WorkExperience
