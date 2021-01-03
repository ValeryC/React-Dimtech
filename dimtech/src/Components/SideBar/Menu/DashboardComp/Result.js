import React from 'react'
import './style/Results.css'

function Result({ result, openDetails }) {

  return (
    <div className="result" onClick={() => openDetails(result.imdbID)}>
      <img src={result.Poster} />
      <h3>{result.Title}</h3>
    </div>
  )
}
export default Result 