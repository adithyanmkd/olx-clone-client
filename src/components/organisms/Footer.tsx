import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  MessageCircle,
  Linkedin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f6f6f6] mt-14">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Popular Locations */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
              POPULAR LOCATIONS
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Kolkata
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Mumbai
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Chennai
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Pune
                </a>
              </li>
            </ul>
          </div>

          {/* Trending Locations */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
              TRENDING LOCATIONS
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Bhubaneshwar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Hyderabad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Chandigarh
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Nashik
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
              ABOUT US
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Tech@OLX
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* OLX */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
              OLX
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Sitemap
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Legal & Privacy information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Vulnerability Disclosure Program
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us & App Downloads */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
              FOLLOW US
            </h3>

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="#"
                className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-red-600 rounded flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-green-500 rounded flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* App Store Buttons */}
            <div className="space-y-3">
              <a href="#" className="block">
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                  <div className="text-xs">
                    <div className="text-[10px] text-gray-300">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
              <a href="#" className="block">
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                  <div className="text-xs">
                    <div className="text-[10px] text-gray-300">
                      Download on the
                    </div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Logos */}
      <div className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Company Logos */}
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">CarTrade</span>
              <span className="text-sm bg-orange-500 px-2 py-1 rounded">
                Tech
              </span>
              <span className="text-sm">GROUP</span>
            </div>

            <div className="text-2xl font-bold">olx</div>

            <div className="flex items-center space-x-1">
              <span className="text-lg font-semibold">carwale</span>
            </div>

            <div className="flex items-center space-x-1">
              <span className="text-lg font-semibold">bikewale</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">CarTrade</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold">MOBILITY</span>
              <span className="text-sm">OUTLOOK</span>
            </div>
          </div>

          {/* Bottom Links and Copyright */}
          <div className="flex flex-col lg:flex-row justify-between items-center pt-6 border-t border-blue-700">
            <div className="flex space-x-4 mb-4 lg:mb-0">
              <a
                href="#"
                className="text-sm text-blue-200 hover:text-white transition-colors"
              >
                Help
              </a>
              <span className="text-blue-200">-</span>
              <a
                href="#"
                className="text-sm text-blue-200 hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>

            <div className="text-sm text-blue-200">
              All rights reserved © 2006-2025 OLX
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
