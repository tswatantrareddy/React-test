import React from 'react'
import "../components/Section5.css" 

function Section5() {
  return (
    <div>
<p className='para'>Latest Videos</p>
<div className='grid_container'>
    <div className='grid'>
    <img src={require ("../components/images/19.jpg")} />
    <h3>Skin Health & Nutrition</h3>
    <p>nourishing skin from within</p>
 </div>

 <div className='grid'>
    <img src={require ("../components/images/20.jpg")} />
    <h3>Food and Mood</h3>
    <p>how we can feel better</p>

 </div>

 <div className='grid'>
    <img src={require ("../components/images/21.jpg")} />
    <h3>Bloating</h3>
    <p>tips to beat discomfort</p>

 </div>

 <div className='grid'>
    <img src={require ("../components/images/22.jpg")} />
    <h3>Why You're Always Tired</h3>
    <p>+ how food can fix it!</p>
 </div>

 <div className='grid'>
    <img src={require ("../components/images/23.jpg")} />
    <h3>Inflammation</h3>
    <p>foods to fight it</p>

 </div>

 <div className='grid'>
    <img src={require ("../components/images/24.jpg")} />
    <h3>The Plate Method</h3>
    <p>a nutritionally balanced meal for vegans</p>

 </div>

</div>
<div className='buto'>
<button>More+</button>
</div>




    </div>
  )
}

export default Section5