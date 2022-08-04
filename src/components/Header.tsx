import React from 'react'

const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="logo-container">
          <img src="/blocktic_logo.png" alt="logo" className="logo-img" />
      </div>
      <div className="menu-container">
        <ul className="menu-list">
          <li className="menu-items">Create Event</li>
          <li className="menu-items">My Created Events</li>
          <li className="menu-items">All Events</li>
        </ul>
      </div>
    </div>
  )
}

export default Header