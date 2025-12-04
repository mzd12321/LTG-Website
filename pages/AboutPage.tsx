import React from 'react';
import { Link } from 'react-router-dom';
import ImpactStats from '../components/ImpactStats';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-navy py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-lato">Our Mission</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-accent">
            To provide affordable, high-quality online tutoring worldwide, with 100% of proceeds funding scholarships for underprivileged students in rural Thailand.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 font-lato">Our Story & Impact</h2>
            <p className="text-gray-300 mb-4 text-lg">
              LearnToGive was founded in 2023 by a group of passionate high school students who believed education could be a powerful force for change. We saw a dual need: accessible academic support for students globally and critical funding for children in rural Thailand at risk of dropping out of school due to poverty.
            </p>
            <h2 className="text-3xl font-bold text-white mb-4 font-lato">Why Thailand?</h2>
            <p className="text-gray-300 text-lg mb-4">
              Our founder, Xander, spent his childhood in one of the most rural and underdeveloped regions of Thailand, where many children attend school without proper uniforms, shoes, or basic stationery. In Thailand, a sturdy pair of school shoes can cost under £5, and essential stationery is even less.
            </p>
            <p className="text-gray-300 text-lg">
              This is where purchasing power parity comes in. What may seem like a small contribution in the UK can provide a child in rural Thailand with the essentials they need to stay in school, continue learning, and pursue a brighter future.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img src="/assets/donations.png" alt="Donations making an impact for students in Thailand" className="w-full h-full object-cover"/>
          </div>
        </div>

        {/* Impact Stats */}
        <ImpactStats />
        
        {/* Transparency Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-white mb-4 font-lato">Our Commitment to Transparency</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-6">
            We believe you should know exactly where your money goes. Every donation and its use is tracked to ensure full transparency and accountability.
          </p>
          <a
            href="https://www.justgiving.com/crowdfunding/learn-to-give"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-navy font-bold py-3 px-8 rounded-full hover:bg-white transition-colors duration-300 text-lg shadow-lg"
          >
            View Donation Report
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default AboutPage;
