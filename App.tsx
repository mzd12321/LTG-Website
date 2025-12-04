import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TutoringPage from './pages/TutoringPage';
import MeetTheTeamPage from './pages/MeetTheTeamPage';
import BookLessonPage from './pages/BookLessonPage';
import DonatePage from './pages/DonatePage';
import Chatbot from './components/chatbot/Chatbot';

const App: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-navy">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tutoring" element={<TutoringPage />} />
          <Route path="/team" element={<MeetTheTeamPage />} />
          <Route path="/book" element={<BookLessonPage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;