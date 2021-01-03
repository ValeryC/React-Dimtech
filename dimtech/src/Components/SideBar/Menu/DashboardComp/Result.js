import React from 'react'
import './style/Results.css'

function Result({ result, openPopup }) {
  return (
    <div className="result" onClick={() => openPopup(result.imdbID)}>
      {/* eslint-disable-next-line */}
      <img src={result.Poster} />
      <h3>{result.Title}</h3>
    </div>
  )
}

export default Result

