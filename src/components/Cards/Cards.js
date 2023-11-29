import { Avatar, Tooltip } from 'antd'
import React from 'react'
import { FaEthereum, FaRegClock, FaUser } from 'react-icons/fa'
import { FaBitcoinSign } from 'react-icons/fa6'
import Info from '../Bits/Bits'
import styles from './Cards.module.css';
import { MdAdminPanelSettings } from 'react-icons/md'

function Cards({game}) {
  return (
    <div
                    style={{
                        // background: '#ff7438',
                        color: 'white',
                        // transformOrigin: 'left center',
                    }}
                    className={styles.listItems}
                >
                    <span>{game[0]}</span>
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
                            title={process.env.REACT_APP_PUBLIC_KEY.slice(0,3) + "..." + process.env.REACT_APP_PUBLIC_KEY.slice(39)}
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
                            title="0 eth"
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
                            title="0 eth"
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
  )
}

export default Cards