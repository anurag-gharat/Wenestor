import React from 'react'
import Heading from '../Components/Heading'
import Consultants from '../Images/landing2.svg'

export default function HowWeWork() {
    return (
    <section className="section">
        <div className="container">
            <Heading heading="How we work?"></Heading>
        </div>
        <div className="container">
            <div className="row center-align">
                <img src={Consultants} alt="Consultants Image" height="300px"></img>
            </div>
            <div className="row">
                <blockquote><h5>For Consultants</h5></blockquote>
            </div>
            <div className="row">
            <div className="col s4 l4">
                    <div className="row">
                        01
                    </div>
                    <div className="row">
                        Register on our platform, post your profile and field of work
                    </div>
                </div>
                <div className="col s4 l4">
                <div className="row">
                        02
                    </div>
                    <div className="row">
                    Take up a project which you deem fit to work on 
                    </div> 
                </div>
                
                <div className="col s4 l4">
                <div className="row">
                        03
                    </div>
                    <div className="row">
                    Projects related to you will automatically will be redirected towards your dashboard
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
