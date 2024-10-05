import React from 'react'
import image from "../../image.jpg"
import './navbar.css';


const Navbar = () => {
  return (
   <nav className='navbar'>

<img src={image} alt="city tours logo"/>
<ul className="nav-links">
<li>
  <a href="/" className="nav-link">
  home
  </a>
</li>
<li>
  <a href="/" className="nav-link">
 about
  </a>
</li>
<li>
  <a href="/" className="nav-link active">
  tours
  </a>
</li>
</ul>

   </nav>
  )
}

export default Navbar