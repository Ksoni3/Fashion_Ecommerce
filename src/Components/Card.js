import React from 'react'
import { Link, useActionData } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';






const Card = ({singleData}) => {
  const dispatch= useDispatch();

  const {id,title, image, price} = singleData;
  return (
    <div>
      <div className='col-span-1 h-32rem w-[90%] m-auto text-center flex flex-col items-center '> 
         <div className='bg-white h-[200px] w-[90%] rounded-lg flex justify-center items-center'>
          <Link to={`/products/${id}`} ><img src={image} alt={title} className='h-[150px]  w-[70%] ml-5'/></Link>
        </div>
        <div>
        <h2 className='mt-2'>{title.substring(0,15)+ '...'}</h2>
        <h2 className='my-2 font-bold'>${price}</h2>
        <button onClick={()=>dispatch(addToCart(singleData))} className='bg-blue-500 text-white h-[40px] w-[100px] rounded-md'>Add To Cart</button>
       
        </div>
      </div>
    </div>
  );
}

export default Card;
