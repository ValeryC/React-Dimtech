import React from 'react'
import Result from './Result'
import './style/Results.css'

function Results({ results, openDetails }) {
  return (
    <section className="results">
      {results.map(result => (
        <Result key={result.imdbID} result={result} openDetails={openDetails} />

      ))}
    </section>
  )
}
export default Results
