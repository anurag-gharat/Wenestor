import React from 'react'
import Heading from '../Components/Heading'
import Consultants from '../Images/consultants.svg'
import Organizations from '../Images/organizations.svg'


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
                        <h4>01</h4>
                    </div>
                    <div className="row">
                        Register on our platform, post your profile and field of work
                    </div>
                </div>
                <div className="col s4 l4">
                <div className="row">
                        <h4>02</h4>
                    </div>
                    <div className="row">
                    Take up a project which you deem fit to work on 
                    </div> 
                </div>
                
                <div className="col s4 l4">
                <div className="row">
                        <h4>03</h4>
                    </div>
                    <div className="row">
                    Projects related to you will automatically will be redirected towards your dashboard
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row center-align">
                <img src={Organizations} alt="Organizations Image" height="300px"></img>
            </div>
            <div className="row">
                <blockquote><h5>For Organizations</h5></blockquote>
            </div>
            <div className="row">
            <div className="col s6 l6">
                    <div className="row">
                        <h4>01</h4>
                    </div>
                    <div className="row">
                     Register yourselves and post the project you want us to solve
                    </div>
                </div>
                <div className="col s6 l6">
                <div className="row">
                        <h4>02</h4>
                    </div>
                    <div className="row">
                     Our Alpha bot will assign you with relevant consultants to choose from
                    </div> 
                </div>
                
                
            </div>
            </div>
    </section>
    )
}
