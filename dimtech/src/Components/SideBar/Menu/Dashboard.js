import React from 'react';
import "./style/Dashboard.css"
import Sidebar from '../Sidebar';
import DashboardBlock from '../Menu/DashboardComp/DashboardBlock'


export default function Dashboard() {

  return (
    <div className="Landing">
      <Sidebar />
      <DashboardBlock />


    </div>
  )
}


