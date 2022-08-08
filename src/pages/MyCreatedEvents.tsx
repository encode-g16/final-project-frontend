import React, { useEffect, useState } from 'react'
import Header from '../components/Header' 
import eventData from '../MockEventData.json';
import {EventProp} from '../components/EventBox';
import EventBox from '../components/EventBox';

const MyCreatedEvents = () => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
  const [account, setAccount] = useState<string | null>(null);
  const [myEvents, setMyEvents] = useState<EventProp[]|undefined>([])
  
  useEffect(() => {
    if((window as any).ethereum){
      //check if Metamask wallet is installed
      setIsMetamaskInstalled(true);
    }
  },[]);

  async function connectWallet(): Promise<void> {
    //to get around type checking
    (window as any).ethereum
      .request({
          method: "eth_requestAccounts",
      })
      .then((accounts : string[]) => {
          setAccount(accounts[0]);
          const userEvents = eventData.filter(event => event.organiser === accounts[0])
          setMyEvents(userEvents);
      })
      .catch((error: any) => {
          alert(`Something went wrong: ${error}`);
      });
  }

  // if (account === null) {
  //   return (
  //     <div className="App App-header">
  //       {
  //         isMetamaskInstalled ? (
  //           <div>
  //             <button onClick={connectWallet}>Connect Your Metamask Wallet</button>
  //           </div>
  //         ) : (
  //           <p>Install Your Metamask wallet</p>
  //         )
  //       }
  
  //     </div>
  //   );
  // }

  return (
    <div>
        <header>
            <Header />
        </header>
        <div className="flex mx-auto flex-col items-center gap-8 mb-16">
          <p className="text-center text-2xl drop-shadow-7xl font-semibold">Connect Your Wallet to View Your Created Events</p>
          <button className={ account ? `bg-lime-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-64 justify-self-center text-2xl`:`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-64 justify-self-center text-2xl`} onClick={connectWallet}>{account ? `Connected` : `Connect to Wallet`}</button>
          {account && <p className="text-center text-2xl drop-shadow-7xl font-semibold">Connected Wallet: <span className="text-lime-500">{account}</span> </p>}
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-5 mx-5 sm:mx-16">
          {
            myEvents?.map(({eventName, eventDate, location, description, price, organiser, file}) => <EventBox eventName={eventName} eventDate={eventDate} location={location} price={price} organiser={organiser} description={description} file={file}/>)
          }
        </div>
        
        
        {/* To create a JSON file containing mock events. Display eventboxes */}
    </div>
  )
}

export default MyCreatedEvents