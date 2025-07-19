import React from "react";

const ServicesPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Innovative Interior & Exterior Solutions</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Since 2004, N Gen Decorations has been Hyderabad’s trusted name in sustainable waterproofing and mineral paint solutions.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="mb-4">
          N Gen Decorations provides reliable waterproofing and painting solutions with over 20 years of industry expertise. Our trained professionals deliver modern techniques and certified solutions for rooftops, basements, water tanks, and more.
        </p>
        <p className="mb-4">
          We use advanced silicate mineral paints and nanotech waterproofing chemicals to ensure longevity, breathability, and sustainability. Our eco-conscious approach and high-quality materials protect structures and promote a healthy environment.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            "Waterproofing",
            "Painting",
            "Aluminum Partition",
            "Wood Polish",
            "Civil Works"
          ].map(service => (
            <div key={service} className="bg-white shadow-lg p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-sm text-gray-600">
                {service === "Waterproofing" && "Terrace, bathroom, exterior and interior walls, swimming pools, water tanks, basements, podiums, and wet areas like kitchens and balconies."}
                {service === "Painting" && "Silicate mineral paints for ultra-durable, eco-friendly finishes. Available for interior and exterior surfaces."}
                {service === "Aluminum Partition" && "Custom-built partitions for office and residential needs."}
                {service === "Wood Polish" && "Premium wood finishing services for furniture and fittings."}
                {service === "Civil Works" && "All types of minor and major construction and structural repair works."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certification & Sustainability */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Certified Excellence & Sustainability</h2>
        <p className="mb-4">
          Certified by Zydex, Ardha Polymers, Alfa Polymers, Eager Power Solutions, and the Government of Telangana. We proudly use eco-friendly products and silicate mineral paints for a greener future.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6 max-w-xl mx-auto">
          For consultations or service inquiries, contact us today. Let’s make your spaces last longer and look better.
        </p>
        <div className="text-lg font-medium">
          <p>Email: <a href="mailto:accounts@ngendecorations.com" className="text-blue-700 underline">accounts@ngendecorations.com</a></p>
          <p>Phone: <span className="font-semibold">96400 15243 / 75693 34897</span></p>
          <p>Location: Bhulaxmi Nagar Rd, Vanasthalipuram, Hyderabad, Telangana</p>
          <p>Website: <a href="https://ngendecorations.com" className="text-blue-700 underline">ngendecorations.com</a></p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
