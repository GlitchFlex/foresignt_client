import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/TopBar/Topbar'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
        <div style={{display : "flex"}}>
              <Sidebar />
              <div style={{ width: '95vw' }}>
                <Topbar />
                <Outlet/>
                {/* Add more routes for other components */}
              </div>
        </div>
  )
}

export default Main