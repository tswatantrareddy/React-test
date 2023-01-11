import React from 'react'
import '../components/Navbar.css'


function Navbar() {
  return (
    <div className='mix'>
    <div>
  <ul>
    <li>Recipes</li>
    <li>Articles</li>
    <li>Videos</li>
    </ul>
    </div>
    <div>
        <ul>
    <li className='middle'><img src={require('../components/images/1.webp')} alt="logo"/></li>
    </ul>
    </div>
    <div>
        <ul>
    <li className='left'>Recipes</li>
    <li className='left'>Articles</li>
    <li className='left'>Videos</li>
  </ul>
  </div>

  </div>

  )
}

export default Navbar