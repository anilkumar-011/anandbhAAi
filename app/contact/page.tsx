import React from "react";

const ContactPage = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Contact Header */}
            <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-6 text-center">
                <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    Reach out to N Gen Decorations for expert guidance on waterproofing and decoration solutions. We’re here to help you protect and beautify your spaces.
                </p>
            </section>

            {/* Contact Details */}
            <section className="py-16 px-6 max-w-4xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                        <ul className="text-gray-700 space-y-3">
                            <li><span className="font-semibold">Chairman:</span> Laxman Rao Vanukuri</li>
                            <li><span className="font-semibold">Phone:</span> 96400 15243 / 75693 34897</li>
                            <li><span className="font-semibold">Email:</span> <a href="mailto:accounts@ngendecorations.com" className="text-blue-700 underline">accounts@ngendecorations.com</a></li>
                            <li><span className="font-semibold">Gmail:</span> <a href="mailto:ngendecoration@gmail.com" className="text-blue-700 underline">ngendecoration@gmail.com</a></li>
                            <li><span className="font-semibold">Website:</span> <a href="https://ngendecorations.com" className="text-blue-700 underline">ngendecorations.com</a></li>
                            <li><span className="font-semibold">Address:</span> Plot No. East 33, House No. 5-4-829, Bhulaxmi Nagar Rd, Kamala Nagar, Vanasthalipuram, Hyderabad, Telangana, 500070</li>
                        </ul>
                    </div>


                </div>
            </section>

            {/* Map Placeholder (optional) */}
            <section className="px-6 pb-16 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                    <p className="text-gray-500">[Google Map Embed Here]</p>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
