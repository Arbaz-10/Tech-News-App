import React from 'react'
import { useGlobalContext } from './Context';

const Search = () => {

  const {query, searchPost} = useGlobalContext();

  return (
    <>
      <h1>Technical Quora News 📚</h1>
      <form >
        <div>
          <input type="text" placeholder='Search here...' 
           value={query}
           onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </>
    
  )
}

export default Search;