import React from 'react';

const subjects = [
  'Chemistry', 'Economics', 'English', 'Computer Science', 'Mathematics', 'Physics',
  'SAT Prep', 'IB Subjects', 'GCSE Subjects', 'A-Level Subjects'
];

const TutoringPage: React.FC = () => {
  return (
    <div className="bg-navy py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-lato">Our Tutoring Services</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-accent">
            High-quality, personalized academic support that makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* How It Works Section */}
          <div className="lg:col-span-2 bg-navy-light p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6 font-lato">How It Works</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-accent text-navy flex items-center justify-center text-xl font-bold">1</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Book a Session</h3>
                  <p className="mt-1 text-gray-300">Fill out our booking form with your subject, level, and preferred times. We'll match you with one of our expert tutors.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-accent text-navy flex items-center justify-center text-xl font-bold">2</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Connect & Learn</h3>
                  <p className="mt-1 text-gray-300">Sessions are held online via Zoom, allowing for flexible scheduling across time zones. All you need is an internet connection.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-accent text-navy flex items-center justify-center text-xl font-bold">3</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Make an Impact</h3>
                  <p className="mt-1 text-gray-300">Your £10/hour payment is processed, and 100% of the proceeds are sent directly to fund scholarships in Thailand.</p>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScmEU8mzEDRsSIJ4Wk-cUGqWqPjOYRL3ax-KU0CPn3Y7skacQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-navy font-bold py-3 px-8 rounded-full hover:bg-white transition-colors duration-300 text-lg shadow-lg"
              >
                Get Started Now
              </a>
            </div>
          </div>

          {/* Subjects and Pricing Section */}
          <div className="bg-navy-light p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4 font-lato">Subjects Offered</h2>
            <ul className="space-y-2 mb-8">
              {subjects.map(subject => (
                <li key={subject} className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 text-accent mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {subject}
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-700 pt-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-lato">Simple Pricing</h3>
                <p className="text-5xl font-extrabold text-white">£10<span className="text-2xl text-accent">/hour</span></p>
                <p className="mt-2 text-gray-300">No hidden fees. Just effective tutoring that funds a great cause.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutoringPage;
