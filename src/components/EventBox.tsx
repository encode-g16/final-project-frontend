import React from 'react'

const EventBox = () => {
  return (
    <div className="event-container-outer">
      <div className="event-container-img">
        <img src="beach-party.jpg" alt="" className="event-img"/>
      </div>
          <h3 className="event-name">
            2022 Summer Beach Party
          </h3>
          <p className="event-datetime">Fri, Aug 16, 11.59pm</p>
          <p className="event-location">Barcelona</p>
          <p className="event-tickets">Sold out</p>
          <p className="event-organiser">Club La Federico</p>
    </div>
  )
}

export default EventBox