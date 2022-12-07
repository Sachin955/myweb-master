import React, { useState } from 'react';
import Navbar from './FrontEnd/Header/Navbar';
import {  Route, Routes  } from 'react-router-dom'
import Home from './FrontEnd/Home';
import Assignment from './FrontEnd/Assignment';
import Contact from './FrontEnd/Contact';
import Cart from './FrontEnd/Cart';
import Project from './FrontEnd/Project';
import data from '../src/BackEnd/data'




function App() {

  const[cartItems,setCartItems]=useState([])
  const[countCartItems,setCountCartItems]=useState(0)
  const onAdd =(item) => {
   const itemExist= cartItems.find((x)=>x.id===item.id)
   if (itemExist){
    setCartItems(cartItems.map((x)=>x.id===item.id ? {...itemExist,qty:itemExist.qty+1}:x ))
   }
   else {
    setCartItems([...cartItems,{...item,qty:1}])

   }
   setCountCartItems(countCartItems+1)

  }
    return (
      <div>
        <Navbar countCartItems = {countCartItems} />
        <Routes>
        
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/Assignments' element={<Assignment/>} />
          <Route exact path='/Contact' element={<Contact/>} />
          <Route exact path="/cart" element={<Cart cartItems={cartItems} data= {data}/>} />
          <Route exact path="/Project" element={<Project data={data} onAdd={onAdd} />} />
        </Routes>  
      </div>
    );
  }

export default App;
