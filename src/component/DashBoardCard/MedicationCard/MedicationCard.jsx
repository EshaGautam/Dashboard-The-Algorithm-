import React from "react";
import "./MedicationCard.css";
import { SlOptions } from "react-icons/sl";

const MedicationCard = () => {
  const medications = [
    {
      name: "Acetaminophen 500 mg",
      instructions: "Take with food every morning",
    },
    {
      name: "Doxycycline 100 mg",
      instructions:
        "Take 1 with food twice a day, and avoid drinking alcohol for 2 hours after",
    },
    {
      name: "Hydrochlorothiazide 23 mg",
      instructions: "Take 3 tablets, 3 times a day for 7 days",
    },
  ];

  return (
    <div className="medication-card">
      <div className="medication-header">
        <h3>Medications</h3>
         <span className="options"> <SlOptions/></span>
      </div>
      <hr/>
      {medications.map((med, index) => (
        <div key={index} className="medication-item">
          <p className="medication-name">{med.name}</p>
          <p className="medication-instructions">{med.instructions}</p>
          {index !== medications.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
};

export default MedicationCard;
