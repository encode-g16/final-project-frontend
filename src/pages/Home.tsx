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
      <div className="mx-auto px-[5%] pt-8">
          <div>
            <h2 className="my-8 text-2xl ml-8 font-bold">Check Out Popular Events</h2>
          </div>
          <div>
            <EventBox />
          </div>
      </div>
    </div>  
  )
}

export default Home