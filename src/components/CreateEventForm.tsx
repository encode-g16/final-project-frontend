import React from 'react'

export default function CreateEventForm() {
    return (
        <div className="w-1/2 h-1/2 border border-gray-300 rounded-md shadow-md mx-auto">
            <p className="font-bold text-xl text-center py-3 px-1">Create Your Event</p>
            <hr />
            <div className="md:grid md:grid-cols-4 md:gap-4">
                <label htmlFor="event-name" className="p-2 pt-3 block md:col-span-1">Event Name</label>
                <input type="text" id="event-name" name="event-name" placeholder="Eth Hackathon 2022" className="block mx-2 mt-2 md:col-span-3 rounded border border-gray-300"/>
                
                <label htmlFor="event-date" className="p-2 pt-3 pb-0 block md:col-span-1">Event Date</label>
                <input type="text" id="event-date" name="event-date" placeholder="mm/dd/yy" className="block mx-2 md:col-span-1 rounded border border-gray-300"/>
                
                <label htmlFor="event-time" className="p-2 pt-3 pb-0 block md:col-span-1">Event Time</label>
                <input type="text" id="event-time" name="event-time" placeholder="19:00" className="block mx-2 md:col-span-1 rounded border border-gray-300"/>
        
                <label htmlFor="event-location" className="p-2 pt-3 pb-0 block md:col-span-1">Event Location</label>
                <input type="text" id="event-location" name="event-location" placeholder="London" className="block mx-2 md:col-span-3 rounded border border-gray-300"/>     
            </div>
        </div>

    )
}
