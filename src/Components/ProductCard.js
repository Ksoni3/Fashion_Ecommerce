import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const { image, title, description, price, category } = product;

  return (
    <>
      <div className="bg-gradient-to-br from-orange-600 to-pink-500 min-h-screen flex justify-center items-center">
        <div className="max-w-6xl w-full h-[60%] bg-white p-10 grid grid-cols-1 lg:grid-cols-3  md:gap-10">
          <div className=" h-[50%] md:h-auto lg:col-span-1  shadow-2xl rounded-3xl p-5 flex justify-center">
            <img
              src={image}
              alt="ada"
              className="h-1/2 rounded-md object-cover object-center ease-in-out duration-500 hover:scale-105"
            />
          </div>
          <div className="-mt-32 md:mt-0 lg:col-span-2 shadow-2xl rounded-3xl flex items-center">
            <div className="w-full m-auto text-center pt-5 py-3 flex flex-col items-center gap-2">
              <h3 className="text-gray-400 uppercase">{category}</h3>
              <h2 className="text-lg font-sans font-bold">{title}</h2>
              <p className="p-3 shadow-black rounded-sm w-full h-32 lg:h-40 overflow-x-auto">
                {description}
              </p>
              <button className="bg-slate-100 p-2">Rating:</button>

              <div className="mt-3 p-3 w-full lg:w-2/3 flex flex-col lg:flex-row items-center lg:justify-between gap-2">
                <h1 className="text-2xl font-bold">${price}</h1>
                <div className=" w-full md:w-auto flex items-center gap-3 md:gap-2">
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="text-xl w-3/4 lg:w-auto p-2 rounded-md border border-gray-200 text-white bg-blue-500"
                  >
                    Add to cart
                  </button>
                  <button className="text-xl w-3/4 lg:w-auto p-2 rounded-md border border-gray-200 hover:bg-gradient-to-br from-orange-600 to-pink-500">
                    Buyy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
