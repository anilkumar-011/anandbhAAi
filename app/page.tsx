"use client";
import React from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

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
              src="/123.png"
              alt="N Gen Decorations Logo"
              fill
              className="object-contain bg-white"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-4">
          Our Core Services
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-14 rounded-full"></div>
        <div className="space-y-12 max-w-7xl mx-auto">
          {[
            {
              title: "Waterproofing",
              desc: "We provide high-performance, multi-layer waterproofing solutions designed to protect critical areas such as terraces, basements, and bathrooms from hydrostatic pressure and seepage. Utilizing advanced polyurethane coatings and crystalline admixtures, our systems create an impermeable barrier that prevents structural degradation and mold growth, ensuring the long-term integrity of your property.",
              image: "./waterproofing.jpg"
            },
            {
              title: "Painting",
              desc: "Our premium painting services utilize eco-friendly mineral and silicate-based coatings that prioritize both aesthetics and environmental health. Unlike standard acrylics, these paints facilitate high vapor permeability, allowing walls to 'breathe' and prevent moisture buildup. The result is a UV-resistant, non-toxic finish that offers exceptional longevity and vibrant color retention.",
              image: "./painting.jpg"
            },
            {
              title: "Aluminum Partition",
              desc: "We design and install high-grade aluminum partitioning systems that offer a smart, sleek solution for space optimization. Engineered with precision-extruded frames and modular panels, these dividers provide superior acoustic insulation and structural stability while maintaining a modern aesthetic. Our partitions allow for seamless integration into layouts to enhance privacy without sacrificing natural light.",
              image: "./partition.jpg"
            },
            {
              title: "Wood Polish",
              desc: "Our premium wood care and restoration services employ a meticulous multi-step process to enhance and preserve the natural beauty of doors, furniture, and interior woodwork. Using high-quality polyurethane (PU) or melamine finishes, we provide a protective layer resistant to scratches and moisture, penetrating deep into the grain to prevent warping and ensuring a sophisticated, long-lasting luster.",
              image: "./wood-polish.jpeg"
            },
            {
              title: "Civil Works",
              desc: "We execute comprehensive civil engineering and construction services ranging from foundational structural reinforcement to high-end aesthetic finishing. Our team manages every phase—including masonry, plastering, and structural repairs—adhering to strict safety codes. By combining quality raw materials with skilled craftsmanship, we ensure that every build is structurally sound, functional, and visually flawless.",
              image: "./civil-works.jpeg"
            },
            {
              title: "Moisture detection test",
              desc: "We provide advanced wall scanning services using the D-TECT 200 C to accurately detect both live and non-live electrical cables, metal objects, plastic pipes, wooden studs, and hidden cavities within walls, floors, and ceilings. This non-destructive scanning ensures safe drilling, cutting, and construction activities by preventing accidental damage to concealed utilities and structural elements, thereby enhancing work efficiency, safety, and precision.",
              image: "./moisturetest.jpg"
            }
          ].map((service, idx) => (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-10 items-center p-8 rounded-3xl border-2 border-blue-100 bg-white shadow-md hover:shadow-2xl transition-all duration-300 ${idx % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
            >
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-lg border-4 border-blue-200 hover:border-blue-400 transition-colors duration-300">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className={`flex flex-col justify-center ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-4"></div>
                <h3 className="text-3xl font-bold text-blue-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.desc}</p>
              </div>
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-center">
          <a
            href="https://wa.me/917569334897"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white hover:bg-green-700 font-medium px-8 py-4 rounded-full text-lg sm:text-xl transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp Us
          </a>
          <a
            href="mailto:ngendecoration@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-700 text-white hover:bg-blue-800 font-medium px-8 py-4 rounded-full text-lg sm:text-xl transition-all duration-300"
          >
            <FaEnvelope className="text-xl" />
            Mail Us
          </a>
        </div>
      </section>
    </main>
  );
}
