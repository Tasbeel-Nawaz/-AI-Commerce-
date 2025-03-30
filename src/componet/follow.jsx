import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const FollowUs = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-center py-10">
      <div className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-2xl w-full">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center text-gray-300 mb-6">Stay Connected with Us</h2>
        
        <p className="text-lg text-gray-300 text-center mb-6">
          Follow us on social media to get the latest updates on new products, exclusive offers, and promotions. 
          Join our community and stay up-to-date with all the exciting things happening at our store!
        </p>
        
        <div className="flex justify-center space-x-6">
          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-blue-600 p-4 rounded-full text-white transform transition-all duration-300 hover:scale-110 hover:bg-blue-700">
              <FaFacebookF size={24} />
            </div>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-blue-400 p-4 rounded-full text-white transform transition-all duration-300 hover:scale-110 hover:bg-blue-500">
              <FaTwitter size={24} />
            </div>
          </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-pink-600 p-4 rounded-full text-white transform transition-all duration-300 hover:scale-110 hover:bg-pink-700">
              <FaInstagram size={24} />
            </div>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-blue-700 p-4 rounded-full text-white transform transition-all duration-300 hover:scale-110 hover:bg-blue-800">
              <FaLinkedinIn size={24} />
            </div>
          </a>
        
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-red-600 p-4 rounded-full text-white transform transition-all duration-300 hover:scale-110 hover:bg-red-700">
              <FaYoutube size={24} />
            </div>
          </a>
        </div>

   
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-lg">
            Want to stay even more connected? <strong>Sign up for our newsletter</strong> and be the first to know about our latest offers and updates!
          </p>
          <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-400 transform transition-all duration-300 hover:scale-105">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
