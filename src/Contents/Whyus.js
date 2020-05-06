import React from 'react'
import Card from '../Components/Card'
import {FaHandshake} from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'
import {GrUserExpert} from 'react-icons/gr'



export default function Whyus() {
    return (
        <section className="section">
        <div className="container">
        <div className="row">
            <div className="col l4 s6 m4">
                <Card text="Customer centric">
                    <FaHandshake />
                </Card>
            </div>
            <div className="col l4 s6 m4">
                <Card text="Best in support">
                    <FiPhoneCall />
                </Card>
            </div>
            <div className="col l4 s6 m4">
                <Card text="Experienced Professionals">
                    <GrUserExpert />
                </Card>
            </div>
        </div>
        <div className="row">

        </div>
        </div>
        </section>
    )
}
