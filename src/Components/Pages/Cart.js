import React from 'react'
import {Link} from 'react-router-dom'
import { useCart } from './CartContext'
import CartBox from './CartBox';

export default function Cart() {
  const { cart = [], handleQuantity = () => {}, handleDeleteToCart = () => {}} = useCart();
  return (
    <div>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
            <img className="image" src="./Images/Logo.png" alt="logo" style={{width: "80px"}}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <Link to="/"><li className="nav-link">Home</li></Link>
                    </ul>
                    <form className="d-flex">
                    <Link to="/cart"><button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
                        </button></Link>
                    </form>
            </div>
        </div>   
    </nav>
    </div>
    <div className='container'>
      <div className='continer-fluid'>
      <div className='row d-flex flex-wrap justify-content-center align-items-center'>
        <div className='col-6'>
        {
          cart.map((data, i) => 
          <CartBox key={`cart-item-${i}`} data={data} handleAdd={handleQuantity} handleDelete={handleDeleteToCart}/>
          )}
          </div>
        </div>  
      </div>
    </div>
    </div>
  )
}
