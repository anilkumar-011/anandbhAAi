"use client";
import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-200 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 border-b border-blue-700 pb-10">
        {/* Logo + Company Info */}
        <div>
          <div className="flex items-center justify-center border-2 border-white rounded-3xl bg-white m-auto p-2 mb-4">
            <img
              src="./211.png"
              alt="N Gen Decorations Logo"
              className="h-10 w-auto"
            />
            {/* <h3 className="text-2xl font-bold text-white">N Gen Decorations</h3> */}
          </div>
          <p className="flex items-start gap-2 text-sm">
            <FaMapMarkerAlt className="mt-1" />
            Plot No. East 33, House No. 5-4-829, Bhulaxmi Nagar Rd, Kamala Nagar,
            Vanasthalipuram, Hyderabad, Telangana - 500070
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <p className="flex items-center gap-2 text-sm"><FaPhoneAlt /> 96400 15243 / 75693 34897</p>
          <p className="flex items-center gap-2 mt-2 text-sm">
            <FaEnvelope />
            <a href="mailto:accounts@ngendecorations.com" className="hover:text-white underline">
              accounts@ngendecorations.com
            </a>
          </p>
          <p className="flex items-center gap-2 mt-1 text-sm">
            <FaEnvelope />
            <a href="mailto:ngendecoration@gmail.com" className="hover:text-white underline">
              ngendecoration@gmail.com
            </a>
          </p>
        </div>

        {/* Website & Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <p className="flex items-center gap-2 text-sm">
            <FaGlobe />
            <a href="https://ngendecorations.com" className="hover:text-white underline">
              ngendecorations.com
            </a>
          </p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-2 text-sm">
              <FaFacebook />
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FaInstagram />
              <a href="https://www.instagram.com/n_gen_decorations?igsh=cmljbHg5bTJ2eGVl" className="text-gray-400 hover:text-white">Instagram</a>
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FaYoutube />
              <a href="#" className="text-gray-400 hover:text-white">YouTube</a>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8 text-sm">
        &copy; {new Date().getFullYear()} N Gen Decorations. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
