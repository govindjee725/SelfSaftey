import React from 'react';

const AdoptPetPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen ">
      {/* Header Section */}
      <header className="bg-teal-600 text-white py-0 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Adopt a Pet</h1>
          <nav className="flex space-x-4">
            <button className="bg-white text-teal-600 px-4 py-2 rounded shadow hover:bg-teal-100">Home</button>
            <button className="bg-white text-teal-600 px-4 py-2 rounded shadow hover:bg-teal-100">Contact Us</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://furever.ca/wp-content/uploads/2020/12/86e06a9ba40c1f0bf8aeb4b5a7001a20.jpg" // Replace with actual image link
          alt="Adopt a Pet"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold">Bring Home Happiness!</h2>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-4">Why Adopt a Pet?</h2>
        <p className="text-gray-700 text-lg mb-6">
          Adopting abandoned and rescued pets provides them a second chance at life. It also fosters
          compassion and responsibility. Browse through our cherished companions waiting for a loving home.
        </p>
      </section>

      {/* Featured Pets Section */}
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-teal-600 text-center mb-6">Meet Our Lovely Pets</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[{ name: "Dodo", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfVOVAo_yKHie7M3V9AfuWiGILQQfJ75f0w&s", breed: "Mixed", age: "2 years" },
              { name: "Tiger", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqiKalyYh8W8AwrQbROTn4BzQBlHIFcWMAx-WnyoSnxLf39R8mLrHqYub7GZtcAUJAoqfPwINSHBPu-bn42tE_eQ", breed: "Labrador", age: "3 years" },
              { name: "Bella", img: "https://qph.cf2.quoracdn.net/main-qimg-e5fdd08c773e108aa38ebe5af6a4dceb.webp", breed: "Beagle", age: "1 year" },
              { name: "Rocky", img: "https://media.istockphoto.com/id/155447373/photo/incoming.jpg?s=612x612&w=0&k=20&c=VbGYq8NSmSRdau62OumRO0HIcBKtr6MX-zYqIxFCu7U=", breed: "German Shepherd", age: "4 years" }]
              .map((pet, index) => (
                <div key={index} className="bg-white p-4 rounded shadow hover:shadow-lg">
                  <img
                    src={pet.img}
                    alt={pet.name}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h4 className="text-lg font-bold text-teal-600">{pet.name}</h4>
                  <p className="text-gray-600">Breed: {pet.breed}</p>
                  <p className="text-gray-600">Age: {pet.age}</p>
                  <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 w-full">
                    Adopt {pet.name}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Adoption Process Section */}
      <section className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-teal-600 text-center mb-6">How to Adopt</h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-4">
          <li>Visit our adoption center or browse available pets online.</li>
          <li>Choose the pet that’s right for you and your family.</li>
          <li>Complete the adoption application and provide the necessary information.</li>
          <li>Meet the pet and ensure compatibility.</li>
          <li>Take your new furry friend home and give them the love they deserve!</li>
        </ol>
      </section>

      {/* Call to Action Section */}
      <section className="bg-teal-600 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Adopt?</h3>
          <p className="mb-6">Click below to browse more pets or contact us for further information.</p>
          <button className="bg-white text-teal-600 px-4 py-2 rounded shadow hover:bg-teal-100">
            Browse All Pets
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Adopt a Pet. All rights reserved.</p>
          <p className="text-sm mt-2">JP Nagar 8th Phase, Bangalore | 1800 102 8032</p>
        </div>
      </footer>
    </div>
  );
};

export default AdoptPetPage;
