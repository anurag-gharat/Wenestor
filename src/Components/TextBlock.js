import React from 'react'



export default function TextBlock(props) {
    return (
        <div className="container center "> 
               <p className="white-text">{props.text}</p>
        </div>
    )
}
