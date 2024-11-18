import React, { useState } from "react";
import "./Feedback.css";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("All fields are required!");
      return;
    }

    const feedbackData = { name, email, message };

    try {
      const response = await fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        setSuccessMessage("Thank you for your feedback!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Error sending feedback. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending feedback. Please try again later.");
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Feedback"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
