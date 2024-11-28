"use client" 
import React, {FormEvent, ChangeEvent, useState } from 'react';
import emailjs from 'emailjs-com';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement >):void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event:FormEvent<HTMLFormElement>):Promise<void> => {
    event.preventDefault();

    try {
      const serviceId = 'service_ira9xmp';
      const templateId = 'template_7onyujy';
    
      const userId = 'IQcjW6dtUk3ryySQy';

      await emailjs.send(serviceId, templateId, formData, userId);

      console.log('Email sent successfully');
      setIsSuccess(true);
      setError(null);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setError(null);
    }
  };

  return (
    <div className="py-4 px-8 mx-auto max-w-screen-md">
      {isSuccess && (
        <div className="bg-blue-100 text-blue-700 p-4 mb-4">
          <p>Form submitted successfully! We'll get back to you soon.</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-700 p-4 mb-4">
          <p>{error}</p>
        </div>
      )}

      <div className="mb-4 text-lg text-black sm:text-xl text-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row mb-4">
            <div className="w-1/2 pr-2 relative">
              <label
                htmlFor="firstName"
                className="block mb-2 text-left text-base font-medium text-gray-900"
              >
                First Name
              </label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faUser}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg pl-10 pr-2.5 py-2 w-full"
                  placeholder="Enter First Name"
                  required
                />
              </div>
            </div>
            <div className="w-1/2 pl-2 relative">
              <label
                htmlFor="lastName"
                className="block mb-2 text-left text-base font-medium text-gray-900"
              >
                Last Name
              </label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faUser}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg pl-10 pr-2.5 py-2 w-full"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="email"
              className="block mb-2 text-left text-base font-medium text-gray-900"
            >
              Your Email
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg pl-10 pr-2.5 py-2 w-full"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="message"
              className="block mb-2 text-left text-base font-medium text-gray-900"
            >
              Your Message
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faComment}
                className="absolute left-2 top-4 text-gray-500"
              />
              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="block p-2.5 pl-8 w-full text-base text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                placeholder="Query/Suggestion..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 p-2 float-right text-white rounded-lg border-blue-500 bg-blue-500 hover:bg-black py-2 px-4"
          >
            <span className="mr-2 text-lg">Send message</span>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
