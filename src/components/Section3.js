import React from 'react'
import "../components/Section3.css" 


function Section3() {
  return (
    <div>
 <p className='para'>Latest Videos</p>
<div className='grid_container'>
    <div className='grid'>
    <img src={require ("../components/images/12.jpg")} />
    <h3>One-Pot Meals</h3>
    <p>simple + wholesome 👩🏻‍🍳</p>
 </div>

 <div className='grid'>
    <img src={require ("../components/images/13.jpg")} />
    <h3>What I Eat for Brain Health 🧠</h3>
    <p>foods to boost mood</p>

 </div>

 <div className='grid'>
    <img src={require ("../components/images/14.jpg")} />
    <h3>Designing a Simple Life</h3>
    <p>minimalist habits</p>

 </div>

 <div className='grid'>
    <img src={require ("../components/images/15.jpg")} />
    <h3>How to Make the Perfect Pie at Home</h3>
    <p>egg + dairy-free 🥧</p>
 </div>

 <div className='grid'>
    <img src={require ("../components/images/16.jpg")} />
    <h3>Takeout Classics</h3>
    <p>but better + faster! 🥡</p>

 </div>

 <div className='grid'>
    <img src={require ("../components/images/17.jpg")} />
    <h3>What to EAT for HEALTHY SKIN</h3>
    <p>science-backed! 👩🏻‍🌾</p>

 </div>

</div>
<div className='buto'>
<button>More+</button>
</div>



    </div>
  )
}

export default Section3