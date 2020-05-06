import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from  'materialize-css/dist/js/materialize.min.js';

export default function Navbar() {

    
    useEffect(()=>{
    let sidenav = document.querySelector('.sidenav');
      M.Sidenav.init(sidenav, {
        draggable:true,
        edge:"right" 
      });
    },[])

   

    return (
        <div>
            <nav className="nav-extended white">
            <div className="nav-wrapper">
            <a href="/" className="brand-logo"></a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons green-text darken-4">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link className="black-text" href="#about">ABOUT</Link></li>
                <li><Link className="black-text" href="#whyus">WHY US?</Link></li>
                <li><Link className="black-text" href="#whyus">WHY US?</Link></li>
                <li><Link className="black-text" href="#whyus">WHY US?</Link></li>     
            </ul>
            </div>      
        </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link className="black-text" href="#about">ABOUT</Link></li>
                <li><Link className="black-text" href="#whyus">WHY US?</Link></li>
                <li><Link className="black-text" href="#whyus">WHY US?</Link></li>
                <li><Link className="black-text" href="#whyus">WHY US?</Link></li>    
            </ul>
        </div>
    )
}
