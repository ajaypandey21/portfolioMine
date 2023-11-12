import React from 'react'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    
    <nav >
    <ul id='navbar' className=' cursor-pointer p-5 flex items-center justify-center text-lg font-bold  uppercase text-white space-x-14 sm:hidden ' >
    <li onClick={() => scrollToSection('stat')}>About</li>
        <li onClick={()=> scrollToSection('skill')}>Skills</li>
        <li>Coffee with me</li>
    
    </ul>
    </nav>
  )
}

export default Navbar;