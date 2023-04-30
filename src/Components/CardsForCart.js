import React from 'react'

import { BsFillTrashFill } from 'react-icons/bs'
import { BsPlusCircleFill } from 'react-icons/bs'
import { FaMinusCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import {
  removeFromCart,
  increaseTheProduct,
  decreaseTheProduct,
} from '../redux/cartSlice'

const CardsForCart = ({ item }) => {
  const dispatch = useDispatch()

  const handleRemover = (index) => {
    dispatch(removeFromCart(index))
  }

  const handleIncrease = (index) => {
    dispatch(increaseTheProduct(index))
  }
  const handleDecrease = (index) => {
    dispatch(decreaseTheProduct(index))
  }

  const { id, image, title, category, price, quantity } = item

  return (
    <div>
      <div className="h-48  lg:mt-4 p-3 flex justify-between items-center border relative rounded-md lg:rounded-none  ">
        <div className="w-45%">
          <img
            src={image}
            alt="kamal"
            className=" h-36 lg:h-40 w-24 lg:w-44 rounded-md"
          />
        </div>
        <div className=" w-24 lg:w-[35%] p-2 h-36 lg:h-40 text-xs md:text-base ">
          <h1 className="font-semibold h-[30%] lg:h-auto overflow-hidden">
            {title.length <= 25 ? title : title.substring(0, 20) + '...'}
          </h1>

          <h2 className="text-gray-500 uppercase"> {category}</h2>
          <h2 className="font-semibold pt-2">Price: ${price * quantity}</h2>

          <h3 className="mt-3 lg:mt-5 mb-3 "> In stock</h3>
        </div>
        <div className="mt-8">
          <div className=" relative top-[-20px] h-[100px]  p-2  flex flex-col gap-3 items-center rounded-md ">
            <BsPlusCircleFill onClick={() => handleIncrease(id)} />
            <h1 className="font-bold">{quantity}</h1>
            <FaMinusCircle onClick={() => handleDecrease(id)} />
          </div>
        </div>
        <BsFillTrashFill
          onClick={() => handleRemover(id)}
          className=" hidden lg:block text-lg md:text-2xl lg:right-0 lg:top-[-60px] hover:text-red-800"
        />
      </div>
    </div>
  )
}

export default CardsForCart
