import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import DashboardBlock from './DashboardComp/DashboardBlock'
import "./style/Dashboard4.css"
import ArrowLeft from '../../ArrowLeft'
import ArrowRight from '../../ArrowRight'

export default function Dashboard4() {

  useEffect(() => {
    document.title = 'Dashboard4'
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
          <div className="block-dash" style={{ backgroundColor: '#707070', color: 'white' }}>
            of
          </div>
          <div className="block-dash">
            dashboard
          </div>
          <div className="block-dash" style={{ backgroundColor: '#707070', color: 'white' }}>
            !!!
          </div>

        </div>
        <div className="arrow-block">
          <div className="arrowLeft">
            <Link to='/Dashboard3' ><ArrowLeft /></Link>
          </div>
          <div className="arrowRight">
            <Link to='/Dashboard5' ><ArrowRight /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
