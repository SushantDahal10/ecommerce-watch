

import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"; // Removed unnecessary imports
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaGithub  } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux'; // Corrected import
import { addToCart } from './cartslice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const imageStyle = {
  maxWidth: '100vw',
  maxHeight: '27vh',
};
const activeLinkStyle = {
  color: 'black', 
  textDecoration: 'underline',
};

const activeLinkcart = {
  color: 'yellow',
  textDecoration: 'underline',
};
const products = [
  {
    id: 1,
    image: 'https://staticimg.titan.co.in/Titan/Catalog/9308KM01_1.jpg',
    price: 99,
    description: 'Product 1 - High-quality item',
  },
  {
    id: 2,
    image: 'https://tse4.mm.bing.net/th?id=OIP.yQJtWlUohWp42n9ADelAhwHaHa&pid=Api&P=0&h=180',
    price: 79,
    description: 'Product 2 - Stylish and affordable',
  },
  {
    id: 3,
    image: 'https://staticimg.titan.co.in/production/India/Titan/detail/NK1584SL04.jpg',
    price: 129,
    description: 'Product 3 - Premium selection',
  },
  {
    id: 4,
    image: 'https://tse4.mm.bing.net/th?id=OIP.5YzVOEknFumNodrkcv_9pgHaHa&pid=Api&P=0&h=180',
    price: 149,
    description: 'Product 4 - Luxury watch',
  },
  {
    id: 5,
    image: 'https://tse2.mm.bing.net/th?id=OIP.bHwFwlkFwkhdTZ_JIMDrVwHaHa&pid=Api&P=0&h=180',
    price: 149,
    description: 'Product 4 - Luxury watch',
  },
  {
    id: 6,
    image: 'https://tse4.mm.bing.net/th?id=OIP.CUEy6o5gBjglwx08uzgW5AHaIq&pid=Api&P=0&h=180',
    price: 149,
    description: 'Product 4 - Luxury watch',
  },
  {
    id: 7,
    image: 'https://tse4.mm.bing.net/th?id=OIP.7Vdj5qNJvjGoNDtaTZ48eAHaNj&pid=Api&P=0&h=180',
    price: 149,
    description: 'Product 4 - Luxury watch',
  },
  {
    id: 8,
    image: 'https://tse2.mm.bing.net/th?id=OIP.Ff89FacuX7ZlJW6ViIzs-AHaHa&pid=Api&P=0&h=180',
    price: 149,
    description: 'Product 4 - Luxury watch',
  },
  {
    id: 9,
    image: 'https://tse4.mm.bing.net/th?id=OIP.de6bAFLgfrtLLHLwGzF1BwHaHa&pid=Api&P=0&h=180',
    price: 149,
    description: 'Product 4 - Luxury watch',
  },
  {
    id: 10,
    image: 'https://tse3.mm.bing.net/th?id=OIP.uBrLFGX9_ppDTkwJO3S9kgHaHa&pid=Api&P=0&h=180',
    price: 149,
    description: 'Product 4 - Luxury watch',
  },
  {
    id: 11,
    image: 'https://tse2.mm.bing.net/th?id=OIP.QJzY1WhKVHiAKsgZQhP6ewHaIr&pid=Api&P=0&h=180',
    price: 149,
    description: 'Product 4 - Luxury watch',
  },
  {
    id: 12,
    image: 'https://tse3.mm.bing.net/th?id=OIP.sfOtcfBssaU8vbOJ3qUg7gHaHa&pid=Api&P=0&h=180',
    price: 149,
    description: 'Product 4 - Luxury watch',
  },
  
  

];

export default function Premium() {
  const location = useLocation();
  const dispatch=useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
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
  const openImagePreview = (product) => {
    setSelectedProduct(product);

  }
  const [imageLoaded, setImageLoaded] = useState(true);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const closeImagePreview = () => {
    setSelectedProduct(null);
  }
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("item added to cart",{
      autoClose:500,
    })

  };

  return (
    <>
      <div className="h-screen overflow-y-auto">
        <section className="pb-4">
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

        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <div onClick={() => openImagePreview(product)} className="cursor-pointer">
              {!imageLoaded && <div>Loading...</div>}
                <img src={product.image} alt={product.description} style={imageStyle}    onLoad={handleImageLoad} 
                  onError={() => setImageLoaded(false)} />
              </div>
              <p className="text-xl font-semibold text-gray-800">{product.description}</p>
              <p className="text-lg font-medium text-blue-600">${product.price}</p>
              <ToastContainer />
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-600 text-white text-base font-medium rounded-md py-2 px-4 mt-2 hover:bg-blue-700 hover:text-white"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div
            onClick={closeImagePreview}
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-60 z-50"
          >
            <div className="bg-white p-4 rounded-lg shadow-md">
            {!imageLoaded && <div>Loading...</div>}
              <img src={selectedProduct.image} alt={selectedProduct.description} style={imageStyle}    onLoad={handleImageLoad} 
                  onError={() => setImageLoaded(false)} />
            
             
            </div>
          </div>
        )}

        <footer className="bg-gray-800 text-white text-center py-4">
          <div className="container mx-auto">
            <p>&copy; {new Date().getFullYear()} Watches wear. All rights reserved.</p>
            <div className="mt-4 flex justify-center">
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
    </>
  );
}