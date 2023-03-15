import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { HiShoppingCart } from 'react-icons/hi'
import { BiLogIn } from 'react-icons/bi'
import { IoMdPersonAdd } from 'react-icons/io'
import {FiMenu} from 'react-icons/fi'
import {ImCross} from 'react-icons/im'
import { useSelector,useDispatch } from 'react-redux'
import { switchLogin, updateGreeting} from '../redux/userSlice'





const Navbar = () => {

  const dispatch = useDispatch();

    const [mobileMenu,setmobileMenu] = useState(false)
    const total= useSelector((state)=>state.cart.totalQuantity)
    const {greeting,isLoggedIn} = useSelector((state)=>state.user)
    

    const showMenu = ()=>{
        setmobileMenu(!mobileMenu)
    }

    const loginHandler = ()=>{
      dispatch(switchLogin())
      dispatch(updateGreeting())
     
      
      
    }







  return (
    <div>
      <nav className="bg-gray-800 w-screen h-20 py-5">
        <div className="max-w-full  mx-auto  sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">
            <div className="flex items-center">
            <div className=' w-[45px]'>
                {!mobileMenu ? <FiMenu onClick={showMenu} className='block md:hidden ml-[20px] text-white text-2xl'/>: <ImCross onClick={showMenu} className='block md:hidden ml-[20px] text-white' />}
            </div>
              <div className="flex items-center flex-shrink-0 ml-5 md:ml-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <div className="ml-3 text-white text-center ">
                {' '}
                <Link to='/'><h1 className="text-2xl hover:text-gray-500"> Fashion</h1></Link>
              </div>
              </div>
              
            </div>
            <div className='text-white text-xl hidden md:block'>
              <ul  className='flex items-center gap-7 '>
              <li  className="list-none hover:scale-110 ease-in-out duration-200  "><Link to='/'>Home</Link></li>
              <li className="list-none hover:scale-110 ease-in-out duration-200 "><Link to='/products'>Products</Link></li>
              <li className="list-none hover:scale-110 ease-in-out duration-300 "><Link to='/about'>About</Link></li>
              <li className="list-none hover:scale-110 ease-in-out duration-300 "><Link to='/contact'>Contact</Link></li>
              </ul>
            </div>

            <div className="flex items-center gap-5  text-center">
              <Link to ='/login' onClick={loginHandler}  className=" hidden md:flex w-[120px] bg-white text-black px-3 py-2 rounded-md items-center gap-2 ease-in-out duration-500 hover:bg-gradient-to-br from-orange-500 to-pink-500">
                {' '}
                <BiLogIn /> <span>{isLoggedIn ?  "Log Out" : "Log In"}</span>
              </Link>
              <Link to='/register' className=" hidden md:flex w-[100px] bg-white text-black px-3 py-2 rounded-md  items-center gap-2 ease-in-out duration-500  hover:bg-gradient-to-br from-orange-500 to-pink-500">
              {isLoggedIn ? "Hi":<IoMdPersonAdd />} <span>{isLoggedIn ? greeting.substring(0,8):'Register'}</span>
              </Link>
              <Link to='/cart' className="w-[70px] md:w-[100px] px-3 py-1 md:py-2 mr-[20px] bg-white  text-black rounded-md flex items-center gap-2 ease-in-out duration-500  hover:bg-gradient-to-br from-orange-500 to-pink-500">
                {' '}
                <HiShoppingCart className='text-2xl' /> <span className='hidden md:block'>Cart </span> ({total})
              </Link>
            </div>
           
          </div>
        </div>

        <div className={`bg-gray-800 md:hidden mt-[36px] pt-[30px] pb-[50px] transition duration-500 ${!mobileMenu ? 'relative top-[-1000px]' : 'relative'}`}id="mobile-menu">
          <div className="px-4 space-y-1 sm:px-3">
            <Link to="/" onClick={showMenu}
              className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
             Home
            </Link>

            <Link to="/products" onClick={showMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
             Products
            </Link>

            <Link to="/about" onClick={showMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
             About
            </Link>

            <Link to="/contact" onClick={showMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
             Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
