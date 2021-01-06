import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import DashboardBlock from './DashboardComp/DashboardBlock'
import "./style/Dashboard5.css"
import ArrowLeft from '../../ArrowLeft'
import ArrowRight from '../../ArrowRight'

export default function Dashboard5() {

  useEffect(() => {
    document.title = 'Dashboard5'
  })

  return (
    <div className="Main-container">
      {/* <Sidebar /> */}
      <div className="Container-dashboard">
        <DashboardBlock />
        <div className="Container-dashelement2">
          <div className="container-block-left">
            <div className="container-block-top">
              <div className="block-1">
                Type
          </div>
              <div className="block-2" >
                of
            </div>
            </div>

            <div className="block-3">
              dashboard
          </div>
          </div>
          <div className="block-dash">
            !!!
          </div>

        </div>
        <div className="arrow-block">
          <div className="arrowLeft">
            <Link to='/Dashboard4' ><ArrowLeft /></Link>
          </div>
          <div className="arrowRight">
            <Link to='/Dashboard6' ><ArrowRight /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
