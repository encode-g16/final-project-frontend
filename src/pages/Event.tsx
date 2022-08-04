import React from 'react';  
import { useParams } from "react-router-dom";
import Header from '../components/Header';

  //temporary data until we have the API to call
const event = {
    title: "Eth Hackathon",
    description: "Come and build the future of DeFi on Ethereum. Prize money of £20,000!",
    organiser: "Eth Global",
    location: "212 Hackney Road, London, E1 2AP, UK",
    date: "01/01/20",
    time: "19:00",
    imageUrl: "/hackathon.jpg",
    price: 0.05
}

async function fetchEvent(eventId: string) {
    const ApiUrl = "www.api.com/events/" + eventId;
    const response = await fetch(ApiUrl);
    return response;
}

export default function Event() {

    //uncomment this line to use the API
    //const event = fetchEvent(useParams().id);

  return (
    <div>
        <header>
            <Header/>
        </header>
        <div className="block mx-auto md:grid md:grid-cols-4 md:gap-10 md:max-w-screen-lg">
            <img src={event.imageUrl} alt="event banner" 
            className="block w-full mx-2 md:col-span-2 rounded-md border border-gray-300 shadow"/>

            <div className='mx-2 border border-gray-300 rounded-md shadow-lg block md:col-span-2'>
                <h1 className='w-full p-2 text-center text-lg font-semibold'>{event.title}</h1>
                <hr/>
                <p className="p-2">Event Name: {event.title}</p>
                <p className="p-2">Description: {event.description}</p>
                <p className="p-2">Organiser: {event.organiser}</p>
                <p className="p-2">Location: {event.location}</p>
                <p className="p-2">Date: {event.date}</p>
                <p className="p-2">Time: {event.time}</p>
            </div>

        </div> 
    </div>
  )
}


  /*
    <div className="event-details-container">
        <div className='event-picture-container'>
            <img className="event-picture" src={event.imageUrl} alt="{event.title}"/>
        </div>
        <div className='event-details-container-child1'>
            <div className='event-card'>
                <div className="event-card-title">
                    <h1 className='event-details-title'>{event.title}</h1>
                </div>
                <hr className='event-card-hr'/>
                <p>Event Name: {event.title}</p>
                <p>Description: {event.description}</p>
                <p>Organiser: {event.organiser}</p>
                <p>Location: {event.location}</p>
                <p>Date: {event.date}</p>
                <p>Time: {event.time}</p>
            </div>
            <div className='event-buttons-container'>
                <div className='event-buttons-buy-container'>
                    <label className='buy-tickets-label' htmlFor="number-of-tickets">Buy Ticket</label>
                    <select className="ticket-select" name="number-of-tickets" id="number-of-tickets">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <span className='ticket-price-label'>Price: {event.price} ETH each</span>
                </div>
                <div className='event-buttons-button-container'>
                    <button className='buy-button' type='submit' name="buy-button">Buy</button>
                </div>
            </div>
        </div>

    </div>
  )
}

*/