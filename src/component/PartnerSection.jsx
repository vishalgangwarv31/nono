import { ArrowRight } from 'lucide-react';
import React from 'react';


const PartnerSection = () => {
    return (
        <div className="partner-container">
            <div>
                <h1 className="partner-header">
                    Explore Partnership <br />Opportunities with us.
                </h1>
                <p className="partner-para">
                    Whether you're a healthcare professional, a clinic, or someone passionate about improving healthcare access, 
                    there's a place for you at Bridge Health Care.
                </p>
            </div>
            <button className="partner-service">
                <span className="partner-service-text">Contact Us &nbsp;</span>
                <span className="arrow-icon"><ArrowRight /></span>
            </button>
        </div>
    );
};

export default PartnerSection;
