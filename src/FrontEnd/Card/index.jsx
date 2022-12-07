import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"


function Card({ data, onAdd, product }) {
    console.log(product)

    
    return (
        <>
      
            {product.map((item) => {
                return (
                    <>
                        <div className='main_card'>
                            <div className='cards'  >
                                <div className='card'>
                                    <img src={item.Image} alt="mypic" className='card_img' />
                                    <div className='card_info'>
                                        <span className='card_cat'>{item.Category}</span>
                                        <h3 className='card_titel'>{item.Name}</h3>
                                        <span className='Project_price'>{item.Price}</span>
                                        <NavLink className='btt' to='/cart' >
                                            <button className='bttn'>Buy Now</button>
                                        </NavLink>
                                        <button className='bttn' onClick={() => onAdd(item)}>
                                            Add To Cart
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )
            })}

        </>
    )
}

export default Card;