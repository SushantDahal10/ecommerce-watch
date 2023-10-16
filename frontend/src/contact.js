import React, { useState } from 'react';
import { BsSendFill } from 'react-icons/bs';
import { Link,useLocation } from "react-router-dom";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaGithub } from 'react-icons/fa';
export default function Contact() {
  const activeLinkStyle = {
    color: 'black', 
    textDecoration: 'underline',
  };
  const activeLinkcart = {
    color: 'yellow', 
    textDecoration: 'underline',
  };
  const location = useLocation();
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleinput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const storedata = async (e) => {
    e.preventDefault();
    const { name, email, message } = user;
  
    try {
      const response = await fetch("//backendwatchcontcat.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  
          name: name,
          email: email,
          message: message,
        }),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Data submitted successfully:", result);
        window.alert("Successfully sent.");
      } else {
        console.error("Error submitting data:", response.status);
        window.alert("Sending was unsuccessful.");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("An error occurred while sending the data.");
    }
  };
    
  
  
  return (
    <>
    <div className="h-screen overflow-y-auto">
      <section>
        <div className="lg:hidden !visible hidden" id="navbarToggleExternalContent" data-te-collapse-item>
          <div className="block bg-neutral-800 p-6 dark:bg-neutral-600 dark:text-neutral-50">
            <ul className="flex gap-5 text-xl text-white active:text-white fs-5 font-serif">
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
                <li className='hover:text-black cursor-pointer'><AiOutlineShoppingCart></AiOutlineShoppingCart></li>
              </Link>
            </ul>
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
                <li className='hover:text-black cursor-pointer'><AiOutlineShoppingCart></AiOutlineShoppingCart></li>
              </Link>
            </ul>
          </div>
        </nav>

      </section>
      <section className="bg-white dark:bg-gray-900 py-4">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue?Need details about our Business plan? Let us know.</p>
          <form method="POST" className="space-y-8" onSubmit={storedata}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
              <input type="text" id="name" name='name' onChange={handleinput} value={user.name} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know your name" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" name='email' onChange={handleinput} value={user.email} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name='message' onChange={handleinput} value={user.message} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center">
              <span className='text-center' >Send Message</span>
              <span><BsSendFill /></span>
            </button>
          </form>
        </div>
      </section>
      </div>
    </>
  )
}
