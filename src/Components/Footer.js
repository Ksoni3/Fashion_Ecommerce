import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-gray-800 py-7 text-blue-600 mb-1">
      <div className="w-[94%] mx-auto  flex justify-between items-center">
        <h1> @ All Copyrights Reserved </h1>
        <ul className="lg:flex items-center gap-6 hidden text-gray-400 w-[30%] ">
          <li className="list-none hover:scale-110 ease-in-out duration-200  ">
            <Link to="/">Home</Link>
          </li>
          <li className="list-none hover:scale-110 ease-in-out duration-200 ">
            <Link to="/products">Products</Link>
          </li>
          <li className="list-none hover:scale-110 ease-in-out duration-300 ">
            <Link to="/about">About</Link>
          </li>
          <li className="list-none hover:scale-110 ease-in-out duration-300 ">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <h1>
          {' '}
          Designed By
          <br /> Kamal Soni
        </h1>
      </div>
    </div>
  )
}

export default Footer
