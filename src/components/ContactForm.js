import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:info@trjassociates.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    // Optionally, reset form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div
      className="relative flex flex-col md:flex-row justify-center items-center bg-gray-900 text-white h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://ansainteriors.com/wp-content/uploads/2022/09/office-interior-design.jpg')` }}
    >
      <div className="absolute top-12 left-4 md:left-24 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Ask Us<br />Anything.<br />Anytime.
        </h1>
      </div>

      <div className="bg-white text-gray-800 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-lg mt-12 md:mt-0">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-4 text-center md:text-left">
          We will be happy to help, please feel free to connect with us.
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border border-gray-300 p-2 rounded w-full"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border border-gray-300 p-2 rounded w-full"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="border border-gray-300 p-2 rounded w-full"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border border-gray-300 p-2 rounded w-full"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="border border-gray-300 p-2 rounded w-full h-24 resize-none"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-600 text-white font-semibold py-2 px-6 rounded hover:bg-yellow-700 transition duration-300 w-full sm:w-auto"
          >
            Send &rarr;
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
