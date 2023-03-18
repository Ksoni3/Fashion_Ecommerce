import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductCardLoading = () => {
  return (
    <>
    <div className='grid items-center'>
       <div className=' grid grid-cols-3 p-20 gap-6 h-[800px]'>
       <div className='col-span-1'>
      
    <Skeleton height={400} width={300}/>
    
        </div>
        <div className='col-span-2 mt-5'>
        
    <Skeleton height={30}/>
    <Skeleton height={40}/>
    <Skeleton height={120}/>
    <Skeleton height={30}/>
    <Skeleton height={120}/>
    
  
   

        </div>
       </div>
    </div>
 
   
 
    
 
   
 
   
    
      
      
    </>
   )
  
}

export default ProductCardLoading