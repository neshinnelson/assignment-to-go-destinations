import React from 'react'
import './WishlistItem.css'

export default function WishlistItem(props) {
  return (
    <div className='WishlistItem'>
        <img src={props.img} alt="place" />
        <h5>{props.place}</h5>
        <h6>{props.country}</h6>
        <button onClick={props.remove} className='btn-style'>Remove</button>
    </div>
  )
}
