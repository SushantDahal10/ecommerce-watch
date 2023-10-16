import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './cart.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaGithub  } from 'react-icons/fa';
import { removefromcart, clearcart } from './cartslice';
import { decreasecart, increasecart } from './cartslice';
import './App.css';
export default function Cart() {
  const location = useLocation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [cartItemCount, setCartItemCount] = useState(0);


  useEffect(() => {
    const itemCount = cart.cartItems.reduce((total, cartItem) => total + cartItem.cartQuantity, 0);
    setCartItemCount(itemCount);
  }, [cart.cartItems]);

  const cartTotalAmount = cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.cartQuantity,
    0
  );

  const handleremove = (cartItem) => {
    dispatch(removefromcart(cartItem));
  };

  const activeLinkStyle = {
    color: 'black',
    textDecoration: 'underline',
  };

  const activeLinkcart = {
    color: 'yellow',
    textDecoration: 'underline',
  };

  const decreaseqty = (cartItem) => {
    dispatch(decreasecart(cartItem));
  };

  const increaseqty = (cartItem) => {
    dispatch(increasecart(cartItem));
  };

  const handleclearcart = () => {
    dispatch(clearcart());
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div
          className="lg:hidden !visible hidden"
          id="navbarToggleExternalContent"
          data-te-collapse-item
        >
          <div className="block bg-neutral-800 p-6 dark-bg-neutral-600 dark:text-neutral-50">
          <nav
        className="relative flex w-full flex-nowrap items-center justify-center white py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark-bg-neutral-600 lg:flex-wrap lg:justify-center lg:py-4"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-center px-3">
          <ul className="flex gap-5 text-xl text-neutral-500 active:text-white fs-5 font-serif">
          <a href="https://github.com/SushantDahal10" target="_blank" rel="noopener noreferrer">
    <li className="hover:text-black cursor-pointer">
      <FaGithub size={20} /> GitHub
    </li>
  </a>
            <Link to="/" style={location.pathname === '/' ? activeLinkStyle : {}}>
              <li className='hover:text-black cursor-pointer'>Home</li>
            </Link>
            <Link to="/premium" style={location.pathname === '/premium' ? activeLinkStyle : {}}>
              <li className='hover:text-black cursor-pointer'>Premium Watches</li>
            </Link>
            <Link to="/smart" style={location.pathname === '/smart' ? activeLinkStyle : {}}>
              <li className='hover:text-black cursor-pointer'>Smart Watches</li>
            </Link>
            <Link to="/contact" style={location.pathname === '/contact' ? activeLinkStyle : {}}>
              <li className='hover:text-black cursor-pointer'>Contact</li>
            </Link>
            <Link to="/cart" style={location.pathname === '/cart' ? activeLinkcart : {}}>
              <li className='hover:text-black cursor-pointer'>
                <div style={{ position: 'relative' }}>
                  <AiOutlineShoppingCart></AiOutlineShoppingCart>
                  {cartItemCount > 0 && (<div className="cart-item-count">
        {cartItemCount}
      </div>)}
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
          </div>
        </div>
        <nav
        className="relative flex w-full flex-nowrap items-center justify-center white py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark-bg-neutral-600 lg:flex-wrap lg:justify-center lg:py-4"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-center px-3">
          <ul className="flex gap-5 text-xl text-neutral-500 active:text-white fs-5 font-serif">
          <a href="https://github.com/SushantDahal10" target="_blank" rel="noopener noreferrer">
    <li className="hover:text-black cursor-pointer">
      <FaGithub size={20} /> GitHub
    </li>
  </a>
            <Link to="/" style={location.pathname === '/' ? activeLinkStyle : {}}>
              <li className='hover:text-black cursor-pointer'>Home</li>
            </Link>
            <Link to="/premium" style={location.pathname === '/premium' ? activeLinkStyle : {}}>
              <li className='hover:text-black cursor-pointer'>Premium Watches</li>
            </Link>
            <Link to="/smart" style={location.pathname === '/smart' ? activeLinkStyle : {}}>
              <li className='hover:text-black cursor-pointer'>Smart Watches</li>
            </Link>
            <Link to="/contact" style={location.pathname === '/contact' ? activeLinkStyle : {}}>
              <li className='hover:text-black cursor-pointer'>Contact</li>
            </Link>
            <Link to="/cart" style={location.pathname === '/cart' ? activeLinkcart : {}}>
              <li className='hover:text-black cursor-pointer'>
                <div style={{ position: 'relative' }}>
                  <AiOutlineShoppingCart></AiOutlineShoppingCart>
                  {cartItemCount > 0 && (<div className="cart-item-count">
        {cartItemCount}
      </div>)}
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </nav>

    <div className="cart-container">
    
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty</p>
          <div className="start-shopping">
            <Link to="/">
              <AiOutlineArrowLeft />
              <span>start shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.image} alt={cartItem.description} />
                  <div>
                    <h3>{cartItem.description}</h3>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>handleremove(cartItem)}>remove</button>
                  </div>
                </div>
                <div className="cart-productprice">${cartItem.price}</div>
                <div className="cart-quantity">
                  <button onClick={()=>{
                    decreaseqty(cartItem)
                  }}>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={()=>{
                    increaseqty(cartItem)
                  }} >+</button>
                </div>
                <div className="total-price">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="summary">
            <button className="clear-cart" onClick={()=>handleclearcart()}>clear cart</button>
            <div className="pay">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cartTotalAmount}</span>
              </div>
              <button>Pay</button>
              <div className="continue-shopping">
                <Link to="/">
                  <AiOutlineArrowRight />
                  <span>continue shopping</span>
                </Link>
              </div>
            </div>
          </div>
       
        </div>

        
      )}
      
    </div>
    <footer className="bg-gray-800 text-white text-center py-2"> {/* Reduce the py-2 value */}
  <div className="container mx-2">
    <p>
      &copy; {new Date().getFullYear()} Watches wear. All rights reserved.
    </p>
    <div className="mt-2 flex justify-center"> {/* Reduce the margin top and add margin to the bottom */}
      <a href="https://www.facebook.com">
        <FaFacebook size={32} className="mr-4" />
      </a>
      <a href="https://www.twitter.com">
        <FaTwitter size={32} className="mr-4" />
      </a>
      <a href="https://www.instagram.com">
        <FaInstagram size={32} className="mr-4" />
      </a>
      <a href="https://www.linkedin.com/in/sushant-dahal-821b63251/">
        <FaLinkedin size={32} />
      </a>
    </div>
  </div>
</footer>
    </div>
  );
}
