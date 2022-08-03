import React from 'react';
import Header from '../components/Header';
import EventBox from '../components/EventBox';
import Hero from '../components/Hero';
import "../css/App.css"

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div>
        <Hero />
      </div>
      <div className="events-container">
          <div>
            <h2 className="upcoming-text">Check Out Popular Events</h2>
          </div>
            <EventBox />
          </div>
      </div>
      
  )
}

export default Home