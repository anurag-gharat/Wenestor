import React from 'react'

export default function Card(props) {
    return (
        <div className="card-panel blue lighten-1 white-text p-10 z-depth-3">
            <div className="card-image center">
              {props.children}
            </div>
            <div className="card-content center">
            <p>{props.text}</p>
            </div>
        </div>
    )
}
