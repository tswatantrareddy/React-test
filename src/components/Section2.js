import React from 'react'
import "../components/Section2.css" 


function Section2() {
  return (
    <div>
        <div className='grid2'>
<div className='grid-items2'>
    <p className='parh'>Welcome Friends!</p>
<img src={require ("../components/images/11.jpg")} />  
</div>

<div className='grid-items2'>
<h4>We are Pick Up Limes!</h4>
<p>Our mission is to make a nourishing plant-based lifestyle accessible to everyone.</p>

<p>We make videos, recipes, and nutrition articles to make you feel excited and supported in introducing more plant-based foods into your meals, snacks, desserts, and everything in-between!</p>
</div>
 </div>




    </div>
  )
}

export default Section2