import React from 'react'

const Navbar = () => {
  return (
    <nav >
    <ul id='navbar' className='p-5 flex items-center justify-center text-lg font-bold  uppercase text-white space-x-14 sm:hidden ' >
        <li onClick="scrollToSection('stat')"> About</li>
        <li>Skills</li>
        <li>Coffee with me</li>
    
    </ul>
    </nav>
  )
}

export default Navbar;