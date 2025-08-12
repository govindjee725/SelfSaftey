import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WomenSafteyEnjoy = () => {
  // Variants for animations
  const cardVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: 0 },
    animate: { opacity: 1, scale: 1, rotate: [0, 5, -5, 0] },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* Section Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl px-4">
        {/* Section 1 */}
        <motion.div
          className="group relative bg-white/90 text-center p-8 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <Link to="/section1">
            <div className="text-blue-500 ">
              <svg
                className="w-12 h-12 mx-auto mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h2 className="text-2xl font-bold">Section 1</h2>
              <p className="mt-2">Explore details about Section 1.</p>
            </div>
          </Link>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="group relative bg-white/90 text-center p-8 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <Link to="/section2">
            <div className="text-green-500">
              <svg
                className="w-12 h-12 mx-auto mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
              <h2 className="text-2xl font-bold">Section 2</h2>
              <p className="mt-2">Learn more about Section 2.</p>
            </div>
          </Link>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="group relative bg-white/90 text-center p-8 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <Link to="/section3">
            <div className="text-purple-500 ">
              <svg
                className="w-12 h-12 mx-auto mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6H6m6 0h6"
                />
              </svg>
              <h2 className="text-2xl font-bold">Section 3</h2>
              <p className="mt-2">Discover insights on Section 3.</p>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WomenSafteyEnjoy;
