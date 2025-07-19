import React from "react";

const gallerySections = [
  {
    title: "Waterproofing Projects",
    description:
      "Explore how we’ve protected buildings using our advanced waterproofing solutions across terraces, basements, bathrooms, and more.",
    images: [
      "/gallery/waterproofing1.jpg",
      "/gallery/waterproofing2.jpg",
      "/gallery/waterproofing3.jpg",
    ],
  },
  {
    title: "Painting & Finishes",
    description:
      "Our mineral-based paints transform walls with vibrant, long-lasting finishes that are eco-friendly and visually stunning.",
    images: [
      "/gallery/painting1.jpg",
      "/gallery/painting2.jpg",
      "/gallery/painting3.jpg",
    ],
  },
  {
    title: "Civil & Interior Works",
    description:
      "From structural touch-ups to premium wood polish and partitions, see how we enhance interiors with craftsmanship and care.",
    images: [
      "/gallery/interior1.jpg",
      "/gallery/interior2.jpg",
      "/gallery/interior3.jpg",
    ],
  },
];

const GalleryPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Project Gallery</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Browse our curated portfolio of completed projects, showcasing the depth and quality of our waterproofing, painting, and civil work expertise.
        </p>
      </section>

      {gallerySections.map((section, idx) => (
        <section
          key={idx}
          className="py-16 px-6 max-w-6xl mx-auto border-b border-gray-200"
        >
          <h2 className="text-3xl font-semibold mb-2 text-blue-800">
            {section.title}
          </h2>
          <p className="mb-8 text-gray-600 max-w-3xl">{section.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {section.images.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <img
                  src={src}
                  alt={`${section.title} ${i + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default GalleryPage;
