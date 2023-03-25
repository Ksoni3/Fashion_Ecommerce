import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiShoppingCart } from 'react-icons/hi'
import { BiLogIn } from 'react-icons/bi'
import { IoMdPersonAdd } from 'react-icons/io'
import { FiMenu } from 'react-icons/fi'
import { ImCross } from 'react-icons/im'
import { useSelector, useDispatch } from 'react-redux'
import { switchLogin, updateGreeting } from '../redux/userSlice'
import { BiSearch } from 'react-icons/bi'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [mobileMenu, setmobileMenu] = useState(false)
 
  const [query, setQuery] = useState('')

  const [filteredProducts, setFilteredProducts] = useState([])
  const total = useSelector((state) => state.cart.totalQuantity)
  const { greeting, isLoggedIn } = useSelector((state) => state.user)

  useEffect(() => {
    handleSearch(query)
  }, [query])

  const handleSearch = (searchTerm) => {
    
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setFilteredProducts(
          data.filter((item) => {
            return (
              searchTerm &&
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
          }),
        )
      } catch (error) {
        console.log(error)
      }
     
    }

    getProducts()
  }



  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase())
  }

  const handleNavigate = (id) => {
    setQuery()
    setTimeout(() => navigate(`/products/${id}`), 1000)
  }

  const handleCross = () => {
    setQuery('')
  }

  

  const showMenu = () => {
    setmobileMenu(!mobileMenu)
  }

  const loginHandler = () => {
    if (isLoggedIn) {
      dispatch(switchLogin())
      dispatch(updateGreeting())
    }
  }

  return (
    <div className="bg-gray-800  h-24 z-40 relative">
      <nav className="bg-gray-800 h-24 py-5">
        <div className="max-w-full  mx-auto  sm:px-6 lg:px-8 ">
          <div className=" flex items-center justify-between pt-2 ">
            <div className="flex items-center">
              <div className=" w-[45px]">
                {!mobileMenu ? (
                  <FiMenu
                    onClick={showMenu}
                    className="block md:hidden ml-[20px] text-white text-2xl"
                  />
                ) : (
                  <ImCross
                    onClick={showMenu}
                    className="block md:hidden ml-[20px] text-white"
                  />
                )}
              </div>
              <div className="flex items-center flex-shrink-0 ml-5 md:ml-0">
                <img
                  className="h-6 w-6 md:h-8 md:w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <div className=" ml-3 md:ml-10  text-white text-center flex justify-center items-center z-50 ">
                  <input
                    className=" w-44 md:w-auto px-2 py-1 md:p-2 rounded-md outline-none text-black "
                    type="text "
                    placeholder="Search Products"
                    value={query}
                    onChange={handleChange}
                  />
                  {query ? (
                    <ImCross
                      onClick={handleCross}
                      className=" text-red-600 relative right-8 cursor-pointer"
                    />
                  ) : (
                    <BiSearch
                      onClick={() => handleSearch(query)}
                      className="text-blue-800 relative right-8 md:right-10 cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="text-white text-xl hidden md:block">
              <ul className="flex items-center gap-7 ">
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
            </div>

            <div className="flex items-center gap-5  text-center">
              <Link
                to="/login"
                onClick={loginHandler}
                className=" hidden md:flex w-[120px] bg-white text-black px-3 py-2 rounded-md items-center gap-2 ease-in-out duration-500 hover:bg-gradient-to-br from-orange-500 to-pink-500"
              >
                {' '}
                <BiLogIn /> <span>{isLoggedIn ? 'Log Out' : 'Log In'}</span>
              </Link>
              {!isLoggedIn ? <Link
                to="/register"
                className=" hidden md:flex w-[100px] bg-white text-black px-3 py-2 rounded-md  items-center gap-2 ease-in-out duration-500  hover:bg-gradient-to-br from-orange-500 to-pink-500"
              >
                {isLoggedIn ? 'Hi' : <IoMdPersonAdd />}{' '}
                <span>
                  Register
                </span>
              </Link>: ''}
              <Link
                to="/cart"
                className="w-[70px] md:w-[100px] px-3 py-1 md:py-2 mr-[20px] bg-white  text-black rounded-md flex items-center gap-2 ease-in-out duration-500  hover:bg-gradient-to-br from-orange-500 to-pink-500"
              >
                {' '}
                <HiShoppingCart className="text-2xl" />{' '}
                <span className="hidden md:block">Cart </span> ({total})
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`bg-gray-800 md:hidden mt-[36px] pt-[30px] pb-[50px] transition duration-500 ${
            !mobileMenu ? 'relative top-[-1000px]' : 'relative'
          }`}
          id="mobile-menu"
        >
          <div className="px-4 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={showMenu}
              className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={showMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Products
            </Link>

            <Link
              to="/about"
              onClick={showMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={showMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            {!isLoggedIn && (
              <Link
                to="/register"
                onClick={showMenu}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Register
              </Link>
            )}
            <Link
              to="/login"
              onClick={() => {
                showMenu()
                loginHandler()
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {isLoggedIn ? 'Log Out' : 'Log In'}
            </Link>

            {greeting.length !== 0 && (
              <p className="text-white text-center py-4">
                {' '}
                You are: {greeting}{' '}
              </p>
            )}
          </div>
        </div>
      </nav>
      {filteredProducts.length > 0 && (
        <div className="w-full md:w-[36%] absolute top-20 bg-gray-800 rounded-lg max-h-screen overflow-x-auto ">
          {filteredProducts.map((item, index) => {
            return (
              <div
                onClick={() => handleNavigate(item.id)}
                key={index}
                className=" text-white p-10 flex justify-center items-center gap-3"
              >
                <img
                  className="w-[30%] h-32 rounded-3xl p-2 "
                  src={item.image}
                  alt={item.title}
                />
                <div className="w-[70%] flex flex-col items-center gap-5">
                  <p className="text-gray-400">
                    {' '}
                    {item.category.toUpperCase()}{' '}
                  </p>
                  <h1 className="w-3/4 mx-auto"> {item.title} </h1>
                  <h2 className="font-bold">$ {item.price}</h2>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Navbar
