import React from 'react'
import './PlaceContainer.css'


export default function PlaceContainer(props) {
    
  return (
    <div className='PlaceContainer-container'>

        <div className="PlaceContainer-img"
        style={{backgroundImage:`url(${props.img})`}}>
        </div>

        <div className="PlaceContainer-details">
            <h4>{props.place}</h4>
            <h5>Country : {props.country}</h5>
            <p>{props.description}</p>

            <div className="PlaceContainer-visitBtns ">
                <button onClick={props.onClick} className='btn-style'>Add To List</button>
            </div>
        </div>

    </div>
  )
}
