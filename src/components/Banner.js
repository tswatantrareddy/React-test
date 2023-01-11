import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {

const Carousel_1={
width:"100%",
height:"60vh",
objectFit:"cover",

};


  return (
    <>
    <div>
            <Carousel   showThumbs={false} showIndicators={false} showArrows={true} interval={1000}>
                  <div>
                    <img src={require ("../components/images/2.jpg")} style={Carousel_1}/>
                </div>
                <div>
                <img src={require ("../components/images/3.jpg")} style={Carousel_1}/>
                </div>
                <div>
                    <img src={require ("../components/images/4.jpg")} style={Carousel_1}/>

                </div>
            </Carousel>



    </div>
    </>
  )
}

export default Banner