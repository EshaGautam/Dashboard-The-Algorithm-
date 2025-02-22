import React from "react";
import './SideBar.css'
import { FaHome, FaCalendarAlt, FaFlask, FaShoppingCart, FaHeart, FaUsers, FaFileMedical, FaComments, FaCreditCard, FaCog } from "react-icons/fa";

const sidebarItems = [
  { name: "Home", icon: <FaHome /> },
  { name: "Appointment", icon: <FaCalendarAlt /> },
  { name: "Lab Test", icon: <FaFlask /> },
  { name: "Medicine Order", icon: <FaShoppingCart /> },
  { name: "Favourites", icon: <FaHeart /> },
  { name: "Family", icon: <FaUsers /> },
  { name: "Prescription", icon: <FaFileMedical /> },
  { name: "Messages", icon: <FaComments /> },
  { name: "Payments", icon: <FaCreditCard /> },
  { name: "Settings", icon: <FaCog /> }
];

const Sidebar = () => {
  return (
    <div className="sidebar">
       <img src='/src/assets/Design (1).png' className='logo'/>
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
