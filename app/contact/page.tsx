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

            {/* Google Map */}
            <section className="px-6 pb-16 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
                <div className="w-full rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.713560056594!2d78.5810966!3d17.3293642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1674ef7f363%3A0xb9924457fc8fdeb7!2sN%20Gen%20Decorations!5e0!3m2!1sen!2sin!4v1768747601909!5m2!1sen!2sin"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
