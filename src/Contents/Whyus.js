import React from 'react'
import Card from '../Components/Card'
import {FaClipboardCheck,FaRobot,FaUsers} from 'react-icons/fa'
import {GiRelationshipBounds,GiTeacher} from 'react-icons/gi'
import {RiCustomerService2Line} from 'react-icons/ri'



export default function Whyus() {
    return (
        <section className="section">
        <div className="container">
        <div className="row ">
            <div className="col l4 s6 m4  ">
                <Card text="Customer Centric">
                    <FaUsers className="display-1" />
                </Card>
            </div>
            <div className="col l4 s6 m4">
                <Card text="Best in support">
                    <RiCustomerService2Line className="display-1"/>
                </Card>
            </div>
            <div className="col l4 s6 m4">
                <Card text="Experienced Professionals">
                    <GiTeacher className="display-1 white-text"/>
                </Card>
            </div>
        </div>
        <div className="row">
        <div className="col l4 s6 m4">
                <Card text="Alpha Bot">
                    <FaRobot className="display-1"/>
                </Card>
            </div>
            <div className="col l4 s6 m4">
                <Card text="Quality Focus">
                <FaClipboardCheck className="display-1"/>

                </Card>
            </div>
            <div className="col l4 s6 m4">
                <Card text="Longterm Relationships">
                    <GiRelationshipBounds className="display-1"/>
                </Card>
            </div>
        </div>
        </div>
        </section>
    )
}
