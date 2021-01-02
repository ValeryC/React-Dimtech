import React from 'react'
import './style/Results.css'

export default function Result({ result }) {

  return (
    <div className="result">
      {/* eslint-disable-next-line */}
      <img src={result.Poster} />
      <h3>{result.Title}</h3>
    </div>
  )
}
