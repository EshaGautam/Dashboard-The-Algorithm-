import React from "react";
import "./HealthPackageCard.css";
import { SlOptions } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
const healthPackages = [
  {
    id: 1,
    name: "Basic Health Package",
    description: "Ideal for individuals aged 21-40...",
    initials: "F",
  },
  {
    id: 2,
    name: "Fever Panel",
    description: "Ideal for individuals aged 21-40...",
    initials: "F",
  },
];

const HealthPackageCard = () => {
  return (
    <div className="health-card-container">
      <div className="health-card-header">
        <h3>Health Package</h3>
          <a href="#">View all <IoIosArrowForward size={10} className="arrow-icon"/></a>
      </div>
      {healthPackages.map((packageItem) => (
        <div className="health-card" key={packageItem.id}>
          <div className="health-icon">{packageItem.initials}</div>
          <div className="health-info">
            <div className="health-info-div">
            <p className="health-name">{packageItem.name}</p>
            <span className="health-menu"> <SlOptions/></span>
            </div>
            <p className="health-description">{packageItem.description}</p>
          </div>
        
        </div>
      ))}
    </div>
  );
};

export default HealthPackageCard;
