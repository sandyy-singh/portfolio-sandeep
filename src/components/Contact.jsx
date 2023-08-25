import React, { useState } from "react";
import "./Contact.scss";
import contact from "../assets/contact.png";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebase";

const firestore = getFirestore(app);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(collection(firestore, "Users-msg"), formData)
    .then((result) => {
      console.log(result);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    })
    .then((err)=>{
      console.log(err);
    })

    // You can add your logic here to handle form submission
  };
  return (
    <div className="bg-img">
      <div className="bg-main">
        <div className="part-first">
          <h1>Contact us</h1>
          <img src={contact} alt="" />
        </div>

        <div className="contact-form">
          <h3>Send us your Valuable Messages</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
