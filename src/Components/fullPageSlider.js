import React from 'react'

export default function fullPageSlider(props) {
    return (
        <li>
        <img src={props.image} /> 
        <div className="caption center-align p-50 ">
          <h1>{props.title}</h1>
          <h5 className="light grey-text text-lighten-3">{props.subtitle}</h5>
          <button className=" button-primary m-t-10">{props.button}</button>
        </div>
      </li>
    )
}
