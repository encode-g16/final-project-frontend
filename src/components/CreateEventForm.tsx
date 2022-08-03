import React from 'react'

export default function CreateEventForm() {
    return (
        <div className="w-1/2 h-1/2 border border-gray-300 rounded-md shadow-md mx-auto">
            <p className="font-bold text-xl text-center py-3 px-1">Create Your Event</p>
            <hr />
            <div className="block">
                <label htmlFor="event-name" className="p-2">Event Name</label>
                <input type="text" id="event-name" name="event-name" placeholder="Eth Hackathon 2022" className="w-[50%] rounded border border-gray-300"/>
            </div>
        </div>

    )
}
