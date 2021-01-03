import React from 'react'
import "./style/Popup.css"

function Popup({ selected, closePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <h2>{selected.Title} <span>({selected.Year})</span></h2>
        <div className="rating">
          Rating: {selected.imdbRating}
        </div>
        <div className="plot">
          {/* eslint-disable-next-line */}
          <img src={selected.Poster} />
          <div className="resume-text">{selected.Plot}</div>
        </div>
        <button className="close" onClick={closePopup}>Close</button>
      </div>
    </section>
  )
}

export default Popup

