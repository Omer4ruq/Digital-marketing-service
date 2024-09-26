import React from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7f672c4c-1a3f-42da-9a2f-f6e678d534a9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
      <div className="w-full h-[550px] bg-stone-600">
        <h1 className="text-5xl font-bold text-center pt-28 pl-10 pr-10 text-white">
          We Love Connecting With People And Exchanging Ideas! Call Us Today!
        </h1>
        <p className="text-base font-medium text-gray-400 p-20 pt-14 text-center">
          Whether you are a small startup or a growing business, our customized
          digital marketing services can help fast-track your online visibility,
          increase brand awareness, and generate sales.
        </p>
      </div>
      <div className="contact pt-12">
        <div className="contact-col">
          <h3>Send Us a message</h3>
          <p>
            Feel free to reach out through contact from or find our contact
            information below. Your question and queires are important to us.
          </p>
          <ul>
            <li>Contact@bros.com</li>
            <li>+88012323432</li>
            <li>
              77 WASHA, GEC <br />
              MA villa, Chittagong, Bangladesh
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile Number"
              required
            />
            <label>Write Your messages here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your messgage"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit Now
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
