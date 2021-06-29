import React from 'react'
import Button from '../../Reusable-Components/Button'
import Heading from '../../Reusable-Components/Heading'
import Arrow from '../../svgs/arrow'

import '../../styles/home/customerStories.css'

const CustomerStories = () => {
    return (
        <div>
            <Heading heading="LEVEL-UP YOUR ECOMMERCE EXPERIENCE." desc1="Discover how stores are thriving with HERO®" />
            <div className="customer__stories-button">
            <button className="customer__stories-btn">
                read customer stores
                <Arrow />
            </button>
            </div>
            
       
            
        </div>
    )
}

export default CustomerStories
