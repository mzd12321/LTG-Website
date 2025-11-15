import React from 'react';
import LTGLogo from '../assets/LTGLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-light text-accent">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center">
            <LTGLogo className="h-8 w-auto mr-3" />
            <span className="text-lg font-semibold text-white">LearnToGive</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.tiktok.com/@learntogive_?_t=8qpzuSU9tB2&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" aria-label="TikTok">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.86-.95-6.43-2.8-1.58-1.87-2.31-4.36-1.99-6.91.33-2.65 1.83-4.93 3.96-6.41.97-.66 2.05-1.13 3.19-1.37.11-1.5.04-3.01.03-4.51.01-.13.02-.26.04-.39.08-.43.19-.86.35-1.28.16-.4.35-.79.58-1.17.22-.37.47-.72.74-1.06.12-.16.25-.31.39-.45.1-.1.2-.2.31-.29.11-.09.23-.17.34-.25.12-.08.24-.16.36-.23.19-.11.38-.21.57-.3.23-.11.47-.21.7-.3.32-.12.65-.23.98-.32.33-.1.66-.18 1-.25.12-.03.24-.05.36-.07.24-.04.48-.08.72-.11.2-.02.4-.04.6-.05.19-.01.38-.02.57-.02.19-.01.38-.01.57-.01z"/></svg>
            </a>
            <a href="https://www.youtube.com/@LearnToGiveOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" aria-label="YouTube">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://www.instagram.com/learntogive_/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" aria-label="Instagram">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zM8.413 12a3.905 3.905 0 107.81 0 3.905 3.905 0 00-7.81 0zm6.262-4.328a1.2 1.2 0 10-2.4 0 1.2 1.2 0 002.4 0z" clipRule="evenodd" /></svg>
            </a>
          </div>
          <div className="text-center md:text-right">
            <p>Contact us: <a href="mailto:learntogiveedu@gmail.com" className="hover:text-white underline">learntogiveedu@gmail.com</a></p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} LearnToGive. All Rights Reserved. A Non-Profit Initiative.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;