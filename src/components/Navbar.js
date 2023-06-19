import React, { useState } from 'react'
import { FaDollarSign, FaHome, FaCartPlus, FaChartBar, FaStore, FaUserCog, FaBars  } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Navbar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />
    },
    {
      path: "/admin",
      name: "Admin",
      icon: <FaUserCog />
    },
    {
      path: "/finance",
      name: "Finance",
      icon: <FaDollarSign />
    },
    {
      path: "/inventory",
      name: "Inventory",
      icon: <FaCartPlus />
    },
    {
      path: "/sales",
      name: "Sales",
      icon: <FaStore />
    },
    {
      path: "/summary",
      name: "Summary",
      icon: <FaChartBar />
    }
  ]
  return (
    <div className="container">
      <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
        <div className="top-section">
          <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Crato</h1>
          <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((item, index) =>(
            <NavLink to={item.path} key={index} className="link" activeClassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
            </NavLink>

          ))
        }
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Navbar