import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Contactpage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    order: location.state?.order || [],
  });

  const { name, email, message, order } = formData;

  useEffect(() => {
    if (location.state?.order) {
      setFormData(prevState => ({
        ...prevState,
        order: location.state.order
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://foodifyy-backend-g4fx.onrender.com/api/v1/contact', formData);
      alert('Your order was delivered successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
        order: [],
      });
    } catch (error) {
      console.error('Message failed', error);
      alert("Error submitting message");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: '',
      order: location.state?.order || [],
    });
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <>
      <div className="sign-in">
        <form onSubmit={handleSubmit}>
          <div className="content">
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={handleChange} required />
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={handleChange} required />
            <label>Message:</label>
            <textarea name="message" value={message} onChange={handleChange} required />
            <label>Order:</label>
            <ul>
              {order.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
          </div>
          <button className='btn1' type="button" onClick={handleCancel}>Cancel</button>
          <button className='btn1' type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
