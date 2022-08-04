import React from 'react'
import { useForm } from 'react-hook-form';

type FormData = {
    eventName: string;
    eventDate: string;
    time: string;
    location: string;
    description: string;
    price:number;
    organiser:string;
    file: File;
    checkbox: boolean;
}

export default function CreateEventForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit((data) => {
        console.log(JSON.stringify(data));
    })

    return (
        <div>
            <form onSubmit={onSubmit}
            className="w-1/2 h-1/2 border border-gray-300  bg-white rounded-md shadow-md mx-auto"
            >
                <p className="font-bold text-xl text-center py-3 px-1">Create Your Event</p>
                <hr />
                <div className="md:grid md:grid-cols-4 md:gap-4">
                    <label htmlFor="eventName" className="p-2 pt-3 block md:col-span-1">Event Name</label>
                    <input type="text" id="eventName" placeholder="Eth Hackathon 2022" 
                    {...register("eventName", { required: true })} 
                    className="block mx-2 mt-2 md:col-span-3 rounded border border-gray-300"/>
                    {errors.eventName?.type === 'required' && <p className="error block m-2 p-2 md:col-span-4">Event name is required</p>}
                    
                    <label htmlFor="event-date" className="p-2 pt-3 pb-0 block md:col-span-1">Event Date</label>
                    <input type="text" id="eventDate" placeholder="mm/dd/yy" 
                    {...register("eventDate" , { required: true, maxLength: 8 })}
                    className="block mx-2 md:col-span-1 rounded border border-gray-300"/>

                    <label htmlFor="event-time" className="p-2 pt-3 pb-0 block md:col-span-1">Event Time</label>
                    <input type="text" id="event-time" placeholder="19:00" 
                    {...register("time" ,{ required: true })}
                    className="block mx-2 md:col-span-1 rounded border border-gray-300"/>

                    {errors.eventDate?.type === 'required' && <p className="error block m-2 p-2 md:col-span-2">Date is required</p>}
                    {errors.eventDate?.type === 'maxLength' && <p className="error block m-2 p-2 md:col-span-2">Date must be 8 characters i.e. "01/01/20"</p>}
                    {errors.time?.type === 'required' && <p className="error block m-2 p-2 md:col-span-2">Time is required</p>}
            
                    <label htmlFor="event-location" className="p-2 pt-3 pb-0 block md:col-span-1">Event Location</label>
                    <input type="text" id="event-location" placeholder="London"
                    {...register("location",{ required: true })}
                    className="block mx-2 md:col-span-3 rounded border border-gray-300"/> 
                    {errors.location?.type === 'required' && <p className="error block m-2 p-2 md:col-span-4">Location is required</p>}    
                    
                    <label htmlFor="event-description" className="p-2 pt-3 pb-0 block md:col-span-1">Description</label>
                    <textarea id="event-description" placeholder="Ethereum Hackathon with up to £20,000 in prizes!" 
                    {...register("description",{ required: true })}
                    className="block mx-2 md:col-span-3 rounded border border-gray-300"/>
                    {errors.description?.type === 'required' && <p className="error block m-2 p-2 md:col-span-4">Description is required</p>} 
                
                    <label htmlFor="event-price" className="p-2 pt-3 pb-0 block md:col-span-1">Event Price (ETH)</label>
                    <input type="text" id="event-price" placeholder="0.02" min="0" step=".01" 
                    {...register("price",{ required: true })}
                    className="block mx-2 md:col-span-1 rounded border border-gray-300"/>
                    
                    <label htmlFor="event-organiser" className="p-2 pt-3 pb-0 block md:col-span-1">Organiser</label>
                    <input type="text" id="event-organiser" placeholder="Vitalik Buterin" 
                    {...register("organiser",{ required: true })}
                    className="block mx-2 md:col-span-1 rounded border border-gray-300"/>

                    {errors.price?.type === 'required' && <p className="error block m-2 p-2 md:col-span-2 ">Price is required</p>}
                    {errors.organiser?.type === 'required' && <p className="error block m-2 p-2 md:col-span-2">Organiser is required</p>}

                    <label htmlFor="event-image" className="p-2 pt-3 pb-0 block md:col-span-1">Event Image</label> 
                    <input type="file" {...register("file",{ required: true })}
                        className="block text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4 file:my-2
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                        md:col-span-3
                    "/>
                    {errors.file?.type === 'required' && <p className="error block m-2 p-2 md:col-span-4">Event image is required</p>}
    
                    <input type="checkbox" id="event-checkbox" value="1" 
                        {...register("checkbox",{ required: true })}
                        className="block ml-2 mt-4 md:mx-auto md:col-span-1 rounded border border-gray-500"/>
                    <label htmlFor="checkbox" className="mx-2 mt-2 md:col-span-3">I agree to pay gas fees in Eth for the creation of the event and that it is non-refundable</label>
                    {errors.checkbox?.type === 'required' && <p className="error block m-2 p-2 md:col-span-4">You must agree to the declaration</p>}

                    <button type="submit" className="block p-2 mx-auto md:m-2 md:col-span-4  bg-blue-600 text-center text-lg rounded-md text-white font-semibold hover:bg-blue-700">Create Event</button>
                </div>
            </form>
        </div>
    )
}
