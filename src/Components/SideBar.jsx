import React from 'react'
import "../Styling/SideBar.css"
function SideBar() {
  return (
    <div className='SideBar'>
    <ol className='SideBarMenu'>
        <li><a href="">Woman’s Fashion</a></li>
        <li><a href="">Men’s Fashion</a></li>
        <li><a href="">Electronics</a></li>
        <li><a href="">Home & Lifestyle</a></li>
        <li><a href="">Medicine</a></li>
        <li><a href="">Sports & Outdoor</a></li>
        <li><a href="">Baby’s & Toys</a></li>
        <li><a href="">Groceries & Pets</a></li>
        <li><a href="">Health & Beauty</a></li>
    </ol>
    </div>
  )
}

export default SideBar