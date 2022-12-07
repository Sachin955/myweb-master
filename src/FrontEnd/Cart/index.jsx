import React from 'react'
import Cart_LayOut from './Cart_LayOut'
import './index.css'
const Cart = ({ cartItems }) => {
  return (
    <div>
      {
        cartItems.length === 0 ? <div>
          <img className='empty-cart-image' src='Images/cart.gif' alt='cart'  />
          </div> : <div><Cart_LayOut data={cartItems} /></div>
      }



    </div>

  )
}

export default Cart

