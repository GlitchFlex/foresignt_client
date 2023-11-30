import { Spin } from 'antd'
import React from 'react'

function Loader({spinning, setSpinning, text}) {
  return (
    <Spin size='large' tip = {text} spinning={spinning} fullscreen />
  )
}

export default Loader