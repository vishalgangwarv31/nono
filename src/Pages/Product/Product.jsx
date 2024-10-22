import React, { useState } from 'react';
import { ArrowRight, CirclePlay } from 'lucide-react';
import Achievement from '../../component/achienvment/Achievment';
import './product.css';
import Faq from '../../component/faq/Faq';
import Landing from '../../component/landing/Landing';
import Article from '../../component/Article';
import PartnerSection from '../../component/PartnerSection';

const Product = () => {
    const productData = [
        {
            id: 1,
            name: 'Smart Healthcare Machine',
            image: '/assets/services/tdm_machine.png',
            features: [
                { image: '/assets/icon/clinical_notes.png', detail: 'Fast health screening' },
                { image: '/assets/icon/home_health.png', detail: 'Online doctor consultation' },
                { image: '/assets/icon/edit_document.png', detail: 'Printing Report and prescription' },
            ],
        },
        {
            id: 2,
            name: 'Doctor App',
            image: '/assets/services/doctor_app.png',
            features: [
                { image: '/assets/icon/adf_scanner.png', detail: 'Multi-TDM Access for online Consultation' },
                { image: '/assets/icon/edit_document.png', detail: 'Digit Writing and upload prescription' },
                { image: '/assets/icon/blood_pressure.png', detail: 'Access Real-Time Health Data' },
                { image: '/assets/icon/clinical_notes.png', detail: 'Access Health Records' },
                { image: '/assets/icon/respiratory_rate.png', detail: 'Access Heart, Lungs, And Abdominal Sounds' },
            ],
        },
        {
            id: 3,
            name: 'Patient App',
            image: '/assets/services/nurse_app.png',
            features: [
                { image: '/assets/icon/home_health.png', detail: 'Booking Homecare services' },
                { image: '/assets/icon/group_add.png', detail: 'Managing family account' },
                { image: '/assets/icon/respiratory_rate.png', detail: 'Booking online consultation for near TDM' },
            ],
        },
        {
            id: 4,
            name: 'Operator/Nurse App',
            image: '/assets/services/operator_app.png',
            features: [
                { image: '/assets/icon/clinical_notes.png', detail: 'Manage and Create Patient Appointment' },
                { image: '/assets/icon/group_add.png', detail: 'Manage Doctors schedule and Time slots' },
                { image: '/assets/icon/payments.png', detail: 'Managing Consultation Fee and transaction' },
            ],
        },
    ];

    const [selectedProduct, setSelectedProduct] = useState(productData[0]);

    const handleProductChange = (productId) => {
        const newProduct = productData.find((product) => product.id === productId);
        setSelectedProduct(newProduct);
    };

    return (
        <>
            <Landing
                green="Providing" 
                premium="Hi-Fi" 
                green2="Healthcare" 
                cyan="Connectivity" 
                detail="This seamless, real-time flow of high-quality health data transforms how patients and healthcare providers
                        connect, fostering a more reliable, responsive, and personalized approach to remote healthcare."
                home="false"
                imageURL="assets/front/wifi_icon.png"
            />

            <Article heading="Our Products" para="Smart Healthcare Machine, supporting personalized care and chronic disease management. The machine provides vital signs monitoring
                    (blood pressure, heart rate, oxygen saturation, and temperature), ECG, and key blood tests, including Hemoglobin, Lipid Profile, Uric
                    Acid, and Blood Sugar. Equipped with a digital stethoscope, it enables remote heart and lung sound assessments, enhancing
                    teleconsultations with real-time diagnostic data. Automated health reports are generated, with all data seamlessly integrated into the
                    patient’s digital profile for easy access."
            />

            <div className="type-product-container">
                <div className="type-button">
                    {productData.map((product) => (
                        <button
                            key={product.id}
                            onClick={() => handleProductChange(product.id)}
                            className={selectedProduct.id === product.id ? 'selected-product' : ''}
                        >
                            {product.name}
                        </button>
                    ))}
                </div>

                <div className="dummy">
                    <img className="type-tile-image" src={selectedProduct.image} alt={selectedProduct.name} />
                    <div className="features-container">
                        <h3 className="feature-header">Features</h3>
                        <ul className="features-list">
                            {selectedProduct.features.map((feature, index) => (
                                <li key={index} className="feature-item">
                                    <img src={feature.image} alt="" className="feature-icon" />
                                    <span>{feature.detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='admin-container'>
                <h2 className='product-header'>Admin Software</h2>
                <p className='admin-para'>
                    The software enables seamless administration, data management, and service coordination, 
                    making it easier for operators, healthcare providers, and facility managers to oversee operations.
                </p>
            </div>

            <div className='pc-container'>
                <img src='/assets/services/adminn.png' alt="" />
                <div className='pc-info'> 
                    <p>Features</p>
                    <ul>
                        <li>Multi-Specialist Accounts</li>
                        <li>Unlimited Appointments</li>
                        <li>Scheduling</li>
                        <li>Patient Records</li>
                        <li>Operation management</li>
                        <li>Online Booking & Patient Account</li>
                        <li>CRM Module</li>
                        <li>Group Video Consultations</li>
                        <li>Analytics and Reporting</li>
                        <li>Online Assistance and Technical Support</li>
                        <li>Dedicated account manager</li>
                    </ul>
                </div>
            </div>


            <div className='trust'>
                <p>Your <span>Trusted</span> Partner</p>
                <img src='/assets/icon/tickbig.png' alt="tick" />
            </div>

            <PartnerSection/>

            <Achievement />

            <Faq />
        </>
    );
};

export default Product;
