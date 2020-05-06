import React from 'react'

export default function fullPageSlider(props) {
    return (
        <li>
        <img src={props.image} /> 
        <div class="caption center-align">
          <h3>{props.title}</h3>
          <h5 class="light grey-text text-lighten-3">{props.subtitle}</h5>
          <button>{props.button}</button>
        </div>
      </li>
    )
}
