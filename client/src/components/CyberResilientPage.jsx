import React, { useState } from "react";

const CyberResilientPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleWatchVideoClick = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <div className="relative bg-black text-white">
        <img
          src="/img/cyber.png" // Replace with the actual image URL
          alt="Cyber Resilient Data Protection"
          className="w-full h-96 object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Cyber Resilient Data Protection</h1>
        </div>
      </div>

      {/* Section 1 */}
      <div className="text-center py-10 px-4">
        <h2 className="text-2xl font-bold mb-4">
          Protecting your business starts with protecting your data from ransomware
        </h2>
        <p className="mb-6 text-gray-600">
          PowerProtect Cyber Recovery protects and isolates critical data from ransomware and other sophisticated threats.
          Machine learning identifies suspicious activity and allows you to recover known good data and resume normal business
          operations with confidence.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleWatchVideoClick}
          >
            Watch Video
          </button>
          <button className="bg-gray-100 text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
            Launch Demo
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-2xl">
            <button
              className="absolute top-3 right-3 text-black text-lg font-bold"
              onClick={closeVideo}
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/N8xEgSe5RwE?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Section 2 */}
      <div className="bg-gray-100 py-10 px-4">
        <h2 className="text-center text-2xl font-bold mb-4">
          Make Your Business Cyber Resilient
        </h2>
        <p className="text-center mb-6 text-gray-600">
          75% Reduction in Downtime According to Forrester Consulting Highlights
        </p>
        <p className="text-center mb-6 text-gray-600 max-w-4xl mx-auto">
          Responding to cyberattacks by recovering critical data and systems in a timely fashion allows for normal business operations
          to resume. Explore "The Total Economic Impact™ of Dell PowerProtect Cyber Recovery, August 2023," based on a commissioned
          study conducted by Forrester Consulting on behalf of Dell Technologies.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Read Case Study
          </button>
          <button className="bg-gray-100 text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
            View Infographic
          </button>
          <button className="bg-gray-100 text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
            See Your Estimated ROI
          </button>
        </div>
      </div>
      {/* Section 3 */}
      <div className="text-center py-10 px-4">
        <h2 className="text-2xl font-bold mb-4">
          Cyber and ransomware attacks are the enemy of today's data-driven business
        </h2>
        <p className="mb-6 text-gray-600">
          Cyber Recovery helps to protect your data through:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            
            <h3 className="font-bold mt-2 text-blue-600">Immutability</h3>
            <p className="text-gray-600 text-center mt-2">
              Preserve data integrity and confidentiality with layers of security and controls with PowerProtect Data Domain.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            
            <h3 className="font-bold mt-2 text-blue-600">Isolation</h3>
            <p className="text-gray-600 text-center mt-2">
              Automatically separates critical data from attack surfaces with physical or logical data isolation within a vault.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            
            <h3 className="font-bold mt-2 text-blue-600">Intelligence</h3>
            <p className="text-gray-600 text-center mt-2">
              AI-based machine learning and analysis help assure recoverability of known good data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberResilientPage;
