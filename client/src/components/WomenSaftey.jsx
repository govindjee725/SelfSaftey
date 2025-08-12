import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const WomenSaftey = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-12">
      {/* Hero Section */}
      <header className="relative bg-pink-600 text-white py-20 px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Women Safety First
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Empowering women with tools, tips, and a secure network for safety.
        </motion.p>
        <motion.button
          className="bg-white text-pink-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Get Started
        </motion.button>
      </header>

      {/* Features Section */}
      <section className="py-24 px-4 ">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <a href='/helpline'>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-4">SOS Alerts</h3>
            <p>Send emergency alerts to your trusted contacts with a single tap.</p>
          </motion.div>
          </a>
          <a href='/sos'>

          
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg py-9"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-4">Real-Time Location</h3>
            <p>Share your location in real-time with family and friends.</p>
          </motion.div>

          </a>
          <a href="/enjoy">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-4">Safety Tips</h3>
            <p>Access tips for staying safe in various situations, curated by experts.</p>
          </motion.div>
          </a>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-pink-100">
        <h2 className="text-3xl font-bold text-center mb-8">Why Focus on Women Safety?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-pink-600">80%</h3>
            <p>Women face harassment in public spaces globally.</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-pink-600">70%</h3>
            <p>Feel unsafe while traveling at night.</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-pink-600">90%</h3>
            <p>Agree that tech can improve safety.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 text-center bg-pink-600 text-white">
        <h2 className="text-3xl font-bold mb-6">Report an Incident</h2>
        <p className="mb-8">
          Be a responsible Citizen
        </p>
        <p className="mb-8">
          Be a part of a growing community dedicated to women safety and empowerment.
        </p>
        <button className="bg-white text-pink-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100">
        <Link to="/report-incident">Form</Link>
        </button>
      </section>
    </div>
  )
}

export default WomenSaftey
