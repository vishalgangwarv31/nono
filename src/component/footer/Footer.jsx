import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src="/assets/bhc_logo.png" alt="Logo" className="logo-image" />
            </div>
            <div className="footer-content">

                <div className="footer-section">
                    <h4 className='footer-header'>Product</h4>
                    <p>Smart Healthcare machine</p>
                    <p>Supporting Applications</p>
                    <p>Admin Software</p>
                </div>

                <div className="footer-section">
                    <h4 className='footer-header'>Solution</h4>
                    <p>Tele-Diagnostic Services</p>
                    <p>Personalized Care</p>
                    <p>Approachable and Friendly care</p>
                </div>

                <div className="footer-section">
                    <h4 className='footer-header'>Explore</h4>
                    <p>About</p>
                    <p>Our Product</p>
                    <p>Our Services</p>
                    <p>Contact us</p>
                    <p>Our Team</p>
                </div>

                <div className="footer-section">
                    <h4 className='footer-header'>Contact</h4>
                    <p>T: +91991441392</p>
                    <p>E: Support@bridgehealth.care</p>
                    <p>Address: 13B/8, 4th Main Road, Indira Nagar, Adyar, Chennai, TN - 600020</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© Copyright 2022 Bridge Healthcare Private Limited.</p>
                <div className="footer-links">
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
