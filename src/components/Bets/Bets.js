import React, { useEffect, useState } from 'react';
import styles from './Bets.module.css';
import Info from '../Bits/Bits';
import { FaClock, FaEthereum, FaUser } from 'react-icons/fa';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { MdAdminPanelSettings } from 'react-icons/md';
import { SiBitcoinsv } from 'react-icons/si';
import { FaBitcoinSign, FaRegClock } from 'react-icons/fa6';
import { Avatar, Tooltip } from 'antd';
import { Contract, ethers } from 'ethers';
import BettingContract from '../../artifacts/contracts/Bet.sol/BettingContract.json';
import Cards from '../Cards/Cards';

function Bets({counter, setCounter}) {


    console.log("Bets : ",counter);



    const [games, setGames] = useState([]);

    useEffect(() => {
        getAll();
    }, [counter]);

    

    const getAll = async () => {

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new Contract(
            process.env.REACT_APP_PUBLIC_KEY,
            BettingContract.abi,
            signer
        );
        try {
            const gamesLater = await contract.getAllGames();
            const a = await gamesLater;
            for (var b of a) {
                // console.log(
                games.push(b);
                setGames([...games]);
            }
            
        } catch (err) {
            console.log(err);
        }

        // window.location.reload(1);
    };

    console.log(games);
    console.log(games.slice(0, games.length / 2).length);



    const callContract = async () => {
        const provider = new ethers.BrowserProvider(window.ethereum);

        const signer = await provider.getSigner();
        
        const contract = new Contract(
            process.env.REACT_APP_PUBLIC_KEY,
            BettingContract.abi,
            signer
        );
       
        try {
            const gamesLater = await contract.getAllGames();
            const a = await gamesLater;
            console.log(a);
            for (var b of a) {
                console.log(b[0]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.bets}>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <div onClick={callContract} className={styles.title}>
                    Ongoing stuffs
                </div>
                <div
                    style={{
                        position: 'relative',
                        right: '17px',
                        fontFamily: 'poppins',
                        fontSize: '14px',
                        cursor: 'pointer',
                        // lineHeight : "10px"
                    }}
                >
                    more
                </div>
            </div>
            <div className={styles.list}>
            {games.slice(0, games.length / 2).map((game, index) => (
                <Cards key={index} game={game} />
))}
            </div>
        </div>
    );
}

export default Bets;
