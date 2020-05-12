import React, { Children } from 'react'

export default function NoBorderCard(props) {
    return (
        <div className="col l3 s6 center">
           {props.children}
           <p>{props.text}</p>
        </div>
    )
}
