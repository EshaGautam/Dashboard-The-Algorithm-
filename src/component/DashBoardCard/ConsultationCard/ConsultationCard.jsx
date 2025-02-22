import React from "react";
import "./ConsultationCard.css";
import { LuCalendar } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";

const ConsultationCard = () => {
  return (
    <div className="consultation-card">
      <h3 className="title">Upcoming Consultation</h3>
      <div className="card">
        <div className="doctor-info">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Doctor"
            className="doctor-img"
          />
          <div>
            <h4 className="doctor-name">Dr. Darlene Robertson</h4>
            <p className="specialty">Dental Specialist</p>
          </div>
        </div>
        <div className="appointment-details">
          <div className="date-time">
            <span className="icon"><LuCalendar /></span> 27 Oct 2021
          </div>
          <div className="date-time">
            <span className="icon"><CiClock2 /></span> 11:00 - 12:00 AM
          </div>
        </div>
        <div className="buttons">
          <button className="cancel">Cancel</button>
          <button className="reschedule">Reschedule</button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationCard;
