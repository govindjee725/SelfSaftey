import React from 'react';

const Animal = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      {/* Header Section */}
      <header className="bg-green-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Animal NGO</h1>
          <nav>
            <button className="bg-white text-green-600 px-4 py-2 rounded shadow hover:bg-green-100">Donate</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://furever.ca/wp-content/uploads/2020/12/5174b63acb599cffd68155360e9aa4fc.jpg" // Replace with an actual image link
          alt="Respect animals"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">Respect Animals</h2>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">We Are Animal NGO</h2>
        <p className="text-gray-700 text-lg text-center">
          The fancy jackets that you wear are not worth the life of those innocent beings. The
          world is their home as well; save the unsaved. Love those innocent creatures; don’t
          exploit them for fashion or convenience. Why not adopt an animal instead of
          purchasing one?
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-4">Adopt or Donate</h3>
          <p className="text-gray-700 mb-6">
            Saving one animal will not help in changing the world, but saving the animal’s world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
             <a href='/adoptanimal'> Adopt a Pet</a> 
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700">
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="container mx-auto px-4 py-8">
        <h3 className="text-xl font-bold text-center mb-4">Make a Donation</h3>
        <form className="max-w-md mx-auto bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="donation">Donation Amount</label>
            <input
              type="number"
              id="donation"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter amount"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Pay
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Animal NGO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Animal;
