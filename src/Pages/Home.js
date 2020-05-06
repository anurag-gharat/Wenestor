import React, { useEffect } from 'react'
import slider1 from '../Images/home1.jpg'
import slider2 from '../Images/home2.jpeg'
import slider3 from '../Images/home3.jpeg'
import FullPageSlider from '../Components/fullPageSlider'
import M from  'materialize-css/dist/js/materialize.min.js';

export default function Home() {

    useEffect(()=>{
        let slider = document.querySelector('.slider');
          M.Slider.init(slider,{
            indicators:false,
            height:500
          });
        },[])

    return (

        <div class="slider">
        <ul class="slides">
            <FullPageSlider image={slider1} title="title one" subtite="title one ki subheading" button="Start Now!" />
            <FullPageSlider image={slider2} title="title one" subtite="title one ki subheading" button="Start Now!" />
            <FullPageSlider image={slider3} title="title one" subtite="title one ki subheading" button="Start Now!" />
        
        </ul>
      </div>
    )
}
