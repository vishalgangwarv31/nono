import { ArrowRight } from 'lucide-react';
import './middle.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Article from '../Article';

const Middle = () => {
  const Data = [
    {
      id: 1,
      heading: "Resident Complex",
      content:
        "The Smart Healthcare Machine is installed in common areas, such as gyms or community centers, making it easily accessible for all residents. It is operated by a trained nurse or operator who assists residents in using the machine and conducting tests. <br /> Residents benefit from regular health checkups, including vital signs monitoring and blood tests, without needing to travel to clinics. The machine provides real-time data that updates each resident's health profile, allowing for personalized care and timely teleconsultations with healthcare providers. This encourages proactive health management and helps identify potential health issues early.",
      imgSrc: '/assets/services/appart.jpg',
    },
    {
        id: 2,
        heading: "IT Park",
        content:
          "In an IT park or corporate building, the Smart Healthcare Machine can be placed in common areas, such as lobbies or break rooms. A dedicated health professional can oversee its operation and assist employees.<br /> Employees have convenient access to health checkups during their workday, promoting a culture of health and wellness in the workplace. Regular monitoring helps in early detection of health issues, reducing absenteeism and improving productivity. The integration of teleconsultations provides employees with quick access to medical advice, ensuring they can manage their health without disrupting their work commitments",
        imgSrc: '/assets/services/it_building.png',
      },
      {
        id: 3,
        heading: "Small Clinic",
        content:
          "In small clinics, the Smart Healthcare Machine complements existing healthcare services. Healthcare professionals can use it to conduct various diagnostic tests and monitor patients’ vital signs quickly and efficiently. <br /> The machine enhances the clinic's capabilities by offering advanced diagnostic features, such as ECG and digital stethoscope assessments. This allows for comprehensive patient evaluations in a single visit, streamlining workflow and improving patient outcomes. The integration of teleconsultations enables doctors to consult with specialists remotely, expanding the clinic’s healthcare network.",
        imgSrc: '/assets/services/clinic.png',
      },
      {
        id: 4,
        heading: "Pharmacy",
        content:
          "The Smart Healthcare Machine can be set up within pharmacies, providing an accessible health checkup point for customers. Pharmacists or trained staff can assist with its operation, guiding patients through tests.<br />Pharmacies can attract more customers by offering value-added services, such as health screenings and consultations. The machine’s ability to provide immediate health data allows pharmacists to offer personalized advice on medication and wellness products. This service not only boosts customer loyalty but also enhances community health awareness.",
        imgSrc: '/assets/services/pharm.png',
      },
  ];


  const servicesData = [
    {
        containerClass: 'doctor-home-container',
        imageSrc: '/assets/services/doctor.png',
        imageAlt: 'doctor png',
        title1: 'Doctor Visit',
        title2: 'Consultation',
    },
    {
        containerClass: 'doctor-home-container',
        imageSrc: '/assets/services/nurse.png',
        imageAlt: 'nurse png',
        title1: 'Nurse/',
        title2: 'Caretaker',
    },
    {
        containerClass: 'doctor-home-container2',
        imageSrc: '/assets/services/demands.png',
        imageAlt: 'on-demand services',
        title1: 'On-Demand',
        title2: 'Services',
    },
];


  const [currImage, setCurrImage] = useState(0);

  const handleDotClick = (index) => {
    setCurrImage(index); 
  };
  const handleNext = () => {
    setCurrImage((prev) => (prev < Data.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleNext();
    }, 3000); 

    return () => clearTimeout(timeout); 
  }, [currImage]);


  return (
    <div className="middle-container">
      <div className="about-machine-container">
        <img className="machine-image" src="/assets/services/machine.png" alt="Machine Image" />
        <div className="about-machine">
          <p className="about-detail">
            At Bridge Healthcare, we are transforming the healthcare landscape
            by making premium healthcare services accessible and affordable. Our
            innovative Tele-Diagnostic Machines (TDM) and Smart Healthcare
            Machines provide seamless, real-time diagnostics and
            tele-consultation services to hospitals, clinics, and residential
            complexes. <br />
            <br />
            Our mission is to empower patients with reliable, convenient
            healthcare solutions that bridge the gap between technology and
            quality medical care.
          </p>
          <button className="read-more-button">Read More</button>
        </div>
      </div>

      <Article heading="Tele-Diagnostic Services" para="Our services enable a personalized approach to healthcare by utilizing
          real-time data, allowing healthcare providers to deliver tailored
          insights and recommendations that cater to each patient's unique
          health profile. Through regular on-site health monitoring and
          teleconsultations, Bridge Healthcare promotes proactive care, ensuring
          timely interventions and effective management of chronic diseases.
          Patients enjoy a holistic and interconnected care experience, helping
          them maintain optimal health while conveniently addressing their
          specific needs. The integration of teleconsultations ensures that
          expert medical advice is always accessible, further enhancing their
          healthcare journey."
      />

      <div className="Service-container">
        <img className="service-image" src="/assets/services/service_flow.png" alt="Service Image" />
      </div>

      <div className="scope-container">
        <h1 className="service-heading">Tele-Diagnostic Scope</h1>
        <p className="scope-content">
          The Smart Healthcare Machine offers a wide-ranging scope of enhancing
          healthcare delivery across various settings. Here are key aspects of
          its scope:
        </p>
      </div>

      <ScopeSlide
        heading={Data[currImage].heading}
        content={Data[currImage].content}
        imgSrc={Data[currImage].imgSrc}
      />

      
      <div className="dot-navigation">
        {Data.map((_, index) => (
          <span
            key={index}
            className={`dot ${currImage === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>

      <div className="scope-container">
        <h1 className="service-heading">Book Home Care Services</h1>
        <p className="scope-content">
          Ask a doctor and get quick medical advice for your health queries. Our
          medical panel consists of over 3500 doctors from nearly 100
          specialties.
        </p>
      </div>

      <div className="home-box-container">
            {servicesData.map((service, index) => (
                <ServiceBox
                    key={index}
                    containerClass={service.containerClass}
                    imageSrc={service.imageSrc}
                    imageAlt={service.imageAlt}
                    title1={service.title1}
                    title2={service.title2}
                />
            ))}
        </div>

      <Link to="/book" className="book-service">
        <span className="book-service-text">Book Your Service &nbsp;</span>
        <span className="arrow-icon">
          <ArrowRight />
        </span>
      </Link>
    </div>
  );
};



// services block comp
const ServiceBox = (props) => {
  return (
      <div className={props.containerClass}>
          <img className="home-image" src={props.imageSrc} alt={props.imageAlt} />
          <h2>
              {props.title1} <br />
              {props.title2}
          </h2>
          <p className="box-pp">View More</p>
      </div>
  );
}


// places where we have most scope
const ScopeSlide = ({ heading, content, imgSrc }) => {
  const contentLines = content.split('<br />');

  return (
    <div className="scope-slide-container">
      <div className="scope-slide-info">
        <h1 className="scope-heading">{heading}</h1>
        <div className="scope-slide-content">
          {contentLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      <div>
        <img className="scope-slide-image" src={imgSrc} alt="Slide Image" />
      </div>
    </div>
  );
};

export default Middle;
