import React, {useState, useEffect} from 'react'
import Web3Modal from "web3modal";
import { ethers } from "ethers";
//import WalletConnectProvider from '@walletconnect/web3-provider'



export default function ConnectButton() {
    const [web3Modal, setWeb3Modal] = useState(null)

    useEffect(() => {
        const providerOptions = {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: process.env.REACT_APP_INFURA_ID_ROPSTEN,
            }
          },
        };
    

    async function connect(){

    }

  return (
    <button onClick={connect} 
        className="p-3 bg-blue-600 text-white rounded-full shadow-md"
    >Connect</button>
  )
}
