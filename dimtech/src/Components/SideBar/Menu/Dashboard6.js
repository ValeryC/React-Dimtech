import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import DashboardBlock from './DashboardComp/DashboardBlock'
import "./style/Dashboard6.css"
import ArrowLeft from '../../ArrowLeft'
import ArrowRight from '../../ArrowRight'

export default function Dashboard5() {

  useEffect(() => {
    document.title = 'Dashboard4'
  })

  return (
    <div className="Main-container">
      {/* <Sidebar /> */}
      <div className="Container-dashboard">
        <DashboardBlock />
        <div className="Container-dashelement2">

          <div className="container-block-dash2">
            <div className="block-dash2">
              Type
          </div>
            <div className="block-dash2" style={{ backgroundColor: '#707070', color: 'white' }}>
              dashboard
          </div>
          </div>

          <div className="container-block-dash2">
            <div className="block-dash2" style={{ backgroundColor: '#707070', color: 'white' }}>
              of
          </div>
            <div className="block-dash2" >
              !!!
          </div>
          </div>


        </div>
        <div className="arrow-block">
          <div className="arrowLeft">
            <Link to='/Dashboard5' ><ArrowLeft /></Link>
          </div>
          <div className="arrowRight">
            <Link to='/Dashboard' ><ArrowRight /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
