import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
            {props.children}
            
            </div>
            <div className="card-content">
            <p>{props.text}</p>
            </div>
        </div>
    )
}
