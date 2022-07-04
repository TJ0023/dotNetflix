import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth} from '../context/AuthContext'

const Navbar = () => {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async() => {
    try {
      await logOut();
      navigate('.Netflix');
    } catch (error) {
      console.log(error);
    }
  }


  //console.log(user.email)
  // Basically conditional buttons 
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='.Netflix'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>.NETFLIX</h1>
      </Link>


    {user?.email ? (  
    <div>
        <Link to='/account'>
            <button className='text-white pr-4 '>Account</button>
        </Link>
            <button onClick={handleLogout} className='transition ease-in duration:300 bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-red-800'>
              Log Out
            </button>
        </div>
        ) : (
      <div>
          <Link to='/login'>
              <button className='text-white pr-4 '>Sign In</button>
          </Link>
  
          <Link to='/signup'> 
              <button className='transition ease-in duration:300 bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-red-800'>
                Sign Up
                </button>
          </Link>
          </div>
        ) }
  
    </div>
  )
}

export default Navbar