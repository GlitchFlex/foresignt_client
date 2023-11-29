import React, {useState} from 'react'
import styles from './Dashboard.module.css'
import Bets from '../../components/Bets/Bets'
import Chart from '../../components/Charts/Charts'
import { FloatButton } from 'antd'
import { FaPlus } from 'react-icons/fa'
import CreateGameModal from '../../components/CreateGameModal/CreateGameModal'
function Dashboard() {

  const [createGameModalIsOpen, setCreateGameModalIsOpen] = useState(false);
  

  return (
    <div className = {styles.dashboard}>
      <CreateGameModal createGameModalIsOpen = {createGameModalIsOpen} setCreateGameModalIsOpen = {setCreateGameModalIsOpen}/>
      <FloatButton
      shape="circle"
      type="primary"
      style={{ left: "95%", top : "90%" }}
      icon={<FaPlus />}
      onClick={()=>{createGameModalIsOpen ? setCreateGameModalIsOpen(false) : setCreateGameModalIsOpen(true)}}
    />
        <div className={styles.left}>
            <Bets/>
        </div>
        {/* <div className={styles.right}>
          <Chart/>
        </div> */}
    </div>
  )
}

export default Dashboard