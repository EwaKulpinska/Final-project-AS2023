import React, { useState } from "react";
import Modal from "./Modal";

function Newsletter() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setValidEmail(emailRegex.test(inputEmail) || inputEmail === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail) {
      console.log("Form Submitted Successfully!");
      setIsModalOpen(true);
    } else {
      console.log("Error");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEmail("");
  };

  return isModalOpen ? (
    <Modal name={email || "Subscriber"} onCloseModal={handleCloseModal} />
  ) : (
    <form className="form">
      <h4 className="header">Join our Newsletter!</h4>
      <p className="newsletter-text">
        We'll send you an email when new recipes get added to our base. No spam
        mail - we promise!
      </p>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          E-mail
        </label>
        {!validEmail && email !== "" && (
          <p className="warning">Valid email required!</p>
        )}
        <input
          onChange={handleEmailChange}
          className={email !== "" && !validEmail ? "input-error" : "form-input"}
          type="email"
          value={email}
          name="email"
          id="email"
          placeholder="your@email.com"
        />
      </div>
      <button
        className="form-btn"
        type="button"
        onClick={handleSubmit}
        disabled={!validEmail || email === ""}>
        Submit
      </button>
    </form>
  );
}

export default Newsletter;
