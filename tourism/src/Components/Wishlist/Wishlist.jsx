import React, { useContext, useEffect, useState } from 'react'
import './wishlist.css'
import WishlistItem from '../WishlistItem/WishlistItem'

export default function Wishlist(props) {
    const[myWishlist,setMyWishlist]=useState([])

    useEffect(()=>{
        setMyWishlist(props.wishlistArray)
    },[props])

  return (
    <div className='wishlist'>
        <h2>Wishlist</h2>

        <div className='wishlist-list'>
            {
                myWishlist.length > 0 ?
                myWishlist.map(item=>(
                    <WishlistItem key={item.name} 
                    img={item.imgLink}
                    place={item.name}
                    country={item.country}
                    remove={()=>props.remove({type:'remove',item:item.id})}/>
                )) 
                :
                <p>Add Places to visit</p>
            }
         
        </div>
        
    </div>
  )
}
