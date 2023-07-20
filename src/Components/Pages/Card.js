import React, { useState } from 'react'


export default function Pagecard({data = {}, handleAdd = (e) => {}, handleDelete = () => {}}) { 

  return (
    <div className="col mt-3 mb-3">
                    <div className="card h-100">
                        <img className="card-img-top" src={data.thumbnail} alt="product-image"/>
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h5 className="fw-bolder"><p>{data.title}</p></h5>
                                <p><b>Description</b>: {data.description}</p>
                                <span className="text-center"><p><b>Price</b>: ${data.price}</p></span>
                            </div>
                        </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={() => handleAdd(data)}>Add to Cart</button></div>
                            </div>
                    </div>
                </div>    
  )
}
