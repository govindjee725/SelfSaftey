import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-gray-100 text-gray-800 py-16">
            {/* Hero Section */}
            <header className="bg-blue-700 text-white py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-50 -z-10"></div>
                <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg animate-fade-in">Your Safety, Our Priority!</h1>
                <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-delay">
                    Stay secure with real-time alerts, live location sharing, and expert safety tips. 
                </p>
                <button
                    className="bg-green-500 text-white px-8 py-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 font-bold"
                    onClick={() => navigate('/safety-tips')}
                >
                    Get Started
                </button>
            </header>

            {/* Features Section */}
            <section className="py-16 px-12 bg-white ">
                <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                    <a href="/womensafety" className="p-6 bg-green-50 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                        <div className="mb-4">
                            <img src="/img/women.jpg" alt="Women Safety" className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-blue-600" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Women Safety</h3>
                        <p className="text-gray-600">
                            Quickly alert your emergency contacts with real-time location updates.
                        </p>
                    </a>
<a href='/animal'>
                    <div className="p-6 bg-green-50 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                      <div className="text-yellow-600 text-6xl mb-4">🐾</div>
    <h3 className="text-2xl font-semibold mb-3">Animal Help</h3>
    <p className="text-gray-600">
        pets adaption and donate money.
    </p>
</div>
</a>


                    
                </div>
            </section>

            {/* Advanced Features Section */}
            <section className="py-16 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
                <h2 className="text-4xl font-bold text-center mb-12">Advanced Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                        <a href='/cyber'>
                        <div className="text-blue-600 text-6xl mb-4">🔒</div>
                        <h3 className="text-2xl font-semibold mb-3">Data Encryption</h3>
                        <p className="text-gray-600">
                            All your data is protected with end-to-end encryption for maximum security.
                        </p>
                        </a>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                        <div className="text-blue-600 text-6xl mb-4">⚙️</div>
                        <h3 className="text-2xl font-semibold mb-3">Custom Alerts</h3>
                        <p className="text-gray-600">
                            Set up personalized alerts based on your preferences and needs.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                        <div className="text-blue-600 text-6xl mb-4">📡</div>
                        <h3 className="text-2xl font-semibold mb-3">Offline Mode</h3>
                        <p className="text-gray-600">
                            Use essential features even when you’re offline or in areas with low connectivity.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                        <div className="text-blue-600 text-6xl mb-4">📲</div>
                        <h3 className="text-2xl font-semibold mb-3">Multi-Device Sync</h3>
                        <p className="text-gray-600">
                            Seamlessly sync your safety preferences across all your devices.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-6 bg-gradient-to-r from-gray-100 to-blue-50">
                <h2 className="text-4xl font-bold text-center mb-12">What Users Say</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="p-6 bg-white rounded-lg shadow-md relative">
                        <p className="text-gray-600 mb-6 italic">
                            "This app saved me during an emergency. It's a must-have for everyone!"
                        </p>
                        <h3 className="text-lg font-semibold text-blue-600">- Sarah, 25</h3>
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 rounded-l-lg"></div>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md relative">
                        <p className="text-gray-600 mb-6 italic">
                            "I feel so much safer knowing my family can track my location easily."
                        </p>
                        <h3 className="text-lg font-semibold text-blue-600">- Raj, 30</h3>
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 rounded-l-lg"></div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="py-16 px-6 bg-blue-700 text-white text-center">
                <h2 className="text-4xl font-bold mb-6">Take Control of Your Safety</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of users who trust us to keep them secure and informed.
                </p>
                <button
                    className="bg-green-500 px-8 py-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 font-bold"
                    onClick={() => navigate('/join')}
                >
                    Join Now
                </button>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-6 text-center">
                <p>© 2024 Self Safety App. All Rights Reserved.</p>
                <p className="mt-2">Made with ❤️ by Your Team</p>
            </footer>
        </div>
    );
};

export default HomePage;
