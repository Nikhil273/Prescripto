/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  const naviGate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => naviGate('/')} src={`${assets.logo}`} alt="" className='w-44 cursor-pointer' />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden ' />
        </NavLink >
        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div className='flex items-start gap-4'>
        {
          token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base  font-m text-gray-800 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => naviGate('/my-profile')} className='hover text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => naviGate('/my-appointments')} className='hover text-black cursor-pointer'>My Appointments</p>
                  <p onClick={() => setToken(false)} className='hover text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => naviGate('/login')} className='bg-primary text-white py-3 px-8 rounded-full font-light hidden md:block '>Create Account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
        {/* Mobile menu */}

        <div className={` ${showMenu ? 'fixed w-full' : "h-0 w-0"} md:hidden top-0 right-0 bottom-0 overflow-hidden bg-white transition-all`}>

          <div className='flex justify-between py-6 mt-5 items-center'>
            <img className='w-36' src={assets.logo} alt="" />
            <img className='w-7' onClick={() => { setShowMenu(false) }} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-5 font-medium mt-5 px-5'>
            <NavLink onClick={() => { setShowMenu(false) }} to='/'>
              <li>HOME</li>
            </NavLink>
            <NavLink onClick={() => { setShowMenu(false) }} to='/doctors'>
              <li>ALL DOCTORS</li>
            </NavLink>
            <NavLink onClick={() => { setShowMenu(false) }} to='/about'>
              <li>ABOUT</li>
            </NavLink>
            <NavLink onClick={() => { setShowMenu(false) }} to='/contact'>
              <li>CONTACT</li>
            </NavLink>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar