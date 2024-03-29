import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlight from './components/Highlight';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

function App() {
  return (
    <div className="App" style={{ height:"1500px", background: "cornflowerblue"}}>
      <Header />
      <Featured />
      <VenueInfo />
      <Highlight />
      <Pricing />
      <Location />
      <Footer />
    </div>
  );
}

export default App;