import React from 'react'
import { Link } from 'react-router-dom'
import {
  setUserInfo,
  resetUserInfo,
  updateGreeting,
  updateLogIn,
} from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userInfo = useSelector((state) => state.user.userInfo) || {
    email: '',
    password: '',
  }
  const { email, password } = userInfo
  const greeting = useSelector((state) => state.user.greeting)
  


  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(setUserInfo({ ...userInfo, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(localStorage.length===0){
      alert('Email address couldnt be found')
      return
    }
    const { email, password } = userInfo
    if (email && password) {
      const { regemail, regpassword } = JSON.parse(
        localStorage.getItem('registerInfo'),
      )
      if (
        email.toLowerCase() === regemail.toLowerCase() &&
        password === regpassword
      ) {

        alert('Logged In Succesfully')
        dispatch(updateLogIn())
        dispatch(updateGreeting())
        dispatch(resetUserInfo())
        navigate('/')
      } else {
        console.log(password,regpassword)
        alert('Invalid login credentials')
        return
      }
    } else {
      alert('Please fill up forms')
      return
    }
  }

  return (
    <div>
      <div className="bg-gradient-to-br from-orange-600 to-pink-500 h-screen w-screen flex items-center ">
        <div className="h-3/4 w-[90%] md:w-2/4 bg-white shadow-md m-auto pb-10 flex flex-col items-center rounded-lg">
          <h1 className="py-3 px-12 border inline rounded-lg m-auto border-gray-400">
            {' '}
            {greeting ? `Hello ${greeting}` : ' Welcome '}
          </h1>

          <div className="h-3/4 w-3/4 bg-slate-100 pt-8 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 pl-6 font-semibold">
                <label> Email</label>{' '}
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  className="p-3 w-[90%] md:w-1/2 outline-none"
                  value={email}
                  onChange={handleChange}
                />
                <a href="/" className="font-normal underline text-blue-800">
                  I forgot my email
                </a>
                <label className="mt-6"> Password</label>{' '}
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handleChange}
                  className="p-3 w-[90%] md:w-1/2 outline-none"
                />{' '}
                <a href="/" className="font-normal underline text-blue-800">
                  I forgot my password
                </a>
              </div>
              <div className=" w-3/4 flex flex-col md:flex-row gap-3 md:gap-5 pl-6">
                <button 
                  type="submit"
                  className="py-3 px-12 rounded-lg mt-4 text-white bg-blue-400"
                >
                  {' '}
                  Log In
                </button>

                <Link
                  to="/register"
                  className="py-3 px-12 rounded-lg mt-4 border border-gray-700 bg-white"
                >
                  {' '}
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
     
    </div>
  )
}

export default LogIn
