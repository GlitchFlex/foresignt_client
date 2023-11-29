import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import logo from '../../logo.png';
import {
    RiArticleFill,
    RiBankCardFill,
    RiBarChartBoxFill,
} from 'react-icons/ri';

import { AiFillHome } from 'react-icons/ai';
function Sidebar() {
    const [active, setActive] = useState('home');

    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <img style={{ width: '35px' }} src={logo} alt="srry" />
            </div>
            <div className={styles.iconList}>
                <div
                    className={active === "home" ? styles.activeIconDiv : styles.iconDiv}
                    // className={styles.iconDiv}
                    onClick={() => setActive('home')}
                >
                    <AiFillHome className={active === "home" ? styles.activeIcon : styles.icon} />
                </div>
                <div
                    className={active === "bets" ? styles.activeIconDiv : styles.iconDiv}
                    onClick={() => setActive('bets')}
                >
                    <RiArticleFill className={active === "bets" ? styles.activeIcon : styles.icon} />
                </div>
                <div
                    className={active === "wallet" ? styles.activeIconDiv : styles.iconDiv}
                    onClick={() => setActive('wallet')}
                >
                    <RiBankCardFill className={active === "wallet" ? styles.activeIcon : styles.icon} />
                </div>
                <div
                    className={active === "stats" ? styles.activeIconDiv : styles.iconDiv}
                    onClick={() => setActive('stats')}
                >
                    <RiBarChartBoxFill
                    className={active === "stats" ? styles.activeIcon : styles.icon}
                    // className={styles.icon} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
