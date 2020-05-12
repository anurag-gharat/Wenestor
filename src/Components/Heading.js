import React from 'react'

const Heading = (props) => {
    return (
        <div className="row center">
            <h1 className={props.color}>{props.heading}</h1>
        </div>
    )
}
export default Heading
