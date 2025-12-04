import React from 'react';

const DonatePage: React.FC = () => {
  return (
    <div className="bg-navy py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/donate/600/700" 
              alt="Smiling student who received a scholarship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-lato">
              Your Donation Creates Opportunity
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Every donation, no matter the size, has a profound impact. Your contribution directly funds the essentials that keep a child in school—covering fees, providing a uniform they can wear with pride, and supplying the books and stationery they need to learn and grow.
            </p>
            <p className="mt-4 text-xl text-gray-300">
              You are not just giving money; you are giving a future.
            </p>

            <div className="mt-10">
              {/* Replace with your GoFundMe/PayPal link */}
              <a
                href="https://www.justgiving.com/crowdfunding/learn-to-give"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full lg:w-auto bg-accent text-navy font-bold py-4 px-12 rounded-full hover:bg-white transition-colors duration-300 text-xl shadow-lg"
              >
                Donate Securely Now
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-3 font-lato">Our Promise of Transparency</h2>
              <p className="text-gray-300 mb-4">
                We are committed to showing you exactly how your generosity is put to work. Our public donation report details every contribution and how it's used to support students.
              </p>
              <a
                href="https://www.justgiving.com/crowdfunding/learn-to-give"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent hover:text-white transition-colors"
              >
                View our Transparency Report &rarr;
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
