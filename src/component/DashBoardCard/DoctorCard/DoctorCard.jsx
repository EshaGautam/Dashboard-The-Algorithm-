import React from "react";
import "./DoctorCard.css";
import { MdOutlineStar } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Jhon from '../../../assets/jhon.jpg'
import Emily from '../../../assets/emily.jpg'
import Michael from '../../../assets/michale.jpg'
import Sarah from '../../../assets/sarah.jpg'

const doctors = [
  {
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    reviews: 120,
    rating: 4.9,
    profileImageUrl: Jhon,
  },
  {
    name: "Dr. Sarah Johnson",
    specialty: "Dermatologist",
    reviews: 95,
    rating: 4.7,
    profileImageUrl:Sarah,
  },
  {
    name: "Dr. Michael Brown",
    specialty: "Pediatrician",
    reviews: 150,
    rating: 4.8,
    profileImageUrl:Michael,
  },
  {
    name: "Dr. Emily Davis",
    specialty: "Orthopedic Surgeon",
    reviews: 85,
    rating: 4.6,
    profileImageUrl: Emily,
  },
];

const DoctorCard = () => {
  return (
    <div className='doctor-card'>
    <div className="doctor-card-header">
        <h4>Top Doctors</h4>
      <a href="#">View all <IoIosArrowForward size={10} className="arrow-icon"/></a>
    </div>
     <ul className="doctor-list-div">
      {doctors.map((doctor, index) => (
        <li key={index} className="doctor-list">
          <img src={doctor.profileImageUrl} alt={doctor.name} className="doctor-img" />
          <div className="doctor-info-div">
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <div className="reviews">
            <span><MdOutlineStar size={12} className="star"/> {doctor.rating} • {doctor.reviews}+  Reviews</span> 
            <IoIosArrowRoundForward size={20} />
            </div>
          
            </div>
           
          
    
        </li>
      ))}
    </ul>
    </div>
   
  );
};

export default DoctorCard;
