import React from 'react';
import AboutUs from './components/AboutUs';
import ContactSection from './components/ContactSection';
import GetInTouchSection from './components/GetInTouchSection';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Nav from './components/Nav';
import NavDrawer from './components/NavDrawer';
import ReviewsSection from './components/ReviewsSection';

function App() {
  return (
    <>
      <Nav />
      <NavDrawer />
      <main>
        <Hero />
        <AboutUs />
        <InfoSection />
        <ContactSection />
        <GetInTouchSection />
        <ReviewsSection />
      </main>
    </>
  );
}

export default App;
