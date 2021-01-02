import React from 'react';
import './style/Search.css'

const Search = ({ handleInput, search }) => {

  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search your movie..."
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  )
}

export default Search 
