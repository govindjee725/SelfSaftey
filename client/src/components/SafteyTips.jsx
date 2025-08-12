import React from 'react'
import { motion } from 'framer-motion';
const SafteyTips = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="video/v1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for Text Visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 py-20">
        {/* Sliding Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1 }}
        >
          Safety is a Priority
        </motion.h1>

        {/* Sliding Subtext */}
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Stay protected with real-time alerts and support at your fingertips.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
            Learn More
          </button>
          <button className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-900">
            Get Started
          </button>
        </motion.div>
      </div>

      {/* Sliding Images */}
      <div className="absolute bottom-10 w-full flex justify-center gap-6">
        <motion.img
          src="img/img1.jpg"
          alt="Safety Icon 1"
          className="w-20 h-20 rounded-full border-4 border-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        <motion.img
          src="img/img2.jpg"
          alt="Safety Icon 2"
          className="w-20 h-20 rounded-full border-4 border-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        />
        <motion.img
          src="img/img3.jpg"
          alt="Safety Icon 3"
          className="w-20 h-20 rounded-full border-4 border-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        />
      </div>
    </div>
  );
}

export default SafteyTips
