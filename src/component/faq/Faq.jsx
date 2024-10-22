import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is Bridge Healthcare?",
            answer: "Bridge Healthcare is a provider of tele-diagnostic solutions aimed at making healthcare more accessible and personalized. We combine advanced diagnostic technology with telemedicine to bring real-time, high-quality healthcare services closer to you."
        },
        {
            question: "What is the BharatTDM Smart Healthcare Machine?",
            answer: "The BharatTDM is our flagship tele-diagnostic machine designed to provide on-site health monitoring, diagnostics, and teleconsultations. It is equipped with advanced tools, including vital signs monitoring, ECG, blood tests, and digital diagnostic modules, all integrated into a single, compact system."
        },
        {
            question : "Who can use Bridge Healthcare services?",
            answer : "Our services are suitable for residential complexes, clinics, pharmacies, corporate offices, hospitals, and community health initiatives. We aim to make high-quality diagnostics and teleconsultation accessible to everyone."
        },
        {
            question : "How does the teleconsultation feature work?",
            answer : "Through the BharatTDM Smart Healthcare Machine, patients can consult with healthcare providers in real-time. Using integrated diagnostic tools, patients’ health data is captured and transmitted to doctors during teleconsultations, ensuring precise and accurate advice."
        },
        {
            question : "What kinds of diagnostics are available through BharatTDM?",
            answer : "Bridge Healthcare is a provider of tele-diagnostic solutions aimed at making healthcare more accessible and personalized. We combine advanced diagnostic technology with telemedicine to bring real-time, high-quality healthcare services closer to you."
        },
        {
            question : "How can Bridge Healthcare benefit my residential complex or office building?",
            answer : "By installing the BharatTDM Smart Healthcare Machine in residential complexes or office buildings, residents and employees gain convenient access to healthcare services without having to travel to a clinic. This promotes preventive care and ensures timely medical intervention, improving overall health and well-being."
        },
        {
            question : "How does Bridge Healthcare ensure data privacy and security?",
            answer : "We prioritize data privacy and security by implementing robust encryption and following best practices in healthcare data management to ensure that patient information is protected and accessible only to authorized users."
        },
        {
            question : "How can I partner with Bridge Healthcare?",
            answer : "We offer partnership opportunities for hospitals, clinics, corporate wellness programs, and community health initiatives. If you are interested in partnering with us, please contact us via email at anmol.iitm@gmail.com or rahulsoni@bridgehealth.care."
        },
        {
            question : " How do I get started with Bridge Healthcare services?",
            answer : "To learn more or schedule a demo of our BharatTDM Smart Healthcare Machine, please visit our website at www.bridgehealth.care or contact us via email."
        },
        {
            question : "Does Bridge Healthcare offer support for chronic disease management?",
            answer : "Yes, Bridge Healthcare provides tools for chronic disease management through frequent monitoring and teleconsultations. Our BharatTDM machine and supporting apps help healthcare providers track patients’ health, offer personalized recommendations, and ensure timely interventions for managing chronic conditions effectively."
        },
        {
            question : "How does Bridge Healthcare promote preventive healthcare?",
            answer : "Bridge Healthcare encourages preventive healthcare by providing easy access to regular health checkups, diagnostics, and teleconsultations through the BharatTDM Smart Healthcare Machine. By monitoring key health parameters frequently, potential health issues can be identified early, leading to timely interventions and improved health outcomes."
        },

    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleToggle(index)}
                >
                    <div className="faq-question">
                        <span>{faq.question}</span>
                        <span className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}>▼</span>
                    </div>
                    <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                        {faq.answer}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;
