import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"; // Removed unnecessary imports
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaGithub } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux'; // Corrected import
import { addToCart } from './cartslice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  






const products = [
  {
    id: 1,
    image: 'https://staticimg.titan.co.in/Titan/Catalog/9308KM01_1.jpg',
    price: 99,
    description: 'Product 1 - High-quality item',
  },
  {
    id: 2,
    image: 'https://wonderfulengineering.com/wp-content/uploads/2020/11/10-best-Smart-Watches-Under-50-3.jpg',
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
    image: 'https://n2.sdlcdn.com/imgs/g/1/8/Meckwell-All-Android-Supported-4G-SDL279080201-1-5188f.jpeg',
    price: 149,
    description: 'Product 4 - Luxury watch',
  },
  
];

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const itemCount = cart.cartItems.reduce((total, cartItem) => total + cartItem.cartQuantity, 0);
    setCartItemCount(itemCount);
  }, [cart.cartItems]);

  const openImagePreview = (product) => {
    setSelectedProduct(product);
  }

  const closeImagePreview = () => {
    setSelectedProduct(null);
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("item added to cart",{
      autoClose:500,
    })
  };

  const activeLinkStyle = {
    color: 'black',
    textDecoration: 'underline',
  };
  const activeLinkcart = {
    color: 'yellow',
    textDecoration: 'underline',
  };

  const imageStyle = {
    maxWidth: '100vw',
    maxHeight: '67vh',
  };

  const imageStyle1 = {
    maxWidth: '100vw',
    maxHeight: '30vh',
  };

  const carouselStyle = {
    maxWidth: '100%',
    maxHeight: '60vh',
  };
  return (
    <div className="h-screen overflow-y-auto">
      <section className="pb-4">
        <div
          className="lg:hidden !visible hidden"
          id="navbarToggleExternalContent"
          data-te-collapse-item
        >
          <div className="block bg-neutral-800 p-6 dark-bg-neutral-600 dark:text-neutral-50">
          <nav
        className="fixed top-0  flex w-full flex-nowrap items-center justify-center white py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark-bg-neutral-600 lg:flex-wrap lg:justify-center lg:py-4"
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

        <Carousel showArrows={true} showStatus={false} showThumbs={false} style={carouselStyle} autoPlay={true} infiniteLoop={true}  interval={2000}>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/003/692/287/original/big-sale-discount-promotion-banner-template-with-blank-product-podium-scene-graphic-free-vector.jpg"
              style={imageStyle}
            alt='sa'/>
          </div>
         <Link to='/premium' style={location.pathname === '/premium' ? activeLinkStyle : {}}> <div>
            <img src="https://i.ytimg.com/vi/Xxj28mMUOQ4/maxresdefault.jpg" style={imageStyle}  alt=''/>
          </div></Link>
          <Link to='/smart' style={location.pathname === '/smart' ? activeLinkStyle : {}}><div>
            <img src="https://i.pinimg.com/originals/99/dc/88/99dc88e11e5cdb212562800d90bcd790.jpg" style={imageStyle} alt=''/>
          </div></Link>
        </Carousel>
        <div className="text-center bg-gray-200 py-4">
          <h2 className="text-3xl font-semibold text-blue-600">
            You may like:
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <div
                onClick={() => openImagePreview(product)}
                className="cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.description}
                  style={imageStyle1}
                />
              </div>
              <p className="text-xl font-semibold text-gray-800">{product.description}</p>
              <p className="text-lg font-medium text-blue-600">${product.price}</p>
              <ToastContainer/>
              <button        onClick={() => handleAddToCart(product)} className="bg-blue-600 text-white text-base font-medium rounded-md py-2 px-4 mt-2 hover:bg-blue-700 hover:text-white">
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
              <img
                src={selectedProduct.image}
                alt={selectedProduct.description}
                style={imageStyle}
              />
           
            </div>
          </div>
        )}
        <div className="text-center bg-gray-200 py-4">
          <h2 className="text-3xl font-semibold text-blue-600">
            Different Wears:
          </h2>
        </div>
<div className="flex flex-wrap justify-center">
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="relative group">
      <img
        src="https://timefection.com/wp-content/uploads/2019/12/Chronoswiss-luxury-watches.jpg"
        alt="Image 1"
        className="w-full h-80 object-cover"
      />
      <div className="bg-black opacity-0 group-hover:opacity-60 absolute inset-0"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Link to="/premium" style={location.pathname === '/premium' ? activeLinkcart : {}}> <button className="text-white text-xl font-semibold mb-2 bg-transparent hover:bg-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Shop Now</button></Link>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="relative group">
      <img
        src="https://static.standard.co.uk/2020/12/15/18/cheap-smart-watches-0.jpg?width=1200&width=1200&auto=webp&quality=75"
        alt="Image 2"
        className="w-full h-100 object-cover"
      />
      <div className="bg-black opacity-0 group-hover:opacity-60 absolute inset-0"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
     <Link to="/smart"> <button className="text-white text-xl font-semibold mb-2 bg-transparent hover:bg-blue-500 hover-text-white py-2 px-4 border border-blue-500 hover-border-transparent rounded">Shop Now</button></Link>
      </div>
    </div>
  </div>
</div>
<footer className="bg-gray-800 text-white text-center py-4">
      <div className="container mx-auto">
      <p>
          &copy; {new Date().getFullYear()} Watches wear. All rights reserved.
        </p>
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

      </section>
    </div>
  );
}

export default App;
