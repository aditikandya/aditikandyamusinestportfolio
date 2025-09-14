import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Lessons', path: '/lessons' },
    { name: 'Meet Teacher', path: '/teacher' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  const courses = [
    { name: 'Piano Fundamentals', path: '/courses' },
    { name: 'Bollywood Piano', path: '/lessons' },
    { name: 'Indian Classical Vocal', path: '/lessons' },
    { name: 'ABRSM Preparation', path: '/workshops' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#11202D] text-[#FFF4F4]">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#565449] to-[#D8CFBC] rounded-lg flex items-center justify-center">
                  <Music className="w-6 h-6 text-[#FFF4F4]" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#565449] to-[#D8CFBC] bg-clip-text text-transparent">
                  MusiNest
                </span>
              </Link>
              <p className="text-[#D8CFBC] mb-6 leading-relaxed">
                Welcome to my musical nest — let's create something beautiful together! A warm, encouraging space where every student feels seen, heard, and supported in their unique musical journey.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-[#565449] rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#565449] hover:to-[#D8CFBC] transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-[#D8CFBC] group-hover:text-[#FFF4F4] transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-[#D8CFBC] mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-[#D8CFBC] hover:text-[#FFF4F4] transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[#565449] to-[#D8CFBC] mr-0 group-hover:mr-2 transition-all duration-200"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
                                 <li>
                   <Link
                     to="/workshops"
                     className="text-[#D8CFBC] hover:text-[#FFF4F4] transition-colors duration-200 flex items-center group"
                   >
                     <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[#565449] to-[#D8CFBC] mr-0 group-hover:mr-2 transition-all duration-200"></span>
                     Workshops
                   </Link>
                 </li>
                 <li>
                   <Link
                     to="/lessons"
                     className="text-[#D8CFBC] hover:text-[#FFF4F4] transition-colors duration-200 flex items-center group"
                   >
                     <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[#565449] to-[#D8CFBC] mr-0 group-hover:mr-2 transition-all duration-200"></span>
                     Lessons
                   </Link>
                 </li>
              </ul>
            </div>

            {/* Popular Courses */}
            <div>
              <h4 className="text-lg font-semibold text-[#D8CFBC] mb-6">Popular Courses</h4>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <li key={index}>
                    <Link
                      to={course.path}
                      className="text-[#D8CFBC] hover:text-[#FFF4F4] transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[#565449] to-[#D8CFBC] mr-0 group-hover:mr-2 transition-all duration-200"></span>
                      {course.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/courses"
                    className="text-[#565449] hover:text-[#D8CFBC] transition-colors duration-200 font-medium"
                  >
                    View All Courses →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-[#D8CFBC] mb-6">Get in Touch</h4>
              <div className="space-y-4">
                                 <div className="flex items-start space-x-3">
                   <MapPin className="w-5 h-5 text-[#565449] mt-1 flex-shrink-0" />
                   <div>
                     <p className="text-[#D8CFBC]">MusiNest Studio</p>
                     <p className="text-[#D8CFBC]">Music Education Center</p>
                     <p className="text-[#D8CFBC]">Chennai, India</p>
                   </div>
                 </div>
                                 <div className="flex items-center space-x-3">
                   <Phone className="w-5 h-5 text-[#565449] flex-shrink-0" />
                   <a href="tel:+919876543210" className="text-[#D8CFBC] hover:text-[#FFF4F4] transition-colors duration-200">
                     +91 98765 43210
                   </a>
                 </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#565449] flex-shrink-0" />
                  <a href="mailto:info@musinest.com" className="text-[#D8CFBC] hover:text-[#FFF4F4] transition-colors duration-200">
                    info@musinest.com
                  </a>
                </div>
              </div>
              
                             <div className="mt-6 p-4 bg-[#565449] rounded-xl">
                 <h5 className="text-[#D8CFBC] font-semibold mb-2">Teaching Hours</h5>
                 <p className="text-[#FFF4F4] text-sm">Mon-Fri: 9AM-9PM</p>
                 <p className="text-[#FFF4F4] text-sm">Sat-Sun: 10AM-6PM</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#565449] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-[#D8CFBC] text-sm">
                © 2025 MusiNest by Aditi. All rights reserved.
              </p>
                             <div className="flex items-center space-x-1 text-[#D8CFBC] text-sm">
                 <span>Made with</span>
                 <Heart className="w-4 h-4 text-red-500 fill-current" />
                 <span>for music students</span>
               </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-[#D8CFBC] hover:text-[#FFF4F4] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-[#D8CFBC] hover:text-[#FFF4F4] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-[#D8CFBC] hover:text-[#FFF4F4] transition-colors duration-200">
                Cookie Policy
              </a>
              <a href="#" className="text-[#D8CFBC] hover:text-[#FFF4F4] transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;