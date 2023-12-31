import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useCart } from './CartContext'
import CartBox from './CartBox';

export default function Cart() {
  const { cart = [], setCart = () => {}, handleQuantity = () => {}, handleDeleteToCart = () => {}} = useCart();

  function totalPrice(){
    let totalAmount = 0;
    let itemCopy = [...cart];
    itemCopy.forEach((data) => {
      totalAmount += data.price * data.quantity
    })
    return totalAmount;
  }
  const navigate = useNavigate()

  function handleCheckout(){
    alert("Thanks for puchasing with us!! Keep Supporting")
    navigate("/")
    setCart([])
  }

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
    <div className='container-fluid mt-2'>
      <div className='row'>
        <div className='col-8 d-flex flex-wrap gap-2'>
        {
          cart.map((data, i) => 
          <CartBox key={`cart-item-${i}`} data={data} handleAdd={handleQuantity} handleDelete={handleDeleteToCart}/>
          )}
          </div>
          <div className='col-2'>
            <div className='card'>
              <div class="card-header">
                Total Amount
              </div>
              <div class="card-body">
                <h6 class="card-title">Cart Price: {totalPrice()}</h6>
                <button class="btn btn-primary" onClick={() => handleCheckout()}>Click here to Checkout</button>
                </div>  
            </div>
          </div>
        </div>  
      </div>
    </div>    
  )
}
