import React from 'react'
import { Link } from 'react-router-dom'
import ConnectButton from './ConnectButton'

const Header = () => {
  return (
    <div className="flex justify-between mx-auto gap-5 h-[200px]">
      <div className="block w-100 xl:w-[20rem] h-[6rem] my-10 ml-8 xl:ml-12">
          <Link to={"/"}><img src="/blocktic_logo.png" alt="logo" className="h-full w-full" /></Link>
      </div>
      <div className="block mr-[10%] md:ml-20 my-auto">
        <ul className="grid grid-cols-8 gap-5 xl:gap-14 xl:text-2xl font-bold text-center">
          <li className="cursor-pointer menu-items col-span-2"><Link to={"/create-event"}>Create Event</Link></li>
          <li className="cursor-pointer menu-items col-span-2"><Link to={"/my-created-events"}>My Created Events</Link>  </li>
          <li className="cursor-pointer menu-items col-span-2"><Link to={"/all-events"}>All Events</Link></li>
          <li className="cursor-pointer col-span-2"><ConnectButton/></li>
        
        </ul>
      </div>
    </div>
  )
}

export default Header