import React from 'react';
import styles from './Bets.module.css';
import Info from '../Bits/Bits';
import { FaClock, FaEthereum, FaUser } from 'react-icons/fa';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { MdAdminPanelSettings } from 'react-icons/md';
import { SiBitcoinsv } from 'react-icons/si';
import { FaBitcoinSign, FaRegClock } from 'react-icons/fa6';
import { Avatar, Tooltip } from 'antd';

function Bets() {
    return (
        <div className={styles.bets}>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <div className={styles.title}>Ongoing stuffs</div>
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
                <div
                    style={{
                        background: '#ff7438',
                        color: 'white',
                        transformOrigin: 'left center',
                    }}
                    className={styles.listItems}
                >
                    <span>India wins final</span>

                    
                    <div
                        style={{
                            display: 'grid',
                            marginBottom: '31px',
                            width: '100%',
                            gridTemplateColumns: '1fr 1fr',
                            marginTop: '40px',
                            gridColumnGap: '40px',
                        }}
                    >
                        <Info
                            icon={
                                <MdAdminPanelSettings
                                    style={{
                                        color: '#a53500',
                                        fontSize: '24px',
                                        marginBottom: '10px',
                                    }}
                                />
                            }
                            title="Mikhayel"
                            desc="Admin"
                        />
                        <Info
                            icon={
                                <FaEthereum
                                    style={{
                                        color: '#a53500',
                                        fontSize: '24px',
                                    }}
                                />
                            }
                            title="10 eth"
                            desc="Collection"
                        />
                        <Info
                            icon={
                                <FaRegClock
                                    style={{
                                        color: '#a53500',
                                        fontSize: '19px',
                                        marginLeft: '2px',
                                        marginTop: '2px',
                                    }}
                                />
                            }
                            title="21.6.24"
                            desc="Last date"
                        />
                        <Info
                            icon={
                                <FaBitcoinSign
                                    style={{
                                        color: '#a53500',
                                        fontSize: '19px',
                                        marginLeft: '2px',
                                        marginTop: '2px',
                                    }}
                                />
                            }
                            title="3 eth"
                            desc="Your stakes"
                        />
                    </div>

                    <Avatar.Group
                        maxCount={3}
                        maxStyle={{
                            color: '#f56a00',
                            backgroundColor: '#fde3cf',
                        }}
                    >
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=4" />
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                        <Avatar style={{ backgroundColor: '#f56a00' }}>
                            K
                        </Avatar>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar
                                style={{ backgroundColor: '#87d068' }}
                                icon={<FaUser />}
                            />
                        </Tooltip>
                        <Avatar
                            style={{ backgroundColor: '#1677ff' }}
                            icon={<FaUser />}
                        />
                    </Avatar.Group>
                </div>
                <div className={styles.listItems}>
                    <span>You will get a life</span>
                    <div
                        style={{
                            display: 'grid',
                            marginBottom: '31px',
                            width: '100%',
                            gridTemplateColumns: '1fr 1fr',
                            marginTop: '40px',
                            gridColumnGap: '40px',
                        }}
                    >
                        <Info
                            icon={
                                <MdAdminPanelSettings
                                    style={{
                                        color: 'rgb(180 180 180)',
                                        fontSize: '24px',
                                        marginBottom: '10px',
                                    }}
                                />
                            }
                            title="Mikhayel"
                            desc="Admin"
                        />
                        <Info
                            icon={
                                <FaEthereum
                                    style={{
                                        color: 'rgb(180 180 180)',
                                        fontSize: '24px',
                                    }}
                                />
                            }
                            title="10 eth"
                            desc="Collection"
                        />
                        <Info
                            icon={
                                <FaRegClock
                                    style={{
                                        color: 'rgb(180 180 180)',
                                        fontSize: '19px',
                                        marginLeft: '2px',
                                        marginTop: '2px',
                                    }}
                                />
                            }
                            title="21.6.24"
                            desc="Last date"
                        />
                        <Info
                            icon={
                                <FaBitcoinSign
                                    style={{
                                        color: 'rgb(180 180 180)',
                                        fontSize: '19px',
                                        marginLeft: '2px',
                                        marginTop: '2px',
                                    }}
                                />
                            }
                            title="3 eth"
                            desc="Your stakes"
                        />
                    </div>
                    <Avatar.Group
                        maxCount={3}
                        maxStyle={{
                            color: '#f56a00',
                            backgroundColor: '#fde3cf',
                        }}
                    >
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=4" />
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                        <Avatar style={{ backgroundColor: '#f56a00' }}>
                            K
                        </Avatar>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar
                                style={{ backgroundColor: '#87d068' }}
                                icon={<FaUser />}
                            />
                        </Tooltip>
                        <Avatar
                            style={{ backgroundColor: '#1677ff' }}
                            icon={<FaUser />}
                        />
                    </Avatar.Group>
                </div>
                <div
                    style={{ transformOrigin: 'right center' }}
                    className={styles.listItems}
                >
                    <span>Mandarmani trip will happen</span>
                    <div
                        style={{
                            display: 'grid',
                            marginBottom: '31px',
                            width: '100%',
                            gridTemplateColumns: '1fr 1fr',
                            marginTop: '40px',
                            gridColumnGap: '40px',
                        }}
                    >
                        <Info
                            icon={
                                <MdAdminPanelSettings
                                    style={{
                                        color: 'rgb(180 180 180)',
                                        fontSize: '24px',
                                        marginBottom: '10px',
                                    }}
                                />
                            }
                            title="Mikhayel"
                            desc="Admin"
                        />
                        <Info
                            icon={
                                <FaEthereum
                                    style={{
                                        color: 'rgb(180 180 180)',
                                        fontSize: '24px',
                                    }}
                                />
                            }
                            title="10 eth"
                            desc="Collection"
                        />
                        <Info
                            icon={
                                <FaRegClock
                                    style={{
                                        color: 'rgb(180 180 180)',
                                        fontSize: '19px',
                                        marginLeft: '2px',
                                        marginTop: '2px',
                                    }}
                                />
                            }
                            title="21.6.24"
                            desc="Last date"
                        />
                        <Info
                            icon={
                                <FaBitcoinSign
                                    style={{
                                        color: 'rgb(180 180 180)',
                                        fontSize: '19px',
                                        marginLeft: '2px',
                                        marginTop: '2px',
                                    }}
                                />
                            }
                            title="3 eth"
                            desc="Your stakes"
                        />
                    </div>
                    <Avatar.Group
                        maxCount={3}
                        maxStyle={{
                            color: '#f56a00',
                            backgroundColor: '#fde3cf',
                        }}
                    >
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=4" />
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                        <Avatar style={{ backgroundColor: '#f56a00' }}>
                            K
                        </Avatar>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar
                                style={{ backgroundColor: '#87d068' }}
                                icon={<FaUser />}
                            />
                        </Tooltip>
                        <Avatar
                            style={{ backgroundColor: '#1677ff' }}
                            icon={<FaUser />}
                        />
                    </Avatar.Group>
                </div>
            </div>
        </div>
    );
}

export default Bets;
