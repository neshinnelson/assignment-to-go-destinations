import React, { useState } from 'react'
import './AddPlace.css'

export default function AddPlace(props) {
    const[newPlace,setNewplace]=useState({})
    // handle onChange
    const handleOnchange = (e)=>{
        setNewplace({...newPlace,
            [e.target.name] : e.target.value
        })
    }

    //handle onSublit
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        props.addFunc(newPlace)
    }
  return (
    <div className='AddPlace'>
        <h2>Add New Destination</h2>
        <img src="/remove.png" alt="close" onClick={props.remove}/>
        <form onSubmit={handleOnSubmit} className='addPlace-form'>
           
                <label htmlFor="name">Place:</label>
                <input type="text" name="name" onChange={handleOnchange}/>
           
           
                <label htmlFor="country">Country:</label>
                <input type="text" name="country" onChange={handleOnchange}/>
           
           
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" onChange={handleOnchange}/>
           
           
                <label htmlFor="imgLink">Image:</label>
                <input type="text" name="imgLink" onChange={handleOnchange}/>
           
            <button className='btn-style'>Add</button>
        </form>
    </div>
  )
}
