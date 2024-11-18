import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="servicePage">
      <div className="circle2"></div>
      <h1>Services</h1>
      <div className="services">
        <div className="service">
          <div className="img img1"></div>
          <h2>3d Printing</h2>
          <div className="description">
            Rapid Prototyping, On-Demand Manufacturing, Mass Customization
          </div>
        </div>
        <div className="service">
          <div className="img img2"></div>
          <h2>Design and Modelling</h2>
          <div className="description">
            CAD/3D Modeling Assistance, File Optimaization and Checking,
            Consultation and Design Improvement
          </div>
        </div>
        <div className="service">
          <div className="img img3"></div>
          <h2>Material Selection </h2>
          <div className="description">
            Wide Material Range, Expert Advice on Materials, Detailed Guide on
            Materials
          </div>
        </div>
        <div className="service">
          <div className="img img4"></div>
          <h2>Robotics and Automation</h2>
          <div className="description">
            Custom Robotic Component Printing, Building Robotics/Iot projects,
            Automation Consulting and Design
          </div>
        </div>
        <div className="service">
          <div className="img img5"></div>
          <h2>Educational Workshops and Training</h2>
          <div className="description">
            3d printing basics, Advanced Design Techniques, Learning resources
            for Robotics
          </div>
        </div>
        <div className="service">
          <div className="img img6"></div>
          <h2>Virtual Tools and Customer Support</h2>
          <div className="description">
            Project Management and Guidelines, Full Customer Support, Additional
            Softwares for better visualizing
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
