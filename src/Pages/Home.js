import React, { useEffect } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';
import Main from '../Contents/Main'
import Whyus from '../Contents/Whyus'
import WorkOn from '../Contents/WorkOn';
import SocialService from '../Contents/SocialService';
import HowWeWork from '../Contents/HowWeWork';

export default function Home() {
    useEffect(()=>{
        M.AutoInit(); 
    },[])

    return (

        <div class="App">
            <Main />
            <Whyus />
            <WorkOn />
            <SocialService />
            <HowWeWork />
            
        </div>
    )
}
