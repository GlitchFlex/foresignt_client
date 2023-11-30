import React, {useState} from 'react'
import styles from './Dashboard.module.css'
import Bets from '../../components/Bets/Bets'
import Chart from '../../components/Charts/Charts'
import { FloatButton } from 'antd'
import { FaPlus } from 'react-icons/fa'
import CreateGameModal from '../../components/CreateGameModal/CreateGameModal'
import Loader from '../../components/Loader/Loader'
function Dashboard() {

  const [createGameModalIsOpen, setCreateGameModalIsOpen] = useState(false);

  const [counter, setCounter] = useState(0);

  const [spinning, setSpinning] = useState(false);
  const [spinningText, setSpinningText] = useState("");

  console.log("dashboard : ",counter);
  

  return (
    <div className = {styles.dashboard}>
      <Loader spinning={spinning} text = {spinningText} setSpinningText = {setSpinningText} setSpinning={setSpinning}/>
      <CreateGameModal  setSpinningText = {setSpinningText} spinning = {spinning} setSpinning = {setSpinning} setCounter = {setCounter} counter = {counter} createGameModalIsOpen = {createGameModalIsOpen} setCreateGameModalIsOpen = {setCreateGameModalIsOpen}/>
      <FloatButton
      shape="circle"
      type="primary"
      style={{ left: "95%", top : "90%" }}
      icon={<FaPlus />}
      onClick={()=>{createGameModalIsOpen ? setCreateGameModalIsOpen(false) : setCreateGameModalIsOpen(true)}}
    />
        <div className={styles.left}>
            <Bets counter={counter} setCounter={setCounter}/>
        </div>
    </div>
  )
}

export default Dashboard