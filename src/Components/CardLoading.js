import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardLoading = () => {
  return (
   <>
   <SkeletonTheme baseColor='rgb(100 116 139)'>
   <Skeleton height={250} />
   </SkeletonTheme>

   <SkeletonTheme baseColor='gray'>
   <Skeleton height={250} />
   </SkeletonTheme>

   <SkeletonTheme baseColor='gray'>
   <Skeleton height={250} />
   </SkeletonTheme>

   <SkeletonTheme baseColor='gray'>
   <Skeleton height={250} />
   </SkeletonTheme>

  

  
   
     
     
   </>
  )
}

export default CardLoading