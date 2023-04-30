import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const [register, setRegister] = useState({
    regemail: '',
    regpassword: '',
    regconfirmPassword: '',
    isChecked: false,
  })

  const navigate = useNavigate()

  const { regemail, regpassword, regconfirmPassword, isChecked } = register

  const handleChange = (e) => {
    const { name, value } = e.target
    setRegister({ ...register, [name]: value })
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    if (
      regpassword.toLowerCase() === regconfirmPassword.toLowerCase() &&
      isChecked
    ) {
      localStorage.setItem('registerInfo', JSON.stringify(register))
      toast.success('User has been registered.')
      setRegister({
        regemail: '',
        regpassword: '',
        regconfirmPassword: '',
        isChecked: false,
      })
      navigate('/login')
    } else if (
      regpassword.toLowerCase() === regconfirmPassword.toLowerCase() &&
      !isChecked
    ) {
      toast.error('Please agree to terms and conditions.')
      return
    } else {
      toast.error('Password and Confirm password should match.')
      return
    }
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setRegister({ ...register, [name]: checked })
  }

  return (
    <div className="bg-gradient-to-br from-orange-600 to-pink-500 h-[100vh] w-screen flex items-center">
      <div className="w-[90%] md:w-2/4 bg-white shadow-md m-auto pb-10 flex flex-col items-center rounded-lg">
        <h1 className="py-6 text-center font-bold text-lg ">
          {' '}
          CREATE AN ACCOUNT
        </h1>

        <form className="w-full" onSubmit={handleRegisterSubmit}>
          <div className="h-full w-3/4 bg-slate-100 rounded-lg mx-auto py-8">
            <div className="flex flex-col pl-6 font-semibold">
              <label> Email</label>{' '}
              <input
                type="text"
                name="regemail"
                value={regemail}
                onChange={handleChange}
                placeholder="Enter your email"
                className="p-3 w-[90%] md:w-1/2 outline-none rounded-md"
              />
              <label className="mt-3"> Password</label>{' '}
              <input
                type="password"
                name="regpassword"
                value={regpassword}
                onChange={handleChange}
                placeholder="Enter your password"
                className="p-3 w-[90%] md:w-1/2 outline-none rounded-md"
              />
              <label className="mt-3"> Confirm password</label>{' '}
              <input
                type="password"
                name="regconfirmPassword"
                value={regconfirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="p-3 w-[90%] md:w-1/2 outline-none rounded-md"
              />
            </div>
            <div className="flex gap-1 lg:gap-3 mt-3 pl-6">
              <input
                type="checkbox"
                name="isChecked"
                value={isChecked}
                onChange={handleCheckboxChange}
              />{' '}
              <p>I accept terms and conditions</p>
            </div>
            <button
              type="submit"
              className=" ml-5 py-3 px-12 rounded-lg mt-4 text-white bg-blue-400"
            >
              Register
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  )
}

export default Register
