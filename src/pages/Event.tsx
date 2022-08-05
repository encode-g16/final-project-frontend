import React, { useState, useEffect } from 'react';  
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import { ethers } from 'ethers';

  //temporary data until we have the API to call
const event = {
    title: "Eth Hackathon",
    description: "Come and build the future of DeFi on Ethereum. Prize money of £20,000!",
    organiser: "Eth Global",
    location: "212 Hackney Road, London, E1 2AP, UK",
    date: "01/01/20",
    time: "19:00",
    imageUrl: "/hackathon.jpg",
    price: 0.05
}

async function fetchEvent(eventId: string) {
    const ApiUrl = "www.api.com/events/" + eventId;
    const response = await fetch(ApiUrl);
    return response;
}

//const ContractAddress = '0x1240c9...'; 

export default function Event() {
    const price = event.price;

    //uncomment this line to use the API
    //const event = fetchEvent(useParams().id);

    const [selectedValue, setSelectedValue] = useState<string>("1");
    const [totalPrice, setTotalPrice] = useState<number>(price);
    //const [IsLoading, setIsLoading] = useState<boolean>(false);
    //const [success, setSuccess] = useState<boolean>(false);
    //const [errorStatus, setErrorStatus] = useState<boolean>(false);
    //const [txError, setTxError] = useState<string>('');
    
    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedValue(event.target.value);
    }

    const calcTotalPrice = (pricePerTicket: number) => {
        const total = pricePerTicket * Number(selectedValue);
        setTotalPrice(Number(total.toFixed(2)));
    }

    useEffect(() => {
        calcTotalPrice(event.price);
    });

  

    /*
    async function buyTicket() {
        try {
            setIsLoading(true);

            //register transfer event from smart contract
            mintContract.removeAllListeners();
            mintContract.on("Transfer", () => {
                setSuccess(true);
                setIsLoading(false);
            })

            //get the ticket price
            const ticketContractPrice = await mintContract.price();

            //mint the NFT
            const tx = await mintContract.mint(account, 1, apiMessage, signature, { value: ethers.utils.parseEther(ticketContractPrice) });
            setTxHash(tx.hash);
        }
        catch (error) {
            console.log(error);
            setErrorStatus(true);
            setTxError("failed to mint");
        }
    }
    */

  return (
    <div>
        <header>
            <Header/>
        </header>
        <div className="block md:w-full md:mx-auto md:grid md:grid-cols-4 md:gap-10 md:max-w-screen-lg">
      
            <img src={event.imageUrl} alt="event banner" 
            className="object-fit md:col-span-2 md:rounded-md md:border md:border-gray-400 md:shadow-lg"/>
          
            <div className='mx-2 mt-5 border border-gray-400 rounded-md shadow-lg block md:col-span-2 md:mt-0'>
                <h1 className='p-2 m-0 text-center text-lg  text-white font-semibold rounded-t-md bg-green-400'>{event.title}</h1>
                <hr/>
                <div className="grid grid-cols-3 gap-0">
                    <p className="p-2 font-semibold col-span-1">Event Name:</p><p className="p-2 col-span-2">{event.title}</p>
                    <p className="p-2 font-semibold col-span-1">Description:</p><p className="p-2 col-span-2">{event.description}</p>
                    <p className="p-2 font-semibold col-span-1">Organiser:</p><p className="p-2 col-span-2">{event.organiser}</p>
                    <p className="p-2 font-semibold col-span-1">Location:</p><p className="p-2 col-span-2">{event.location}</p>
                    <p className="p-2 font-semibold col-span-1">Date (mm/dd/yy):</p><p className="p-2 col-span-2">{event.date}</p>
                    <p className="p-2 font-semibold col-span-1">Time:</p><p className="p-2 col-span-2">{event.time}</p>
                    <p className="p-2 font-semibold col-span-1">Price per Ticket (ETH):</p><p className="p-2 col-span-2">{event.price}</p>
                </div>
            </div>
            <div className='mx-2 mt-5 block md:mt-0 md:col-start-3 md:col-span-2 border border-gray-400 rounded-md shadow-lg'>
                <div className='block md:grid md:grid-cols-4 md:gap-2'>
                    <label className='p-2 font-semibold col-span-1' htmlFor="number-of-tickets">Number of Tickets:</label>
                    <select value={selectedValue} onChange={handleChange}
                    className="w-[50px] p-2 m-2 rounded-lg col-span-1" name="number-of-tickets" id="number-of-tickets">
                        <option value="1" className="">1</option>
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
                    <label className='p-2'>Total: {totalPrice.toFixed(2)} ETH</label>
                    <button type="submit" 
                        className="p-2 m-2 rounded-lg bg-blue-600 text-white 
                        col-span-1 font-semibold hover:bg-blue-700 shadow-md"
                        >Buy
                    </button>  
                </div>
            </div>


        </div> 
    </div>
  )
}
