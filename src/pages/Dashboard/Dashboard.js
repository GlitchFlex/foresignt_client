import React from 'react'
import styles from './Dashboard.module.css'
import Bets from '../../components/Bets/Bets'
import Chart from '../../components/Charts/Charts'
function Dashboard() {
  return (
    <div className = {styles.dashboard}>
        <div className={styles.left}>
            <Bets/>
        </div>
        <div className={styles.right}>
          <Chart/>
        </div>
    </div>
  )
}

export default Dashboard