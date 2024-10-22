import { MapPin, Phone, Stethoscope } from "lucide-react";

const ContactInfo = ()=>{
    return(
        <>
            <div className="contact-info-container">
                <div className="contact-info-content">
                    <div className="contact-item">
                        <div className="icon-circle">
                            <div><Phone size={36} strokeWidth={1} /></div>
                        </div>
                        <h3>Contact Us</h3>
                        <p>+91-9914411392</p>
                    </div>
                </div>
                <div className="contact-info-content">
                    <div className="contact-item">
                        <div className="icon-circle">
                            <div><Stethoscope size={36} strokeWidth={1} /></div>
                        </div>
                        <h3>Sales</h3>
                        <p>876-256-876</p>
                    </div>
                </div>
                <div className="contact-info-content">
                    <div className="contact-item">
                        <div className="icon-circle">
                            <div><MapPin size={36} strokeWidth={1} /></div>
                        </div>
                        <h3>Location</h3>
                        <p>Chennai, Tamil Nadu</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactInfo;