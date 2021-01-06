import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import DashboardBlock from './DashboardComp/DashboardBlock'
import "./style/Dashboard3.css"
import ArrowLeft from '../../ArrowLeft'
import ArrowRight from '../../ArrowRight'

export default function Dashboard3() {

  useEffect(() => {
    document.title = 'Dashboard3'
  })

  return (
    <div className="Main-container">
      {/* <Sidebar /> */}
      <div className="Container-dashboard">
        <DashboardBlock />
        <div className="Container-dashelement2">
          <div className="block-dash">
            Type
          </div>

          <div className="container-block-line">
            <div className="block-line">
              of
          </div>
            <div className="block-line">
              dashboard
          </div>
          </div>
        </div>
        <div className="arrow-block">
          <div className="arrowLeft">
            <Link to='/Dashboard2' ><ArrowLeft /></Link>
          </div>
          <div className="arrowRight">
            <Link to='/Dashboard4' ><ArrowRight /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}