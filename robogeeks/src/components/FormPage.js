import React from "react";
import "./FormPage.css";

const FormPage = ({ toggleScroll }) => {
  return (
    <div className="form-page">
      <div className="slogan">"Start Your Creation Journey with Us!"</div>
      <div className="steps">
        Steps
        <div className="step">1 - Select Service</div>
        <div className="step">2 - Upload Files</div>
        <div className="step">3 - Confirm and Submit</div>
        <div className="step">4 - Review and Approval</div>
      </div>
      <button
        className="load-form"
        onClick={() => {
          toggleScroll();
        }}
      >
        Upload
      </button>
    </div>
  );
};

export default FormPage;
