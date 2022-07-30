import React from 'react';
import Header from '../components/Header';

export default function Event() {

  return (
    <div className="event-details-container">
        <div className='event-picture-container'>
            <img className="event-picture" src="/hackathon.jpg" alt="hackathon"/>
        </div>
        <div className='event-details-container-child1'>
            <div className='event-card'>
                <div className="event-card-title">
                    <h1 className='event-details-title'>Eth Hackathon 2022</h1>
                </div>
                <hr className='event-card-hr'/>
                <p>Event Name: Hackathon 2022</p>
                <p>Description: Come and build the future of DeFi on Ethereum. Prize money of £20,000!</p>
                <p>Organiser: Eth Global</p>
                <p>Location: 212 Hackney Road, London, E1 2AP, UK</p>
                <p>Date: 01/01/20</p>
                <p>Time: 19:00</p>
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
                    <span className='ticket-price-label'>Price: 0.05 ETH each</span>
                </div>
                <div className='event-buttons-button-container'>
                    <button className='buy-button' type='submit' name="buy-button">Buy</button>
                </div>
            </div>
        </div>

    </div>
  )
}