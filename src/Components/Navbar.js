import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from  'materialize-css/dist/js/materialize.min.js';

export default function Navbar() {

    
    useEffect(()=>{
    let sidenav = document.querySelector('.sidenav');
      M.Sidenav.init(sidenav, {
        draggable:true,
        isFixed:true
      });
    },[])

   

    return (
        <div>
            <nav className="nav-extended white">
            <div className="nav-wrapper">
            <a href="/" className="brand-logo"></a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons green-text darken-4">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/" className="black-text" href="#about">Home</Link></li>
                <li><Link to="/login" className="black-text" href="#whyus">Login</Link></li>
                <li><Link to="/signin" className="black-text" href="#whyus">Register</Link></li>
                     
            </ul>
            </div>      
        </nav>

            <ul className="sidenav" id="mobile-demo">
            <li><Link to="/" className="black-text" href="#about">Home</Link></li>
                <li><Link to="/login" className="black-text" href="#whyus">Login</Link></li>
                <li><Link to="/signin" className="black-text" href="#whyus">Register</Link></li>
            </ul>
        </div>
    )
}
