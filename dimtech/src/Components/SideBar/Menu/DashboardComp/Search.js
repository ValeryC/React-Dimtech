import React from 'react';
import './style/Search.css'

function Search({ handleInput, search }) {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="ex : Star Wars, Ready player one , Lord of the rings, lego ˆˆ..."
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  )
}

export default Search

