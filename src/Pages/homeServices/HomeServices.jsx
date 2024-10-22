import { ArrowRight, CirclePlay } from "lucide-react";
import './homeService.css';
import TileSlider from "../../component/Tile/TileSclider";
import { useState } from "react";
import Achievement from "../../component/achienvment/Achievment";
import Faq from "../../component/faq/Faq";
import Landing from "../../component/landing/Landing";
import PartnerSection from "../../component/PartnerSection";

const HomeServices = () => {
    const data1 = [
        {
            icon: '/assets/icon/report.png',
            title: 'General Body Checkups 14+',
            items: ['Height', 'Weight', 'BMI', 'Muscle Quality Score', '& Many More'],
        },
        {
            icon: '/assets/icon/heart.png',
            title: 'Cardiac Checkups',
            items: ['ECG', 'TC', 'BMI', 'LDL', 'HDL Ratio', 'Non-HDL'],
        },
        {
            icon: '/assets/icon/kit.png',
            title: 'Diabetes',
            items: ['Blood Sugar', 'Hemoglobin', 'Digital Stethoscope', 'Oral Camera'],
        },
        {
            icon: '/assets/icon/tick.png',
            title: 'Regular Checkups',
            items: ['Blood Tests', 'RBC Tests', 'WBC Tests', 'Others'],
        },
        {
            icon: '/assets/icon/heart.png',
            title: 'Diagnostic Checkup',
            items: ['Pregnancy', 'HIV', 'COVID-19', 'Hepatitis A', 'Tuberculosis'],
        },
    ];

    const data2 = [
        {
            icon: '/assets/icon/report.png',
            title: 'Online Booking Appointment',
            items: ['Require minimum info', 'Doctor Selection', 'Generate Token', 'Confirmation'],
        },
        {
            icon: '/assets/icon/report.png',
            title: 'Video Calling ',
            items: ['Patient Friendly interface', 'Conference call'],
        },
        {
            icon: '/assets/icon/heart.png',
            title: 'Real-time Diagnostic interface',
            items: ['Vital Parameters', 'Blood Pressure', 'Blood Test', 'Digital Stethoscope'],
        },
        {
            icon: '/assets/icon/kit.png',
            title: 'Digital Stethoscope',
            items: ['Multi-Filter', 'Amplitude modification', 'Noise Cancellation'],
        },
        {
            icon: '/assets/icon/tick.png',
            title: 'Advance modules',
            items: ['Dermatoscope', 'Otoscope', 'iris scope', 'Spiro meter', 'Ultrasound'],
        },
        {
            icon: '/assets/icon/tick.png',
            title: 'Upload Documents',
            items: ['Scanning Documents', 'Upload Prescription', 'Upload Lab Reports', 'Upload Medical Images'],
        },
        {
            icon: '/assets/icon/tick.png',
            title: 'Printed Prescription',
            items: ['High quality pdf', 'Any time accessibility'],
        },
    ];

    const data3 = [
        {
            icon: '/assets/icon/report.png',
            title: 'Doctor Visit ',
            items: ['General Physician', 'Specialist', 'Home Visit'],
        },
        {
            icon: '/assets/icon/heart.png',
            title: 'Nurse/caretaker services',
            items: ['Nurse', 'Care taker', '8 to 24 hr service'],
        },
        {
            icon: '/assets/icon/kit.png',
            title: 'On Demand Services ',
            items: ['Injection', 'Physiotherapy', 'Bathing', 'Vaccination', 'many more'],
        },
    ];

    const data4 = [
        {
            icon: '/assets/icon/report.png',
            title: 'Dietary and Lifestyle Counseling',
        },
        {
            icon: '/assets/icon/report.png',
            title: 'Educational Workshops and Resources',
        },
        {
            icon: '/assets/icon/report.png',
            title: 'Tele-Consultations with Specialists',
        },
        {
            icon: '/assets/icon/report.png',
            title: 'Personalized Health Checkups',
        },
    ];

    const services = [
        {
            iconSrc: '/assets/icon/mage_heart_health_fill.png',
            altText: 'Health Check Up',
            label: 'Health Check Up',
            onClickHandler: () => SetData(data1)
        },
        {
            iconSrc: '/assets/icon/ri_speak_fill.png',
            altText: 'Consultation',
            label: 'Consultation',
            onClickHandler: () => SetData(data2)
        },
        {
            iconSrc: '/assets/icon/mage_heart_health_fill.png',
            altText: 'HomeCare Service',
            label: 'HomeCare Service',
            onClickHandler: () => SetData(data3)
        },
        {
            iconSrc: '/assets/icon/mage_heart_health_fill.png',
            altText: 'Wellness Program',
            label: 'Wellness Program',
            onClickHandler: () => SetData(data4)
        }
    ];
    

    const [data, SetData] = useState(data1);

    return (
        <>
            <Landing
                green="Making" 
                premium="Friendly &" 
                green2="Approachable" 
                cyan="Care" 
                detail="We aim to integrate health diagnostics, tele-consultation, and wellness programs to
                        improve lives by making healthcare more connected, convenient, and personalized."
                home="false"
                imageURL="/assets/front/shield2.png"
            />

            <div className="service-controller">
                <div className="our-service-container">
                    <div className="service-inside">
                        <h2 className="service-header">Our Services</h2>
                        <h4 className="suervice-sub-heading">
                            Healthcare Reimagined: Real-Time, Personalized, Connected
                        </h4>
                        <p className="service-para">
                            Bridge Healthcare provides premium healthcare with real-time diagnostics, tele-consultations,
                            and wellness programs for residential complexes and IT Park, offering accessible and affordable healthcare solutions.
                        </p>
                    </div>
                    <img className="machine-logo" src='/assets/services/machine.png' alt="Machine" />
                </div >

                <div className="service-controller-buttons">
            <h2 className="service-heading">Overview</h2>
            {services.map((service, index) => (
                <ServiceButton
                    key={index}
                    iconSrc={service.iconSrc}
                    altText={service.altText}
                    label={service.label}
                    onClickHandler={service.onClickHandler}
                />
            ))}
        </div>
            </div>

            <TileSlider data={data} />

            <PartnerSection/>
            <Achievement />
            <Faq />
        </>
    );
}

const ServiceButton = ({ iconSrc, altText, label, onClickHandler }) => {
    return (
        <button className="service-button" onClick={onClickHandler}>
            <img src={iconSrc} alt={altText} />
            <span>{label}</span>
        </button>
    );
};

export default HomeServices;
