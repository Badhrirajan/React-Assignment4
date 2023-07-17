import React from 'react'

export default function CartBox({data = {},  handleAdd = () => {}}) {
  return (
    <div className="card h-50 mb-2">
      <div>
        <img src={data.thumbnail} alt="logo" width="50%"/>
      </div>
      <div className='row'>
        <p>Title:{data.title}</p>
      </div>
      <div className='row'>
        <p>Description:{data.description}</p>
      </div>
      <div className='row'>
        <p>Price:{data.price}</p>
      </div>
      <div className='row'>
        <p>Total Cost:{data.quantity * data.price}</p>
      </div>
      <button className='btn btn-primary' onClick={() => handleAdd(data.id, "dec")}>-</button>
      <p>{data.quantity}</p>
      <button className='btn btn-primary' onClick={() => handleAdd(data.id, "inc")}>+</button>
    </div>
                       
  )
}
