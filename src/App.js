import React from 'react';
import { toast } from 'react-toastify';
import AboutUs from './components/AboutUs';
import ContactSection from './components/ContactSection';
import GetInTouchSection from './components/GetInTouchSection';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Nav from './components/Nav';
import NavDrawer from './components/NavDrawer';
import AnnouncementSection from './components/AnnouncementSection';
// import ReviewsSection from './components/ReviewsSection';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

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
        <AnnouncementSection />
        {/* <ReviewsSection /> */}
      </main>
    </>
  );
}

export default App;
