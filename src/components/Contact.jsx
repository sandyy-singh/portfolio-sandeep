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
    message: "",
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

      
      })
      .then(()=>{
        setFormData(formData.name="")
        setFormData(formData.email="")
        setFormData(formData.message="")
      })
      .then((err) => {
        console.log(err);
      });

    // You can add your logic here to handle form submission
  };
  return (
    <div className="Contact-com ">
    <div className="container mt-5 p-4 ">
      <div className="row d-flex align-items-center justify-content-center mt-5">
        <div className="col-sm-10 mt-5">
          <div className="row">
            <div className="col-sm-5 d-flex align-items-center justify-content-center">
              <div className="row d-flex align-items-center justify-content-center">
                <h1 className="col-8 text-center Contact-me ">Contact us</h1>
                <img className="col-8" src={contact} alt="" />
              </div>
            </div>

            <div className="col-sm-5 mt-4 contact-form">
              <h3>Send Valuabl Messages</h3>
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
      </div>
    </div>
    </div>
  );
};

export default Contact;
