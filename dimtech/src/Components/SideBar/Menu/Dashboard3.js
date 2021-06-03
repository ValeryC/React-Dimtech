import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import DashboardBlock from './DashboardComp/DashboardBlock'
import "./style/Dashboard3.css"
import DashR from '../../Dashboard/dashReseau'
import ArrowLeft from '../../ArrowLeft'
import ArrowRight from '../../ArrowRight'

export default function Dashboard3() {

  useEffect(() => {
    document.title = 'Dashboard3'
  })

  return (
    <div className="Main-container">

      <div className="Container-dashboard">
        <DashboardBlock />
        <div className="Container-dashelement3">

          <div className="block-element-dash3">
            <DashR />
          </div>

          <div className="block-element-dash3">
            <h1 className="title-dash2">Pourquoi une gestion d'état?</h1>
            <div className="explanation"></div>
            <h1 className="title-dash2"></h1>
            <div className="explanation">
            </div>

          </div>

          <div className="block-element-dash3">
            <h1 className="title-dash2">Mobx</h1>
            <div className="text-d2">
            </div>
            <h1 className="title-dash2">Redux</h1>
            <div className="text-d2">

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