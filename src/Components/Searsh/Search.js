import React from 'react'
import { Link } from 'react-router-dom'
import searchIcon from '../Icons/search.png'
import '../Searsh/search.css'

function Search({change, setChange}) {
  const openChange = () =>{
    setChange(!change);
  }
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={`burger ${change ? "burger-active" : ""}`}
        onClick={openChange}
      >
        <Link className='navbars-link search'><img src={searchIcon} alt="icon" /> Поисковый запрос</Link>
      </div>
      <div className={`searchs ${change ? "open" : ""}`} onClick={stopPropagation}fake>
        <h5><b>Поисковый запрос</b></h5>
        <div className="input">
          <input type="search" />
        </div>
      </div>
    </>
  )
}

export default Search
