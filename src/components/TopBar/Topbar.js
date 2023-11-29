import React, { useState } from 'react';
import styles from './Topbar.module.css';
import { FiBell } from 'react-icons/fi';
import { Avatar } from 'antd';
// import { CiUser } from "react-icons/ci";
import { IoWalletOutline } from 'react-icons/io5';
import { ethers, Contract } from 'ethers';
import { AiOutlineReload } from "react-icons/ai";
import BettingContract from '../../artifacts/contracts/Bet.sol/BettingContract.json'
// import { Contract, ethers } from "ethers";
const networks = {
  polygon: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Testnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
};



function Topbar() {
   
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");


  const connectWallet = async () => {
    if(!window.ethereum) return alert("Install Metamask");
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.BrowserProvider(window.ethereum);
    if (provider.network !== "matic") {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks["polygon"],
          },
        ],
      });
    } 
      const account = provider.getSigner();
      console.log(await account);
      console.log(provider);
      const Address = (await account).address;
      setAddress(Address);
      const Balance = await provider.getBalance(Address);
      console.log(Balance,"Balance")
      setBalance(parseInt(Balance));
    
  };


  const callContract = async () => {
    // console.log("callContract");
    // console.log(process.env.REACT_APP_PUBLIC_KEY,"public url")
  const provider = new ethers.BrowserProvider(window.ethereum);
  console.log("Provider",provider)
  const signer =await provider.getSigner();
  console.log("Signer", signer)
  const contract = new Contract(
    process.env.REACT_APP_PUBLIC_KEY,
    BettingContract.abi,
    signer
  );
  console.log(contract,"contract");
  const purpose = await contract.testContract();
  // const purpose = await contract.runner();
  console.log(await purpose);
}


const pageReload = ()=>{
  window.location.reload(1);
}

    

    return (
        <div className={styles.topbar}>
            <div className={styles.greeting}>Good afternoon, Pratyugna</div>

            <div className={styles.badges}>
                <div onClick={callContract}>
                    <FiBell className={styles.bell} />
                </div>
                <div onClick={connectWallet}>
                    <IoWalletOutline className={styles.bell} />
                </div>
                <div onClick={pageReload}>
                    <AiOutlineReload  className={styles.bell} />
                </div>

                <Avatar
                    style={{ background: 'orangered' }}
                    src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
                />
            </div>
        </div>
    );
}

export default Topbar;
