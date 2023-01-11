import React from 'react'
import "../components/Section1.css" 

function Section1() {
  return (
    <div>
        <p className='para'>Latest recipes</p>
<div className='grid_container'>
    <div className='grid'>
    <img src={require ("../components/images/5.jpg")} />
    <p>Creamy Peanut Butter Jackfruit Noodles</p>
 </div>

 <div className='grid'>
    <img src={require ("../components/images/6.jpg")} />
    <p>Sweet Potato Spiced Chili</p>

 </div>

 <div className='grid'>
    <img src={require ("../components/images/7.jpg")} />
    <p>Pickled Red Onions</p>

 </div>

 <div className='grid'>
    <img src={require ("../components/images/8.jpg")} />
    <p>Non-Alcoholic Mulled Wine</p>
 </div>

 <div className='grid'>
    <img src={require ("../components/images/9.jpg")} />
    <p>Cinnamon-Spiced Orange & Thyme Mocktail</p>

 </div>

 <div className='grid'>
    <img src={require ("../components/images/10.jpg")} />
    <p>Vegan Apple Pie</p>

 </div>

</div>
<div className='buto'>
<button>More+</button>
</div>

    </div>
  )
}

export default Section1