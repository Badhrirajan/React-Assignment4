import React from 'react'

export default function CartBox({data = {},  handleAdd = () => {}, handleDelete = () => {}}) {
  return (<section>
    <div className='container mt-2'>
      <div className='container-fluid'>
    <div className='row'>
    <div className='col-4'>
      <div className='card mb-2' style={{width: "18rem"}}>
        <img src={data.thumbnail} alt="logo" />
        <p><b>Title</b>:{data.title}</p>
        <p><b>Price</b>:{data.price}</p>
        <p><b>Total Cost</b>:{data.quantity * data.price}</p>
        <button className='btn btn-primary' onClick={() => handleAdd(data.id, "dec")}>-</button>
        <p className='text-center'>{data.quantity}</p>
        <button className='btn btn-primary' onClick={() => handleAdd(data.id, "inc")}>+</button>
        <button className='btn btn-danger mt-2' onClick={() => handleDelete(data.id)}>Remove from Cart</button>
      </div>
      </div>
      </div>
      </div>
    </div>    
  </section>                     
  )
}
