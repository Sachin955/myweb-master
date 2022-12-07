import React, { useState } from 'react'
import './Cart_LayOut.css'
import { MdDelete } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { Scrollbars } from "react-custom-scrollbars-2";


const Cart_LayOut = ({ data }) => {

    const [project, setProject] = useState(data);
    return (
        <>
            <div className='layoutt-div'>
                <div className='heading'>Shopping Cart</div>
                <div className='main-div'>
                    <div className='left-div'>
                        <Scrollbars>
                            {project.map((curElemt) => {
                                console.log(curElemt)
                                return (
                                    <>
                                        <div className='items-div' key={curElemt.id}>
                                            <img className='left-div-image' src={curElemt.Image} alt='hosi' />
                                            <p className='title-div'>{curElemt.Name}</p>
                                            <div className='amount-div'> ₹ <span>{curElemt.Price}</span>/-</div>
                                            <div className='amount-div'> Qty <span>{curElemt.qty}</span></div>
                                            <div className='amount-div'> Total <span>{curElemt.Price*curElemt.qty}</span></div>


                                            <NavLink className='remove-div' to=''>{<MdDelete />}</NavLink>
                                        </div>
                                        <hr className='line-div'></hr>
                                    </>
                                )
                            })}
                        </Scrollbars>
                    </div>
                    <div className='right-div'>
                        <h1>Subtotal <span>8 items</span></h1>
                        <p> <span> ₹ 1,744.00</span></p>
                        <button className='check-out-btn'> Proceed to Buy</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart_LayOut;