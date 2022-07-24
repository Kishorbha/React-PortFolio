import React, { useState } from "react"
import "./sidebar.css"
import Home from "../Home/Home"
import SidebarList from "./SidebarList"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

const Navbar = ({ toggleTheme, theme }) => {
  const [expandSidebar, setExpandSidebar] = useState(false)

  const handleClick = () => {
    setExpandSidebar(!expandSidebar)
  }

  return (
    <div className="container-fluid sidebar-section">
      <div
        className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}
        onMouseLeave={() => setExpandSidebar(false)}
        onMouseEnter={() => setExpandSidebar(true)}
      >
        <div className="icon-for-sidebar-expand">
          <p onClick={handleClick}>
            {expandSidebar ? (
              <BsChevronLeft size={30} />
            ) : (
              <BsChevronRight size={30} />
            )}
          </p>
        </div>
        <SidebarList expandSidebar={expandSidebar} />
      </div>
      <div className="container">
        <Home toggleTheme={toggleTheme} theme={theme} />
      </div>
    </div>
  )
}

export default Navbar
