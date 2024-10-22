import PartnerSection from '../PartnerSection';
import './activity.css';
import { ArrowRight } from "lucide-react";

const Activities = () => {
    return (
        <>
            <div className="activity-container">
                <h1 className="activity-header">
                    Services & Activities
                </h1>
                <div className='act-position'>
                    <div className="activity-left">
                        <div>
                            <p className="act-start">Trust By <span className="act-blue">Health Profession</span></p>
                            <h2 className="act-heading">5000+ Health Check Up</h2>
                        </div>
                        <div className='small-image'>
                            <img className="act-first" src="/assets/activity/act1.png" alt="" />
                            <img className="act-first" src="/assets/activity/act2.png" alt="" />
                        </div>
                        <img className='act4-image' src="/assets/activity/act4.png" alt="sdf" />
                    </div>
                    <div className='big-right'>
                        <img className="activity-right" src="/assets/activity/act3.png" alt="" />
                        <img className='act5-image' src="/assets/activity/act5.png" alt="" />
                    </div>
                </div>
            </div>

            <PartnerSection/>
        </>
    );
};

export default Activities;
