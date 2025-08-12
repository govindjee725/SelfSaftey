import React from 'react'

const NewsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-700">Latest Updates</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800">Animal Welfare Act Update</h3>
            <p className="text-gray-600 mt-2">An update on new legislation affecting animal welfare efforts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800">Local Shelters in Need</h3>
            <p className="text-gray-600 mt-2">Support local shelters that provide care to animals in need.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800">Wildlife Conservation Initiatives</h3>
            <p className="text-gray-600 mt-2">Learn about global efforts to preserve endangered species.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
