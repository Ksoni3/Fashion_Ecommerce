import React from 'react'

import {BsFillTrashFill} from 'react-icons/bs'
import {BsPlusCircleFill} from 'react-icons/bs'
import {FaMinusCircle} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { removeFromCart,increaseTheProduct, decreaseTheProduct } from '../redux/cartSlice';

const CardsForCart = ({item}) => {
    const dispatch = useDispatch();

    const handleRemover =(index)=>{
        dispatch(removeFromCart(index))
    }

    const handleIncrease=(index)=>{
        dispatch(increaseTheProduct(index))

    }
    const handleDecrease=(index)=>{
        dispatch(decreaseTheProduct(index))

    }

    const {id, image,title, category, price,quantity} = item;


  return (
    <div>
       
        <div className='h-48 col-span-1 md:mt-4 flex justify-around items-center border relative '>
            <div>
                <img src={image} alt='kamal' className='max-h-[140px] w-[60%] md:w-auto ml-4 md:ml-0 rounded-md'/>
            </div>
            <div className='w-[200px] mt-6 md:mt-2 text-xs md:text-base'>
                
                <h1 className='font-semibold '>{(title.length <= 60 )? title : title.substring(0,60) + '...'}</h1>

                <h2 className='text-gray-500 uppercase'> {category}</h2>
                <h2  className='font-semibold pt-2'>Price: ${price*quantity}</h2>

                <h3 className='mt-3 md:mt-8 mb-3 '> In stock</h3>
            </div>
            <div className='mt-8'>
                <div className=' relative top-[-20px] h-[100px]  p-2  flex flex-col gap-3 items-center rounded-md '>
                  <BsPlusCircleFill onClick={()=>handleIncrease(id)}/>
                  <h1 className='font-bold'>{quantity}</h1>
                  <FaMinusCircle onClick={()=>handleDecrease(id)}/>

                </div>
            </div>
            <BsFillTrashFill onClick={()=>handleRemover(id)} className='text-lg md:text-2xl relative right-56 md:right-0 -top-12 md:top-[-60px] hover:text-red-800'/>
            
                
            
           

            </div>


        </div>
  )
}

export default CardsForCart