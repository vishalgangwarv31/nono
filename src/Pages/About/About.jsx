import { ArrowRight, CirclePlay } from "lucide-react";
// import backgroundImage from '../../assets/front/background.png';
// import rocket from '../../assets/front/rocket.png'
import './about.css';
// import facebook from '../../assets/icon/facebook.png';
// import linkedin from '../../assets/icon/linkedin.png';
// import twitter from '../../assets/icon/twitter.png';

import Achievement from "../../component/achienvment/Achievment";
import Faq from "../../component/faq/Faq";
import Landing from "../../component/landing/Landing";
import Article from "../../component/Article";
import PartnerSection from "../../component/PartnerSection";

const About = () => {
    const team = [
        {
            image: '/assets/about/anmol.png',
            name: 'Anmol Garg',
            pos: 'Co-Founder & CTO',
            spec: 'Expertise in complex heart conditions and advance cardiac procedures.'
        },
        {
            image: '/assets/about/rahul.png',
            name: 'Rahul Soni',
            pos: 'Co-Founder & CTO',
            spec: 'Expertise in complex heart conditions and advance cardiac procedures.'
        },
        {
            image: '/assets/about/b.rebecca.png',
            name: 'Dr. B. Rebecca',
            pos: 'Co-Founder',
            spec: 'Expertise in complex heart conditions and advance cardiac procedures.'
        },
        {
            image: '/assets/about/pavan.png',
            name: 'Pavan Sai',
            pos: 'Senior Developer',
            spec: 'Expertise in complex heart conditions and advance cardiac procedures.'
        },
        {
            image: '/assets/about/vahid.png',
            name: 'Mohammad Vahid',
            pos: 'Senior Android Developer',
            spec: 'Expertise in complex heart conditions and advance cardiac procedures.'
        },
        {
            image: '/assets/about/amit.png',
            name: 'Parshotam Garg',
            pos: 'Sales Manager',
            spec: 'Expertise in complex heart conditions and advance cardiac procedures.'
        }
    ];

    return (
        <>
            <Landing
                green="Teamwork" 
                premium="in Motion," 
                green2="Transforming" 
                cyan="Healthcare" 
                detail="Providing immediate access to healthcare, empowering individuals and communities to lead healthier lives"
                home="false"
                imageURL="/assets/front/rocket.png"
            />
            
            
            <Article heading="About Us" para="Bridge Healthcare is a company focused on revolutionizing tele-diagnostics through innovative healthcare 
                    solutions. Their flagship product, the Smart 
                    Healthcare Machine, provides integrated health checkups and tele-consultation services. Unlike most health 
                    kiosks, Bridge Healthcare's 
                    machine offers real-time data transfer during consultations and includes a digital stethoscope, allowing for
                    more accurate and immediate diagnoses.
                    <br /><br />The company offers its services across various settings. In hospitals, the Smart Healthcare Machine 
                    facilitates seamless health checks and tele-consultations, providing convenience for both patients and 
                    healthcare providers.
                    <br /><br />Bridge Healthcare has also ventured into premium residential complexes, positioning itself as a 
                    provider of accessible, affordable healthcare services for residents. Through a subscription-based model, 
                    they offer free health checkups with optional paid services like blood tests and tele-consultations. The 
                    company manages these operations by appointing on-site nurses and establishing a network of hospital doctors to 
                    provide tele-consultations."
            />

            <div className="team-container">
                <h1 className="about-header">Our Team</h1>
                <p className="team-para">
                    Bridge Healthcare’s team is a dynamic group of professionals with diverse expertise in healthcare, 
                    technology, and business, all united by a shared vision to revolutionize tele-diagnostics and make 
                    premium healthcare more accessible
                </p>
            </div>

            <div className="team-container-tile">
                {team.map((member, index) => (
                    <div className="team-card" key={index}>
                        <img className="team-image" src={member.image} alt={member.name} />
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-position">{member.pos}</p>
                        <div className="social-icons">
                            <a href="#"><img className="fab fa-facebook-f" src='/assets/icon/facebook.png' alt="Facebook" /></a>
                            <a href="#"><img className="fab fa-linkedin-in" src='/assets/icon/linkedin.png' alt="LinkedIn" /></a>
                            <a href="#"><img className="fab fa-twitter" src='/assets/icon/twitter.png' alt="Twitter" /></a>
                        </div>

                    </div>
                ))}
            </div>

            <PartnerSection/>
            <Achievement />
            <Faq />
        </>
    )
}

export default About;
