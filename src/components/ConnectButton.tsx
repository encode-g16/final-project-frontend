import React from 'react'
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector'
import { shortenAddress } from '../utils/shortenAddress';
import { Web3Provider } from '@ethersproject/providers'
import { disconnect } from 'process';


export default function ConnectButton(props:any) {
    const injectedConnector = new InjectedConnector({supportedChainIds: [1,3, 4, 5, 42, ],})
    const { chainId, account, activate, active,library,deactivate  } = useWeb3React<Web3Provider>()
    
    const connect = () => {
      activate(injectedConnector)
    }

    function hardRefresh() {
        window.location.reload();
    }

    if(active){
        return(
            <button
            onClick={disconnect}
            >{shortenAddress(account)}</button>
        )
    }
    return(
        <button
        onClick={connect}>
            Connect
        </button>
    )
    
}
