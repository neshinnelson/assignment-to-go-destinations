import React, { useContext, useEffect, useState } from 'react'
import './PlaceList.css'
import PlaceContainer from '../PlaceContainer/PlaceContainer'

export default function PlaceList(props) {
  const [placeList,setPlaceList]=useState([])

  useEffect(()=>{
    setPlaceList(props.placesArray)
  },[props])
  
  return (
    <div className="placelist">
      <h2 className='heading'>Most Beautiful Places in the World</h2>

      <div className='PlaceList-container'>
      {
        placeList.length > 0 ?

        placeList.map((item)=>(
          
            <PlaceContainer key={item.name}
            img={item.imgLink}
            place={item.name}
            country={item.country}
            description={item.description.slice(0,150) + '...'}
            onClick={()=>props.addItem({type:'add',item:item})}/>
        ))
        :
        <PlaceContainer/>
      }
      </div>
    
    </div>
  )
}
