import React, { useState } from 'react'
import { useGlobalContext } from './context'

const Search = () => {

  const [query, setQuery] = useState();

  const Nothing = "No such Movie";

  return (
    <>
      <section className='search-section'>
        <h2>Search your Movie</h2>
        <form action='#' onSubmit={(e) => e.preventDefault()}>
          <div>
              <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              />
          </div>

        </form>

        <div className='card-error'>
          <p>{Nothing}</p>
        </div>
      </section>
    </>
  )
}

export default Search;