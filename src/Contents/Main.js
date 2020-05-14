import React from 'react'
import Landing from '../Images/landing1.svg'
import { Link } from 'react-router-dom'

export default function Main() {
    return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col s12 l6 m12 p-t-100 left-align">
                            <h2 className="logo">WENESTER</h2>
                            <p className="grey-text">An organization aimed at providing guidance in sustaining businesses through professionals who are best in the industry.</p>
                            <Link to="/login" className="button-primary hoverable">Start Now!</Link>
                        </div>
                        <div className="col s12 m12 l6">
                            <img alt="landing img" src={Landing} />
                        </div>
                    </div>
                </div>
            </section>
    )
}
