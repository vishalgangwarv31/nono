import { CirclePlay } from "lucide-react";
import './contact.css';
import Landing from "../../component/landing/Landing";

const Contact = () => {
    return (
        <>
            <Landing
                green="Explore" 
                premium="Partnership" 
                green2="Opportunities with us." 
                cyan="" 
                detail="Providing immediate access to healthcare, empowering individuals and 
                        communities to lead healthier lives."
                home="false"
                imageURL="/assets/front/puzzle.png"
            />

            <div className="form-container">
                <h2>Contact Request Form</h2>
                <form className="contact-form">
                    <div className="form-row">
                        <input type="text" placeholder="Name" className="form-input" />
                        <input type="text" placeholder="Title" className="form-input" />
                    </div>
                    <div className="form-row">
                        <input type="email" placeholder="Email" className="form-input" />
                        <input type="tel" placeholder="Phone" className="form-input" />
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="Organization name" className="form-input" />
                        <input type="text" placeholder="Organization Type" className="form-input" />
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="Location" className="form-input" />
                    </div>
                    <div className="form-row">
                        <textarea placeholder="Message" className="form-textarea"></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>

            <p className="contact-thank">
                Thank you for taking the time to complete this information. You can expect a swift response.
            </p>

            <img className="map" src='/assets/front/map.png' alt="Map" />
        </>
    )
}

export default Contact;
