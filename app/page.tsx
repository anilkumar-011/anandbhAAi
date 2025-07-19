"use client"
import React from 'react';
import Navbar from './components/Navbar';


export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-8 md:px-16 lg:px-32">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-800 mb-6 animate-fade-in">
          Innovative Interior & Exterior Solutions for Lasting Protection
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200">
          Established in 2004, N Gen Decorations delivers sustainable interior and exterior design
          solutions with advanced waterproofing and mineral paint technologies.
        </p>
      </section>

      {/* About Section */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">About N Gen Decorations</h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Your trusted partner in mineral painting and waterproofing solutions. With over 20 years
              of experience, our certified experts provide durable services for residential and
              commercial properties. We use eco-friendly materials and innovative techniques to
              protect your property from water damage.
            </p>
          </div>
          <div className="rounded-2xl shadow-lg overflow-hidden">
            <img src="/logo.png" alt="About N Gen Decorations" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20 px-8 md:px-16 lg:px-32">
        <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 mb-14">Our Services</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {["Waterproofing", "Painting", "Aluminum Partition", "Wood Polish", "Civil Works"].map((service) => (
            <div
              key={service}
              className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">{service}</h3>
              <p className="text-gray-600 text-base">
                High-quality service using modern techniques and durable materials.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 md:px-16 lg:px-32 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Get a Free Consultation
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
          Let us show you how we can protect your property from water damage effectively and sustainably.
        </p>
        <a
          href="mailto:ngendecoration@gmail.com"
          className="inline-block text-white bg-blue-700 hover:bg-blue-800 rounded-full px-8 py-4 text-lg sm:text-xl transition-all duration-300"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 px-6 text-sm text-gray-500">
        <p className="mb-2">&copy; 2025 N Gen Decorations. All rights reserved.</p>
        <p>Email: <a className="text-blue-600" href="mailto:ngendecoration@gmail.com">ngendecoration@gmail.com</a></p>
      </footer>
    </main>
  );
}
