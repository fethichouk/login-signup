import React from 'react'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { current } from '../redux/action'
import axios from 'axios'


import { useState } from 'react'
import NavBar from './Navbar/NavBar'
function UserProfile() {
  const dispatch=useDispatch()
  const [products,setProducts] = useState([])
  const token = localStorage.getItem('token')
  const user = useSelector(state=>state.user)
  const getProducts = async()=>{
    try {
      const {data} = await axios.get("http://localhost:5000/products")
      setProducts(data.products)
      console.log("data",data)
      
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
 
    dispatch(current(token))
    getProducts()
   
  }, [token])
  if(!token){
    window.location.href = '/'
  }
  const logOut =()=>{
    localStorage.clear()
    window.location.href = '/'
  }
  return (
    <div>
      <div>
        <NavBar user={user} logOut={logOut}/>
        {/* <div>
         {products.map(el => (
        <ul>
          <img src={el.image} alt=""></img>
            price:{el.price}  <br/><br/>
             description:{el.description} <br/><br/>
            category:{el.category}<br/><br/>
              {/* rating:{el.rating}   */}
          
              
      {/* </ul> 
      ))}   */}
         {/* </div>   */}
      </div>
     
       
    
          
        
    
    
        
    </div>
  )
}

export default UserProfile