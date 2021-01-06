import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import DashboardBlock from './DashboardComp/DashboardBlock'
import "./style/Dashboard2.css"
import ArrowLeft from '../../ArrowLeft'
import ArrowRight from '../../ArrowRight'
import axios from 'axios'

export default function Dashboard2() {

  // useEffect(() => {
  // })


  // const url = "https://coronavirusapi-france.now.sh/FranceLiveGlobalData"

  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    document.title = 'Dashboard2'
    const fetchData = async () => {
      const result = await axios(
        "https://coronavirusapi-france.now.sh/FranceLiveGlobalData",
      );
      console.log(result.data)
      setData(result.data);
    };

    fetchData();
  }, []);


  return (
    <div className="Main-container">
      {/* <Sidebar /> */}
      <div className="Container-dashboard">
        <DashboardBlock />
        <div className="Container-dashelement2">
          <div className="block-dash" key={data}>{data.deces}
            Type
            <ul>

            </ul>
          </div>
          <div className="block-dash" style={{ backgroundColor: '#707070', color: 'white' }}>
            of
          </div>
          <div className="block-dash">
            dashboard
          </div>

        </div>
        <div className="arrow-block">
          <div className="arrowLeft">
            <Link to='/Dashboard' ><ArrowLeft /></Link>
          </div>
          <div className="arrowRight">
            <Link to='/Dashboard3' ><ArrowRight /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

