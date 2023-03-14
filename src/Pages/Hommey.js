import React from 'react';
import Hrithik from '../Assets/hrithik72.jpg';
import Products from './Products';
import { Link } from 'react-router-dom';

const Hommey = () => {
    
      return (
        <div>
          <div className="bg-gradient-to-br from-orange-600 to-pink-500 h-screen flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 md:w-9/12 m-auto p-5 overflow-hidden">
              <div className="flex flex-col items-center md:items-start text-white font-serif leading-relaxed md:mt-0 py-5 md:py-24 md:px-20 shadow-2xl">
                <h1 className="text-3xl md:text-5xl mb-2">Begin this summer!!!</h1>
                <h2 className="text-xl md:text-3xl mb-4">With Style</h2>
                <button to="/products" className="bg-white text-black h-12 w-48 md:w-64 rounded-md mt-4 md:mt-8 ease-in-out duration-300 hover:bg-gray-700 hover:text-white">
                  <Link to="/products">Shop Now</Link>
                </button>
              </div>
              <div className="flex justify-center">
                <img className="w-full md:w-auto h-auto md:h-full rounded-md" src={Hrithik} alt="Hrithik" />
              </div>
            </div>
          </div>
        </div>


      )
    }
    
    
    

export default Hommey;


