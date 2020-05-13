import React from 'react'



export default function TextBlock(props) {
    return (
        <div className="container center "> 
               <p className="grey-text">{props.text}</p>
        </div>
    )
}
