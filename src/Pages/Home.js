import React, { useEffect } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';
import Slider from '../Contents/Slider'
import About from '../Contents/About'
import parallaximg1 from '../Images/parallax1.jpg'
import Whyus from '../Contents/Whyus'
import Parallax from '../Components/Parallax'
import WorkOn from '../Contents/WorkOn';

export default function Home() {
    useEffect(()=>{
        M.AutoInit(); 
    },[])

    return (

        <div class="App">
            <Slider />
            <About />
            <Whyus />
            <Parallax img={parallaximg1}/>
            <WorkOn />
            
        </div>
    )
}
