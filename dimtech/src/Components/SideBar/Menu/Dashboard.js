import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import DashboardBlock from './DashboardComp/DashboardBlock'
import Search from './DashboardComp/Search'
import Results from './DashboardComp/Results'
import Popup from './DashboardComp/Popup'
import "./style/Dashboard.css"
import axios from 'axios'

export default function Dashboard() {

  useEffect(() => {
    document.title = 'Dashboard'
  })

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="Main-container">
      <Sidebar />
      <div className="Container-dashboard">
        <DashboardBlock />
        <div className="Container-dashelement">
          <div className="Search-movie">
            <header>
              <h1 className="title-main">Movie Search</h1>
            </header>
            <main>
              <Search handleInput={handleInput} search={search} />
              <Results results={state.results} openPopup={openPopup} />
            </main>
          </div>
          <div className="Movie-info">
            {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
          </div>
        </div>
      </div>
    </div>
  )
}


