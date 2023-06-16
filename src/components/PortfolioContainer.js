import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import Footer from './Pages/Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
          }
          if (currentPage === 'About') {
            return <About />;
          }
          if (currentPage === 'Contact') {
            return <Contact />;
          }
          if (currentPage === 'Projects') {
            return <Projects />
          }
          if (currentPage === 'Resume') {
            return <Resume />
          }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
          <Footer />
        </div>
      );
}