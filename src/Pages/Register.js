import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [register, setRegister] = useState({
    regemail: '',
    regpassword: '',
    regconfirmPassword: '',
    isChecked: false
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { regemail, regpassword, regconfirmPassword, isChecked } = register;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (regpassword.toLowerCase() === regconfirmPassword.toLowerCase() && isChecked) {
      localStorage.setItem('registerInfo', JSON.stringify(register));
      alert('user has been registered');
    }else if(regpassword.toLowerCase() === regconfirmPassword.toLowerCase() && !isChecked) {
      alert('Please agree to terms and conditions');
      return
    
    
    }else {
      alert('password must match');
      return
    }
    setRegister({
      regemail: '',
      regpassword: '',
      regconfirmPassword: '',
      isChecked: false
    });
    navigate('/login');
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setRegister({ ...register, [name]: checked });
  };

  return (
    <div>
     <form onSubmit={handleRegisterSubmit}>
    <div className="bg-gradient-to-br from-orange-600 to-pink-500 h-[100vh] w-screen flex items-center ">
   
    <div className='h-3/4 w-[90%] md:w-2/4 bg-white shadow-md m-auto pb-10 flex flex-col items-center rounded-lg'>
   
    <h1 className='py-3 px-12 border inline rounded-lg m-auto mb-4 border-gray-400 mt-4'> CREATE AN ACCOUNT</h1>


  

    <div className='h-full w-3/4 bg-slate-100 pt-8 rounded-lg'>
    <div className='flex flex-col gap-2 pl-6 font-semibold'>
        <label > Email</label> <input type='text' name= 'regemail' value={regemail} onChange={handleChange} placeholder='Enter your email' className='p-3 w-[90%] md:w-1/2 outline-none'/>
        <label className='mt-3'> Password</label> <input type='password' name='regpassword' value={regpassword}  onChange={handleChange} placeholder='Enter your password' className='p-3 w-[90%] md:w-1/2 outline-none'/> 
        <label className='mt-3'> Confirm password</label> <input type='password' name='regconfirmPassword' value={regconfirmPassword} onChange={handleChange} placeholder='Confirm your password' className='p-3 w-[90%] md:w-1/2 outline-none'/>
        
    </div>
    <div className='md:flex gap-3  md:gap-4 mt-3 pl-6'>

    <input type='checkbox' name='isChecked' value={isChecked} onChange={handleCheckboxChange} /> <p>I accept terms and conditions</p>
    </div>
    <button type='submit' className=' ml-5 py-3 px-12 rounded-lg mt-4 text-white bg-blue-400'>Register</button>
    
    

    </div>
   


    </div>

    </div>

</form>
    </div>
   
  )
}

export default Register