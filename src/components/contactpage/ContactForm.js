// ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS file for animations

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [shakeFields, setShakeFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty and set shaking animation
    const emptyFields = Object.keys(formData).filter((key) => !formData[key]);
    if (emptyFields.length > 0) {
      const shakeFieldsObj = {};
      emptyFields.forEach((field) => {
        shakeFieldsObj[field] = true;
      });
      setShakeFields(shakeFieldsObj);
      return; // Prevent form submission if any field is empty
    }

    // Reset shaking animation
    setShakeFields({});

    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className={`mb-4 ${shakeFields.name ? 'shake-animation' : ''}`}>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        <div className={`mb-4 ${shakeFields.email ? 'shake-animation' : ''}`}>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        <div className={`mb-4 ${shakeFields.message ? 'shake-animation' : ''}`}>
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border rounded-md"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
