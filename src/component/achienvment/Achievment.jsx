import './achievment.css';
import { ArrowRight } from 'lucide-react';

const Achievement = () => {
  return (
    <div className='achievement-container'>
      <h1 className='achievement-header'>Our Achievements</h1>
      <div className='achievement-body'>
        <div className='achievement-box'>
          <img
            className='achievement-image'
            src="/assets/achievement/govt.png"
            alt="Achievement 1"
          />
          <p className='achievement-text'>
            Bridge Healthcare is recognized as one of the promising startups in Healthcare
            by Government of Tamil Nadu under the <span className='bold'>TANSEED 4.0</span>
          </p>
        </div>
        <div className='achievement-box'>
          <img
            className='achievement-image'
            src="/assets/achievement/social_impact_award.png"
            alt="Achievement 2"
          />
          <p className='achievement-text'>
            Bridge Healthcare is awarded under the category of Social Impact startup by Vizha Coimbatore 2023
          </p>
        </div>
      </div>
      <button className="ach-service">
        <span className="ach-service-text">All Achievements &nbsp;</span>
        <span className="ach-icon"><ArrowRight /></span>
      </button>

      <Slider />
      
    </div>
  );
};

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider-track">
        <img
          src="/assets/achievement/slider_image.png"
          alt="Sliding Image 1"
          className="slider-image"
        />
        <img
          src="/assets/achievement/slider_image.png"
          alt="Sliding Image 2"
          className="slider_image"
        />
        <img
          src="/assets/achievement/slider_image.png"
          alt="Sliding Image 3"
          className="slider-image"
        />
        <img
          src="/assets/achievement/slider_image.png"
          alt="Sliding Image 4"
          className="slider-image"
        />
        <img
          src="/assets/achievement/slider_image.png"
          alt="Sliding Image 5"
          className="slider-image"
        />
      </div>
    </div>
  );
};

export default Achievement;
