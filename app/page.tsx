"use client";
import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-24 px-6 md:px-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
          Innovative Interior & Exterior Solutions
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto animate-fade-in delay-200">
          Since 2004, N Gen Decorations has delivered sustainable, certified waterproofing and mineral paint technologies tailored for long-lasting property protection.
        </p>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-20 py-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-blue-800 mb-6">
              About N Gen Decorations
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              With 20+ years of experience, we specialize in eco-friendly waterproofing, mineral painting, and custom interior works. Our team ensures every residential and commercial project stands the test of time.
            </p>
            <p className="text-gray-600 text-base">
              Trusted by leading architects and property developers across Hyderabad.
            </p>
          </div>
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/logo.png"
              alt="N Gen Decorations Logo"
              fill
              className="object-contain bg-white"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-14">
          Our Core Services
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Waterproofing", desc: "Protect terraces, basements, and bathrooms with cutting-edge waterproofing systems." },
            { title: "Painting", desc: "Eco-friendly mineral and silicate paints that breathe and last." },
            { title: "Aluminum Partition", desc: "Smart, sleek dividers to optimize space with modern design." },
            { title: "Wood Polish", desc: "Premium wood care for doors, furniture, and interiors." },
            { title: "Civil Works", desc: "From structural reinforcement to aesthetic finishing touches." },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Book Your Free Consultation
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
          Discover the perfect protection and finish for your space. Let’s build something beautiful and durable together.
        </p>
        <a
          href="mailto:ngendecoration@gmail.com"
          className="inline-block bg-blue-700 text-white hover:bg-blue-800 font-medium px-8 py-4 rounded-full text-lg sm:text-xl transition-all duration-300"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
