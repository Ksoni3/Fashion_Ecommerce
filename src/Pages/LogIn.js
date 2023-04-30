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
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
    if (localStorage.length === 0) {
      toast.error('Email address couldnt be found')
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
        toast.success('Logged In Succesfully')
        dispatch(updateLogIn())
        dispatch(updateGreeting())
        dispatch(resetUserInfo())
        navigate('/')
      } else {
        toast.error('Invalid login credentials')
        return
      }
    } else {
      toast.error('Please fill up forms')
      return
    }
  }

  return (
    <div className="bg-gradient-to-br from-orange-600 to-pink-500 h-[90vh] flex justify-center items-center ">
      <div className="w-[90%] lg:w-2/4 bg-white shadow-md flex flex-col gap-4 items-center rounded-lg py-10">
        <h1 className=" font-bold text-xl rounded-lg text-center">
          {greeting ? `Hello ${greeting}` : ' Welcome '}
        </h1>

        <div className="w-3/4 bg-slate-100 py-4 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col pl-6 font-semibold">
              <label> Email</label>{' '}
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                className="p-3 w-[90%] md:w-1/2 outline-none rounded-md"
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
                className="p-3 w-[90%] md:w-1/2 outline-none rounded-md"
              />{' '}
              <a href="/" className="font-normal underline text-blue-800">
                I forgot my password
              </a>
            </div>
            <div className=" w-3/4 mt-2 flex flex-col md:flex-row gap-3 md:gap-5 pl-6">
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
      <ToastContainer />
    </div>
  )
}

export default LogIn
