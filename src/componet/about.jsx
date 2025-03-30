import React from 'react';
import Ser from '../assets/Servi.jpg';
import  Work  from '../assets/pro.webp';

const AboutUs = () => {
  return (
    <div className="min-h-screen -mb-13 -mt-15 z-[100] bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto bg-gray-800 shadow-lg rounded-lg p-8">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-4">About Us</h1>
          <p className="text-xl text-white">
            We are an eCommerce platform dedicated to providing you with the best shopping experience.
          </p>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-500 mb-4">Our Mission</h2>
          <p className="text-lg text-white">
            At <span className="font-bold text-blue-600">Ai-shopping</span>, our mission is to empower you with cutting-edge
            technology that simplifies your shopping experience and brings you the products you love at great prices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="flex flex-col justify-center items-center">
            <img
              src={Work}
              alt="E-commerce Process"
              className="rounded-lg h-70 shadow-xl mb-6"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">How We Work</h3>
            <p className="text-lg text-white">
              We use AI-driven technology to bring personalized shopping recommendations, so you can discover products
              that match your needs and style with ease.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={Ser}
              alt="Customer Service"
              className="rounded-lg h-70 shadow-xl mb-6"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">Customer Satisfaction</h3>
            <p className="text-lg text-white">
              Our customers are our top priority. We provide seamless customer service, fast shipping, and easy returns
              to ensure you're completely satisfied with your purchases.
            </p>
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Values</h2>
          <ul className="list-inside list-disc text-lg text-white">
            <li>Integrity: We uphold the highest standards of ethics and transparency in our business.</li>
            <li>Innovation: We are continuously improving and adapting to the latest trends in eCommerce and AI technology.</li>
            <li>Customer First: Your satisfaction is at the core of everything we do.</li>
            <li>Commitment: We are dedicated to delivering top-quality products and services to you.</li>
          </ul>
        </div>
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Ready to Shop?</h2>
          <p className="text-lg text-white mb-8">
            Discover the best deals and start your shopping journey with us today.
          </p>
          <a
            href="/shop"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-xl font-semibold hover:bg-blue-700 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
