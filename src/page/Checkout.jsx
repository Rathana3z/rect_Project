import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Componets/NavBar.js";
import PayPalButton from "../Componets/PayPalButton";

const Cartout = () => {

  const dispatch = useDispatch();
  const {items, totalAmount} = useSelector((state) => state.cart)
  
  // useEffect(() =>{},[dispatch, tot])
  
  
  return (

    <>
    
    <div className="container my-5">
    {/* <NavBar /> */}
      <div className="row">
        {/* Left Section: Cart Details */}
        {
          items.length === 0 ?(<p>Empty</p>) : (
            items.map((product) =>(
              <div className="col-md-8">
          <h5 className="mb-4">BAG</h5>
          <div className="d-flex border p-3">
            {/* Image */}
            <img
              src={product.image}
              alt="Jordan Mars 270"
              className="img-fluid me-3"
              style={{ width: "100px" }}
            />
            {/* Details */}
            <div className="flex-grow-1">
              <h6 className="mb-1"> {product.title} </h6>
              <p className="mb-1 text-muted">Men's Shoe</p>
              <p className="mb-1 text-muted">Black/Metallic Gold/Black/Anthracite</p>
              <p className="mb-1 text-muted">Size 12 | Quantity 1</p>
              <button className="btn btn-link text-decoration-none p-0 me-3">Move to Favourites</button>
              <button className="btn btn-link text-decoration-none p-0 text-danger">Remove</button>
            </div>
            {/* Price */}
            <div>
              <h6 className="mb-0">$ {product.price * product.quantity} </h6>
            </div>
          </div>
        </div>
            ))
          )
        }

        {/* Right Section: Summary */}
        <div className="col-md-4">
          <div className="border p-3">
            <h5 className="mb-4">SUMMARY</h5>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>${totalAmount}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Estimated Delivery & Handling</span>
              <span>$0.00</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Taxes</span>
              <span>$0.00</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold mb-4">
              <span>Total</span>
              <span>$210.00</span>
            </div>
            <button className="btn btn-outline-dark w-100 mb-2">Guest Checkout</button>
            <button className="btn btn-dark w-100 mb-3">Member Checkout</button>
            <button className="btn btn-light w-100 border">
              <img
                src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
                alt="PayPal"
                className="me-2"
                style={{ height: "20px" }}
              />
              PayPal
            </button>
          </div>
        </div>
      </div>

      <PayPalButton />
    </div>
    </>
  );
};

export default Cartout;
