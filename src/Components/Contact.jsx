import React, { useState } from "react";
import { motion } from "framer-motion";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setShowSuccessMessage(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Failed to send the message, please try again.");
    }
  };

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };
  
  return (
    <div className="border-b border-neutral-900 pb-4 sm:px-6 lg:px-8">
      <div id="contact"  className="max-w-lg mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Get In Touch
        </motion.h2>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mt-6"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="access_key"
            value="bfd11677-41cd-4c81-87c8-b30cc09a0a45"
          />
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <label htmlFor="name" className="block text-sm font-bold">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  id="name"
                  autoComplete="name"
                  className="py-2 px-4 block w-full input-placeholder shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <label htmlFor="email" className="block text-sm font-bold">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  autoComplete="email"
                  className="py-2 px-4 block input-placeholder w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </motion.div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-bold">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Messeage"
                  rows="4"
                  className="py-2 px-4 block w-full input-placeholder shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.8 }}
              className="sm:col-span-2"
            >
              <button
                type="submit"
                className="w-full flex justify-center bg-gradient-to-r from-pink-500 via-slate-900 font-bold bg-purple-800 py-2 px-4 border border-transparent text-sm rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </motion.div>
          </div>
        </form>

        {showSuccessMessage && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Success
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Your message has been sent successfully!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={handleCloseSuccessMessage}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default Contact;
