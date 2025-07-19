"use client"
import React from 'react';

export default function About() {
  return (
    <>

      <main className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-24 px-6 md:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              20+ Years of Waterproofing Excellence
            </h1>
            <p className="text-lg md:text-xl">
              Pioneering sustainable painting and water-resistant solutions with cutting-edge technologies.
            </p>
          </div>
        </section>

        {/* Company Snapshot Section */}
        <section className="py-20 px-6 md:px-20 bg-white grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Rooted in Innovation</h2>
            <p className="text-gray-700 text-lg mb-4">
              Since 2004, N Gen Decorations has been crafting protective and aesthetic upgrades for buildings of all scales — from modern homes to large-scale commercial properties.
            </p>
            <p className="text-gray-700 text-lg">
              Based in Hyderabad, our expert team integrates eco-friendly technologies, certified materials, and thoughtful design into every project.
            </p>
          </div>
          <img
            src="/images/team.jpg"
            alt="Team at work"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </section>

        {/* Key Highlights Section */}
        <section className="py-20 px-6 md:px-20 bg-gray-100">
          <h2 className="text-3xl font-semibold text-center mb-12">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Certified Expertise</h3>
              <p className="text-gray-600 text-sm">
                Backed by certifications from Zydex, Ardha Polymers, Alfa Polymers, and more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Sustainable Materials</h3>
              <p className="text-gray-600 text-sm">
                We use silicate mineral paints and low-VOC waterproofing tech for safer spaces.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Customized Solutions</h3>
              <p className="text-gray-600 text-sm">
                From terraces to basements, every project is tailored to your specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 md:px-20 bg-white grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/sustainability.jpg"
            alt="Sustainability in practice"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Driven by Purpose</h2>
            <p className="text-gray-700 text-lg">
              We believe buildings should be beautiful, durable, and environmentally sound. Our commitment to sustainability drives our every step — from selecting eco-safe materials to reducing water-related damage across communities.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-blue-800 text-white text-center py-16 px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Build Something That Lasts</h2>
          <p className="mb-6 text-lg">
            Partner with N Gen Decorations and protect your property the smart way.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Get a Free Consultation
          </a>
        </section>
      </main>
    </>
  );
}
