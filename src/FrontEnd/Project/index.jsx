import React, { useState } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import Card from '../Card'
import './index.css'

const Project = ({ data, onAdd }) => {
  const [product, setProduct] = useState(data)

  const searchProduct = (item) => {

    const result = data.filter((x) => {
      return x.Category === item
    })
    // console.log(result)
    setProduct(result)
  }
  



  return (
    <div>
      <div className='main-div'>
        <div className='left-div'>
          <Scrollbars>
            <Card data={data} onAdd={onAdd} product={product} />
          </Scrollbars>
        </div>
        <div className='right-div'>
          <button className='btn' onClick={() => { searchProduct("MCA Project") }}>Mca</button>
          <button className='btn' onClick={() => { searchProduct("BCA Project") }}>BCA</button>
          <button className='btn' onClick={() => { searchProduct("MBA Project") }}>MBA</button>
          <button className='btn' onClick={()=>{setProduct(data)} }>All</button>

        </div>

      </div>


    </div>
  )
}

export default Project