import React from "react";

const Contact_page= () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6 mt-2">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Contact <span className="text-red-600">INDIAN-Mart</span>
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-600 max-w-3xl text-center mb-8">
        Have questions, feedback, or need support? We’d love to hear from you.
        At INDIAN-Mart, your satisfaction is our top priority. Get in touch with
        us through the options below.
      </p>

      {/* Contact Info */}
      <div className="bg-white shadow-md rounded-2xl p-6 max-w-4xl w-full mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Contact Details</h2>
        <ul className="text-gray-600 space-y-2">
          <li>
            📍 <span className="font-semibold">Office Address:</span> New Delhi, India
          </li>
          <li>
            📧 <span className="font-semibold">Email:</span> support@indianmart.com
          </li>
          <li>
            📞 <span className="font-semibold">Phone:</span> +91 XXXXXXXX39
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-md rounded-2xl p-6 max-w-4xl w-full mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Send Us a Message</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Closing Note */}
      <p className="text-gray-700 max-w-3xl text-center italic">
        We usually reply within 24–48 hours. Thank you for reaching out to
        INDIAN-Mart!
      </p>
    </div>
  );
};

export default Contact_page;
