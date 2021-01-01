import React from 'react';
import "../style/Dashboard.css"
import Sidebar from '../Components/SideBar/Sidebar';
import DashboardBlock from '../pages/container/DashboardComp/DashboardBlock'


export default function Dashboard() {

  return (
    <div className="Landing">
      <Sidebar />
      <DashboardBlock />


    </div>
  )
}


