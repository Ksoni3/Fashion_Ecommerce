import React from 'react'

import CardsForCart from '../Components/CardsForCart'
import { useSelector } from 'react-redux'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const total = useSelector((state) => state.cart.totalQuantity)
  const subTotal = useSelector((state) => state.cart.subTotal)
  


  return (
    <>
      <div className="bg-gradient-to-br from-orange-600 to-pink-500 h-auto md:h-screen w-screen pb-20 md:pb-0 flex justify-between items-center">
        <div className="h-full w-full md:flex justify-center items-center gap-10">
          <div className="bg-white rounded-md h-auto m-auto md:m-0  md:h-[80%] w-[90%] md:w-[50%] mt-10 md:mt-0  p-10 text-center">
            <h1 className="text-lg font-bold">YOUR ITEMS IN THE CART ({total})</h1>
            <div className="h-[90%] w-[100%] md:w-auto grid grid-cols-1 gap-3 mt-3 items-center md:overflow-scroll ">
              { !total ?<div className=' pt-4 md:-mt-32 pb-10 h-auto flex flex-col items-center justify-center'>
                <h1 className='md:text-2xl mb-6 md:mb-10'> Your cart is empty</h1>
                <Link to='/products' className="w-full md:w-[70%] px-3 py-1 md:py-2 h-12 mr-[20px] bg-blue-400 text-white text-lg rounded-md  flex justify-center items-center gap-2 ease-in-out duration-500 ">
                <FaArrowLeft className='text-2xl' /> <span>Continue Shoping </span>
              </Link>
                
            
            

              </div>:cartItems.map((item) => {
                return <CardsForCart key={item.id} item={item} />
              }) 



              }
            </div>
          </div>
          <div className="bg-white rounded-md h-[80%]  w-[90%]  md:w-[30%] m-auto md:m-0 mt-10 md:mt-0 flex justify-center items-center">
            <div className=" bg-slate-100 h-auto md:h-[80%] w-[80%]  p-5 shadow-lg rounded-lg flex flex-col gap-4">
              <h1 className="text-2xl font-bold"> Order Summary</h1>
              <hr />
              <h2 className="text-gray-500"> SubTotal: <span className='relative right-0'>${subTotal.toFixed(2)}</span></h2>
              <hr />
              <h2 className="text-gray-500"> Shipping Estimate: <span>{subTotal === 0 ? '0' : '15 (For all purchases)'}</span></h2>
              <hr />

              <h2 className="text-gray-500"> Tax Estimate: <span >${(0.13*subTotal).toFixed(2)}</span></h2>
              <hr />
              <h1 className="text-2xl font-bold"> Order Total: {(subTotal + 0.13 * subTotal + (subTotal === 0 ? 0 : 15)).toFixed(2)}</h1>

              <hr />
              <button className="w-[90%] py-4 bg-blue-500 text-white font-medium rounded-md">
                {' '}
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
