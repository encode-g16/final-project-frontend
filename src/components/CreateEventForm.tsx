import React from 'react'
import { useForm } from 'react-hook-form';

export default function CreateEventForm() {
    return (
        <div className="w-1/2 h-1/2 border border-gray-300  bg-white rounded-md shadow-md mx-auto">
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
                
                <label htmlFor="event-description" className="p-2 pt-3 pb-0 block md:col-span-1">Description</label>
                <textarea id="event-description" name="event-description" placeholder="Ethereum Hackathon with up to £20,000 in prizes!" className="block mx-2 md:col-span-3 rounded border border-gray-300"/>     
            
                <label htmlFor="event-price" className="p-2 pt-3 pb-0 block md:col-span-1">Event Price (ETH)</label>
                <input type="text" id="event-price" name="event-price" placeholder="0.02" min="0" step=".01" className="block mx-2 md:col-span-1 rounded border border-gray-300"/>
                
                <label htmlFor="event-organiser" className="p-2 pt-3 pb-0 block md:col-span-1">Organiser</label>
                <input type="text" id="event-organiser" name="event-organiser" placeholder="Vitalik Buterin" className="block mx-2 md:col-span-1 rounded border border-gray-300"/>

                <label htmlFor="event-image" className="p-2 pt-3 pb-0 block md:col-span-1">Event Image</label> 
                <input type="file" className="block text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4 file:my-2
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                    md:col-span-3
                "/>
   
                <input type="checkbox" id="event-checkbox" name="event-checkbox" value="1" className="block ml-2 mt-4 md:mx-auto md:col-span-1 rounded border border-gray-500"/>
                <label htmlFor="checkbox" className="mx-2 mt-2 md:col-span-3">I agree to pay gas fees in Eth for the creation of the event and that it is non-refundable</label>

                <button type="submit" className="block p-2 mx-auto md:m-2 md:col-span-4  bg-blue-600 text-center text-lg rounded-md text-white font-semibold hover:bg-blue-700">Create Event</button>
            </div>
        </div>

    )
}
