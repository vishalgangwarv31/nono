import { CirclePlay } from 'lucide-react';
import './landing.css';
import ContactInfo from '../ContactInfo';

const Landing = (props) => {
    console.log(props)
    return (
        <>
            <div className="hero-section" style={{ backgroundImage: `url('/assets/front/background.png')` }}>
                <div className="hero-content">
                    <h1>
                        {props.green} <span className="highlight premium">{props.premium}</span> {props.green2} <span className="highlight affordable">{props.cyan}</span>
                    </h1>
                    <p className='hero-detail'>{props.detail}</p>
                    <button className="cta-button">
                        <span className="play-icon"><CirclePlay size={38} strokeWidth={2.5} /></span>
                        <span className="cta-text">See how we work</span>
                    </button>
                </div>
                <img src={props.imageURL} alt="Shield" className="shield-image" />
            </div>

            {props.home === "true" && <ContactInfo/>}
        </>
    );
}

export default Landing;
