import { useState } from "react";
import ContactLogo from "../Assets/contactUs.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e, "e");
    setIsSubmit(false);
  };
  return (
    <div className="contact-container">
      {isSubmit ? (
        <div>
          <img src={ContactLogo} />
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required></input>
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="details-submission">
          <h1>Thank you for submitting details we will get back to you.</h1>
          <Link to="/">
            <button className="button-style-contact">Back to home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Contact;
