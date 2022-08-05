import React from 'react'

const EventBox = () => {
  return (
    <div className="event-container-outer w-[15%] flex flex-col rounded-xl overflow-hidden border-solid border-gray-300 border-2 cursor-pointer shadow-gray-800">
      <div className="w-full">
        <img src="beach-party.jpg" alt="" className="w-full object-cover"/>
      </div>
          <h3 className="text-2xl font-medium leading-8 py-4 px-6">
            2022 Summer Beach Party
          </h3>
          <p className="px-6 text-xl font-semibold pb-3 text-indigo-600">Fri, Aug 16, 11.59pm</p>
          <p className=" px-6 text-xl pb-3 text-slate-500">Barcelona</p>
          <p className="px-6 text-xl pb-3 text-red-600">Sold out</p>
          <p className="px-6 text-xl pb-5 text-slate-500">Club La Federico</p>
    </div>
  )
}

export default EventBox