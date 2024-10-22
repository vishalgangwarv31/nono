import { CirclePlay } from 'lucide-react';
import './book.css';
import { useState } from 'react';
import Landing from '../../component/landing/Landing';

const Book = () => {
    const [selectedText, setSelectedText] = useState('Doctor Visit');

    return (
        <>
            <Landing
                green="Connecting" 
                premium="Health" 
                green2="Connecting" 
                cyan="Lives." 
                detail="Providing immediate access to healthcare, empowering individuals and communities to lead healthier lives."
                home="false"
                imageURL="/assets/front/doctor_icon.png"
            />


            <div className="scope-container">
                <h1 className="service-heading">Book Home Care Services</h1>
            </div>

            <div className="home-box-container">
                <div className="doctor-home-container">
                    <img className="home-image" src='/assets/services/doctor.png' alt="Doctor" />
                    <h2>
                        Doctor Visit <br />
                        Consultation
                    </h2>
                    <div className='booking-button-container'>
                        <button className='one' onClick={() => setSelectedText('Doctor Visit')}>Book Doctor</button>
                    </div>
                </div>
                <div className="doctor-home-container">
                    <img className="home-image" src='/assets/services/nurse.png' alt="Nurse" />
                    <h2>
                        Nurse/<br />
                        Caretaker
                    </h2>
                    <div className='booking-button-container'>
                        <button onClick={() => setSelectedText('Home care') }>Book Nurse</button>
                    </div>
                </div>
                <div className="doctor-home-container2">
                    <img className="home-image" src='/assets/services/demands.png' alt="On-Demand Services" />
                    <h2>
                        On-Demand <br />
                        Services
                    </h2>
                    <div className='booking-button-container'>
                        <button className='two' onClick={() => setSelectedText('Lab Tests') }>Book Lab Tests</button>
                    </div>
                </div>
            </div>

            <div className="service-form-container">
                <div className="service-form-left">
                    <div className="service-form-path">
                        <span>Our Service</span> ➔ <span className="bold-text">{selectedText}</span>
                    </div>
                    <form className="service-form">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Age" />
                        <input type="text" placeholder="Phone No." />
                        <input type="text" placeholder="Pincode" />
                        <button type="submit" className="continue-button">Continue</button>
                    </form>
                </div>
                <div className="service-form-right">
                    <img src='/assets/services/service_doc.png' alt="Illustration" className="service-image" />
                </div>
            </div>
        </>
    );
}

export default Book;
