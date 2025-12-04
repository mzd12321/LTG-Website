import React from 'react';

const BookLessonPage: React.FC = () => {
  return (
    <div className="bg-navy py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-lato">Book Your Tutoring Session</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-accent">
            Take the first step towards achieving your academic goals while helping another student achieve theirs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-navy-light rounded-lg shadow-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-4">How to Book:</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-300 text-lg mb-8">
            <li>Fill out the form below with your details, the subject you need help with, and your general availability.</li>
            <li>We will review your request and match you with a qualified tutor within 48 hours.</li>
            <li>Your tutor will contact you directly via email to schedule your first online session via Zoom.</li>
            <li>Enjoy your personalized tutoring session knowing you're making a difference!</li>
          </ol>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Booking Form</h3>
            <p className="text-center text-gray-400 mb-4">
              Our booking form is hosted on Google Forms for simplicity and security. Please click the button below to open it in a new tab.
            </p>
            {/* 
              This is a placeholder. You would replace the '#' with your actual Google Form link.
              For a more integrated experience, you can use the 'embed' code from Google Forms 
              and place it here inside an iframe.
            */}
            <div className="text-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScmEU8mzEDRsSIJ4Wk-cUGqWqPjOYRL3ax-KU0CPn3Y7skacQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-navy font-bold py-3 px-10 rounded-full hover:bg-white transition-colors duration-300 text-lg shadow-lg"
                >
                  Open Booking Form
                </a>
            </div>
            
             {/* Example of an embedded iframe (you would get this from Google Forms) */}
            {/* <iframe 
              src="YOUR_GOOGLE_FORM_EMBED_LINK_HERE" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              className="mt-6 rounded-md"
            >
              Loading…
            </iframe> */}
          </div>
          
          <div className="mt-8 text-center text-accent">
            <p className="font-bold">Tutoring Rate: £10 / hour</p>
            <p>100% of all proceeds are donated.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookLessonPage;
