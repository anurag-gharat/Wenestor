import React, { useState, useEffect } from 'react'
import Heading from '../Components/Heading'
import { Link } from 'react-router-dom'


export default function Login() {
    
    const [values,setValues]=useState({
        email:"",
        password:"",
    })
    const {email,password}= values
    const [role,setRole]=useState("Consultant")
    
    const activeRole="btn light-blue lighten-1 "
    const inactiveRole="btn btn-flat "

    const handleRole=(e)=>{
        e.preventDefault()
        setRole(e.target.name)
    }
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
       
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(values)
    }

    return (
        <div className="row ">
            <div className="container">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="row">
                    <div className="container ">
                        <Heading heading="LOGIN" />
                    </div>
                    <div className="col s12 l6 offset-l3 center">
                        <div className="group ">
                            <button name="Consultant" className={role==="Consultant"?activeRole:inactiveRole} onClick={(e)=>handleRole(e)} >As a Consultant</button>
                            <button name="Business" className={role==="Business"?activeRole:inactiveRole} onClick={(e)=>handleRole(e)} >As a Business</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l6 offset-l3">
                        <div className="input-field">
                            <input 
                            name="email"
                            id="email"
                            type="email"
                            className="validate"
                            onChange={(e)=>handleChange(e)}
                            >
                            </input>
                            <label htmlFor="email">Your Email Address</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l6 offset-l3">
                        <div className="input-field">
                            <input 
                            name="password"
                            id="password"
                            type="password"
                            className="validate"
                            onChange={(e)=>handleChange(e)}
                            >
                            </input>
                            <label htmlFor="password">Your Password</label>
                        </div>
                    </div>
                </div>
                <div className="row center-align">
                    <button type="submit" className="btn light-blue lighten-1 waves-effect">Submit</button>
                </div>



                </form>
            </div>    
            <div className="row center">
                <Link to="/signup" >Become a member?</Link>
            </div>
        </div>
    )
}
