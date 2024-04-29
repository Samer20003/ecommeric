import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar'
import '../Styling/Nav.css'
function Nav() {
  return (
    <div className='continer'>
   
    <h1>Exclusive</h1>
      <div className="nav">
   
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">About</a></li>
     
    </ul>
    </div>
    <div className="nav2">
      <ul>
      <li id='search'>  <SearchBar/></li>
        <li id='heart'><FontAwesomeIcon icon={faHeart} /></li>
        <li id='shoping'><FontAwesomeIcon icon={faCartShopping} /></li>
       
      </ul>
  
    </div>
  

    </div>
  
 
  )
}

export default Nav