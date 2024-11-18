import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import FormPage from "./components/FormPage";
import Form from "./Pages/Form";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./index.css";
import FeedbackForm from "./components/Feedback";

function App() {
  function toggleScroll() {
    let bodytag = document.querySelector("body");
    let form = document.querySelector(".formpage");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (form.style.getPropertyValue("display") === "flex") {
      bodytag.style.overflowY = "scroll";
      form.style.display = "none";
    } else {
      bodytag.style.overflowY = "hidden";
      form.style.display = "flex";
    }
  }
  return (
    <div className="App">
      <Header toggleScroll={toggleScroll} />
      <Home />
      <FormPage toggleScroll={toggleScroll} />
      <Form toggleScroll={toggleScroll} />
      <Services />
      <FeedbackForm />
      <Footer />
    </div>
  );
}

export default App;
