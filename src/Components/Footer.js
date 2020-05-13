import React from 'react'
import {Link} from 'react-router-dom'
import {GrInstagram,GrTwitter,GrFacebookOption} from 'react-icons/gr'

 
export default function Footer() {
    return (
            <footer className="center  blue-grey darken-2 white-text m-t-10">
                    <div className="row p-10  no-mar">
                        <div className="col l12 s12 left-align">
                            <ul className="footer-link">
                                <li><Link className="white-text" to="#">Home</Link></li>
                                <li><Link className="white-text" to="#">About</Link></li>
                                <li><Link className="white-text" to="#">Policy</Link></li>
                                <li><Link className="white-text" to="#">Login</Link></li>
                                <li><Link className="white-text" to="#">Signup</Link></li>
                            </ul>
                        </div>
                        <div className="divider"></div>
                        </div>
                        <div className="row m-t-10">
                           <div className="col l6   s12 center-align m-t-10">
                               <h6>WENESTER</h6>
                               <p>An organization aimed at providing guidance in sustaining businesses through professionals who are best in the industry.</p>
                            </div>
                            <div className=" col l6 s12   social-links m-t-10  " >
                         
                            <GrFacebookOption className="display-4"/>
                            <GrInstagram  className="display-4"/>
                            <GrTwitter  className="display-4"/>
                           
                            </div> 
                        </div>
                    <div className="row no-mar center blue-grey darken-4 white-text" >
                        <p>COPYRIGHT 2020 &copy;| ALL RIGHTS RESERVED</p>
                    </div>
            </footer>
    )
}
