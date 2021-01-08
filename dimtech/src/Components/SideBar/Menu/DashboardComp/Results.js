import React from 'react'
import Result from './Result'
import './style/Results.css'

function Results({ results, openPopup }) {
  if (!results) {
    return (<div style={{ paddingLeft: 20, color: 'red' }}>'cannot find data '</div>)
  }
  else

    return (
      <section className="results">
        {results.map(result => (
          <Result key={result.imdbID} result={result} openPopup={openPopup} />
        ))}
      </section>
    )
}

export default Results
