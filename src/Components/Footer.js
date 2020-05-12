import React from 'react'
import {Link} from 'react-router-dom'
import {GrInstagram,GrTwitter,GrFacebookOption} from 'react-icons/gr'

 
export default function Footer() {
    return (
            <footer className="center no-mar blue-grey darken-2 white-text">
                    <div className="row no-mar">
                        <div className="col l8 left-align">
                            <ul className="footer-link">
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">Home</Link></li>
                            </ul>
                        </div>
                        <div className="col l4 right-align">
                            <ul className="footer-link">
                                <li><GrFacebookOption className="display-4"/></li>
                                <li><GrInstagram  className="display-4"/></li>
                                <li><GrTwitter  className="display-4"/></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="row no-mar center blue-grey darken-4 white-text" >
                        <p>COPYRIGHT 2020 &copy;| ALL RIGHTS RESERVED</p>
                    </div>
            </footer>
    )
}
