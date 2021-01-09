import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import DashboardBlock from './DashboardComp/DashboardBlock'
import "./style/Dashboard2.css"
import ArrowLeft from '../../ArrowLeft'
import ArrowRight from '../../ArrowRight'
import axios from 'axios'

export default function Dashboard2() {
  const [data, setData] = useState();

  useEffect(() => {
    document.title = 'Dashboard2'
    const fetchData = async () => {
      const result = await axios(
        "https://coronavirusapi-france.now.sh/FranceLiveGlobalData",
      );
      console.log(result.data)
      setData(result.data);

      // console.log(data.FranceGlobalLiveData.slice(0, 1))


    };

    fetchData();
  }, []);


  return (
    <div className="Main-container">
      {/* <Sidebar /> */}
      <div className="Container-dashboard">
        <DashboardBlock />
        <div className="Container-dashelement2">

          <div className="block-element-dash2  fade-in" key={data}>
            <div className='Main-title'>Info Covid en France</div>
            <div className="source">
              Source :
            {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.source.nom + ', ' + elem.date))}
            </div>
            <div className="bloc-item-element">
              <div className="Item-title">Décès</div>
              <div className='data' >
                {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.deces))}
              </div>
            </div>

            <div className="bloc-item-element">
              <div className="Item-title">Cas Confirmés</div>
              <div className='data' >
                {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.casConfirmes))}
              </div>
            </div>

            <div className="bloc-item">
              <div className="bloc-item-element">
                <div className="Item-title">Hospitalisés</div>
                <div className='data' >
                  {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.hospitalises))}
                </div>
              </div>

              <div className="bloc-item-element">

                <div className="Item-title">Nouvelles Hospitalisations </div>
                <div className='data' >
                  {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.nouvellesHospitalisations))}
                </div>
              </div>
            </div>

            <div className="bloc-item">
              <div className="bloc-item-element">
                <div className="Item-title">Réanimation</div>
                <div className='data' >
                  {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.reanimation))}
                </div>
              </div>

              <div className="bloc-item-element">

                <div className="Item-title">Nouvelles Réanimations </div>
                <div className='data' >
                  {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.nouvellesReanimations))}
                </div>
              </div>
            </div>


            <div className="bloc-item-element">
              <div className="Item-title">Guéris</div>
              <div className='data' >
                {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.gueris))}
              </div>
            </div>

          </div>


          <div className="block-element-dash2">


          </div>
          <div className="block-element-dash2">

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

