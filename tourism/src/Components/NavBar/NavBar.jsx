import React, { useState } from 'react'
import './navBar.css'
import AddPlace from '../AddPlace/AddPlace'

export default function NavBar(props) {
  const[show,setShow]=useState(false)
  return (
    <div className='navBar-container'>

        <ul>
            <div className='navBar-siteName'>
                <li>
                    <h1>Travel</h1>
                </li>
            </div>
            <div className='navBar-rightEnd' onClick={()=>setShow(true)}>
                    <li>Add a Destination <img src="/add.png" alt="add new destination" /></li>
                    {/* <li>Remove a destination <img src="/remove.png" alt="remove destination" /></li> */}
            </div>
        </ul>
        {show && <AddPlace addFunc={props.addNewPlace} remove={()=>setShow(false)}/>}
    </div>
  )
}
