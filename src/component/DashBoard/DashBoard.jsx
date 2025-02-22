import React from 'react'
import './DashBoard.css'
import DoctorCard from '../DashBoardCard/DoctorCard/DoctorCard'
import ConsultationCard from '../DashBoardCard/ConsultationCard/ConsultationCard'
import PackageCard from '../DashBoardCard/CombinePackageCard/PackageCard/PackageCard'
import MedicationCard from '../DashBoardCard/MedicationCard/MedicationCard'
const DashBoard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard-header'>
        <h4>Welcome back</h4>
        <h2>Jubed Ahemad</h2>
      </div>
      <div className='dashboard-card'>
      <DoctorCard/>
      <MedicationCard/>
      <PackageCard/>
      <ConsultationCard/>
      
      </div>
     
    </div>
  )
}

export default DashBoard