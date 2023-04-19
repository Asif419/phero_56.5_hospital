import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import { Bars4Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='hospitalContainer'>
      <div className='relative bg-slate-900 py-2 px-5 rounded-lg flex justify-between items-center'>
        {/* Logo & Brand name */}
        <Link to='/'>
          <div className='flex justify-center items-center gap-2'>
            <FontAwesomeIcon className='text-2xl h-20 w-20' icon={faHospital} />
            <p className='text-4xl font-extrabold'>Hospital</p>
          </div>
        </Link>

        {/* navbar for lg screen */}
        <nav className='hidden lg:flex gap-3 text-2xl font-bold'>
          <NavLink to='/services'
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Services
          </NavLink>
          <NavLink to='/departments'
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Departments
          </NavLink>
          <NavLink to='/doctors'
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Doctors
          </NavLink>
          <NavLink to='/about'
            className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
          <NavLink to='/contact'
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact Us
          </NavLink>
        </nav>
        {/* navbar for sm screen */}
        <div className='lg:hidden'>
          <button>
            <Bars4Icon onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-8 w-8 text-blue-500" />
          </button>
        </div>
        {isMenuOpen && (
          <div className='absolute top-0 left-0 w-full bg-slate-800 text-white z-10'>
            <div className='p-5 border rounded shadow-sm'>
              {/* Logo & Button section */}
              <div className='flex items-center justify-between mb-4'>
                <div>
                  <Link to='/' className='inline-flex items-center'>
                    <FontAwesomeIcon className='text-2xl h-10 w-10' icon={faHospital} />
                    <span className='ml-2 text-xl font-bold tracking-wide uppercase'>
                      Hospital
                    </span>
                  </Link>
                </div>
                {/* Dropdown menu close button */}
                <div>
                  <button
                    aria-label='Close Menu'
                    title='Close Menu'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <XMarkIcon className='w-5 text-gray-600' />
                  </button>
                </div>
              </div>
              {/* Mobile Nav Items Section */}
              <nav>
                <ul className='space-y-4'>
                  <li>
                    <Link to='/'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/services'
                      className='font-medium tracking-wide text-white transition-colors duration-200 hover:text-blue-400'
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/departments'
                      className='font-medium tracking-wide text-white transition-colors duration-200 hover:text-blue-400'
                    >
                      Departments
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/doctors'
                      className='font-medium tracking-wide text-white transition-colors duration-200 hover:text-blue-400'
                    >
                      Doctors
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/about'
                      className='font-medium tracking-wide text-white transition-colors duration-200 hover:text-blue-400'
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/contact'
                      className='font-medium tracking-wide text-white transition-colors duration-200 hover:text-blue-400'
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )
        }
        {/* <div>
            <XMarkIcon className="h-8 w-8 text-blue-500" />
          </div> */}
      </div >
    </div >
  );
};

export default Header;