import React from 'react'
import HealthPackageCard from '../HealthCard/HealthPackageCard'
import ProductPackageCard from '../ProductCard/ProductPackageCard'
import './PackageCard.css'

const PackageCard = () => {
  return (
    <div className='package-card'>
        <ProductPackageCard/>
        <HealthPackageCard/>
    </div>
  )
}

export default PackageCard


