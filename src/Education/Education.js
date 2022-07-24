import React, { useState } from "react"
import Flip from "react-reveal/Flip"
import { MdCastForEducation } from "react-icons/md"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import "./Education.css"

const Education = () => {
  const data = [
    {
      name: "Bachelor in IT",
      institute: "Vedica Institute Of Technology",
      year: "2017-2020",
    },

    {
      name: "Diploma in IT",
      institute: "Dr D.Y Patil Polytechnic",
      year: "2012-2015",
    },
    {
      name: "Computer Commerce",
      institute: "Shree Ghatal Multiple Campus",
      year: "2010-2012",
    },
    {
      name: "SSC",
      institute: "Shree Bal Jagritee Higher Secondary School",
      year: "2009",
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
    <div className="container" id="education">
      <div className="section-title">
        <Flip left>
          <h5>Education</h5>
          <span className="line"></span>
        </Flip>
      </div>

      <VerticalTimeline lineColor="#FF8042">
        {data.map((item, index) => (
          <VerticalTimelineElement
            contentStyle={{ background: colors[index], color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={item.year}
            dateClassName="date"
            iconStyle={{ background: colors[index], color: "#fff" }}
            icon={<MdCastForEducation />}
          >
            <h3 className="vertical-timeline-element-titles">{item.name}</h3>
            <h4 className="vertical-timeline-element-subtitles">
              {item.institute}
            </h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default Education
