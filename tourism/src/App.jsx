
import { createContext, useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import PlaceList from './Components/PlaceList/PlaceList'
import Wishlist from './Components/Wishlist/Wishlist'
import AddPlace from './Components/AddPlace/AddPlace'

export const MyContext = createContext()

function App() {
  const[places,setPlaces]=useState([
    {
        id:121,
        name:'Joshua Tree National Park',
        country:'USA',
        description:"Joshua Tree is an outdoor lover's delight, from nature trails to glorious sunsets overlooking the desert speckled with cacti. Even if you're more of a glamper, you can enjoy the painted landscape from the window of your luxury AirBnB rental or resort.",
        imgLink:'https://hips.hearstapps.com/hmg-prod/images/sunrise-at-joshua-tree-national-park-royalty-free-image-1693353373.jpg?crop=0.446xw:1.00xh;0.347xw,0&resize=980:*'
    },
    {
        id:212,
        name:'Lake Como',
        country:'Italy',
        description:"Whether you're curious to know why this dazzling lake is a summer go-to for celebrities or hoping to spot a few in person, the beauty of Lake Como speaks for itself. Surrounded by the foothills of the Italian Alps, this Y-shaped lake often receives guests on day trips from Milan. Head here to take in views of extravagant palaces, ornate villas, and all nature has to offer.",
        imgLink:'https://hips.hearstapps.com/hmg-prod/images/statue-in-villa-monastero-overlooking-lake-como-royalty-free-image-1693287213.jpg?crop=0.449xw:1.00xh;0.143xw,0&resize=980:*'
    },
    {
        id:113,
        name:'Bagan',
        country:'Myanmar',
        description:"The ancient city of Bagan is a Unesco World Heritage sight, with plenty of sacred structures to take in and learn about. Hot air ballooning is one of the most famous and novel ways to see it, drawing in visitors from around the globe. Floating high above ancient Buddhist temples and pagodas might be the most convincing reason to forget about your fear of heights for a while.",
        imgLink:'https://hips.hearstapps.com/hbu.h-cdn.co/assets/17/23/bagan-burma.jpg?crop=1xw:0.9998233839632639xh;center,top&resize=980:*'
    },
    {
        id:454,
        name:'Banff National Park',
        country:'Canada',
        description:"The best time to see the Marvel Lake's vibrant turquoise hue—created by sunlight reflecting off the rock floor—is July and August. But Banff is also home to three world-class ski resorts and is lovely during the winter.",
        imgLink:'https://hips.hearstapps.com/hmg-prod/images/most-beautiful-places-in-the-world-gettyimages-1042549972.jpg?crop=0.9996296296296295xw:1xh;center,top&resize=980:*'
    }
    
])

const[wishlist,setWishlist]=useState([])

//handle new place
const handleAddPlace = (place)=>{
  console.log(place);
  const id = Math.round(Math.random()*1000)
  place.id = id
  const updated = [...places,place]
  setPlaces(updated)
  console.log(place);
  console.log(updated);
}

//handle wishlist
const handleWishlist = (action)=>{

 if(action.type==='add'){

  const exist = wishlist.find(item=>item.id === action.item.id)
  
  if(exist) return alert('Already added')
  const updated = [...wishlist,action.item]
  setWishlist(updated)
 }else if(action.type==='remove'){
  const updated = wishlist.filter(item=>item.id !== action.item)
  setWishlist(updated)
 }
}
console.log(wishlist);

  return (
    <>
      <NavBar addNewPlace={handleAddPlace}/>
      <PlaceList placesArray={places} addItem={handleWishlist}/>
      <Wishlist wishlistArray={wishlist} remove={handleWishlist}/>
     
    </>
  )
}

export default App
