import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import DashboardBlock from './DashboardComp/DashboardBlock'
import Search from './DashboardComp/Search'
import Results from './DashboardComp/Results'
import Details from './DashboardComp/Details'
import "./style/Dashboard.css"
import axios from 'axios'

export default function Dashboard() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  })
  const apiurl = 'http://www.omdbapi.com/?i=tt3896198&apikey=3547e686'

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        console.log(data)
        let results = data.Search
        setState(prevState => {
          return { ...prevState, results: results }
        })
      })
    }
  }

  const handleInput = (e) => {
    let s = e.target.value

    setState(prevState => {
      return { ...prevState, s: s }
    })
    console.log(state.s)
  }

  const openDetails = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result)
      setState(prevState => {
        return { ...prevState, selected: result }
      })
    })
  }

  const closeDetails = () => {
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
              <Results results={state.results} openDetails={openDetails} />
              {(typeof state.selected.Title != "undefined") ? <Details selected={state.selected} closeDetails={closeDetails} /> : false}

            </main>
          </div>
          <div className="Movie-info">


          </div>
        </div>
      </div>
    </div>
  )
}


