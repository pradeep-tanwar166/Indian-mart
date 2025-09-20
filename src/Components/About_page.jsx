import React from 'react'
import EastIcon from '@mui/icons-material/East';
function About_page() {
  return (
<div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6 mt-2">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        About <span className="text-red-600">INDIAN-Mart</span>
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-600 max-w-3xl text-center mb-8">
        INDIAN-Mart is a modern e-commerce platform designed to bring authentic
        Indian products to your doorstep. Our platform connects trusted sellers
        with buyers across the country, offering a simple, secure, and
        user-friendly shopping experience.
      </p>

      {/* Mission */}
      <div className="bg-white shadow-md rounded-2xl p-6 max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
        <p className="text-gray-600">
          At INDIAN-Mart, our mission is to make online shopping in India
          reliable and affordable while celebrating the diversity of Indian
          products and culture.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white shadow-md rounded-2xl p-6 max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Wide range of Indian products</li>
          <li>Safe & secure checkout system</li>
          <li>Easy cart management</li>
          <li>Fast and reliable delivery</li>
          <li>Mobile-friendly shopping experience</li>
        </ul>
      </div>

      {/* Creator Info */}
      <div className="bg-white shadow-md rounded-2xl p-6 max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Who We Are</h2>
        <p className="text-gray-600">
          INDIAN-Mart is created by <span className="font-semibold">Pradeep Tanwar</span>, 
          a Computer Science student passionate about building innovative web
          applications. It is developed using modern technologies like{" "}
          <span className="font-semibold">React, Node.js, Express, and MongoDB</span> 
          to ensure performance, security, and scalability.
        </p>
      </div>

      {/* Closing Note */}
      <p className="text-gray-700 max-w-3xl text-center italic">
        We are constantly working to make INDIAN-Mart better every day. Thank you
        for being part of our journey. Your trust motivates us to keep improving
        and delivering the best online shopping experience.
      </p>
    </div>
  )
}

export default About_page