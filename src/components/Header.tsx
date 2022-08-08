import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between mx-auto gap-5 h-[200px]">
      <div className="w-100 xl:w-[20rem] h-[6rem] my-10 ml-8 xl:ml-12">
          <Link to={"/"}><img src="/blocktic_logo.png" alt="logo" className="h-full w-full" /></Link>
      </div>
      <div className="mr-[10%] my-auto">
        <ul className="flex gap-5 xl:gap-14 text-lg xl:text-2xl font-bold">
          <li className="cursor-pointer menu-items"><Link to={"/create-event"}>Create Event</Link></li>
          <li className="cursor-pointer menu-items"><Link to={"/my-created-events"}>My Created Events</Link>  </li>
          <li className="cursor-pointer menu-items"><Link to={"/all-events"}>All Events</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header