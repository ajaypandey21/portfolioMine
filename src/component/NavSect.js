import React, { useEffect, useState } from 'react';
import img from "../util/img/clouds.png";
import plane from "../util/img/plane.gif";
import { about,vowelcheck } from '../helper';
import { useMediaQuery } from 'react-responsive';

const NavSect = () => {
  
  const isXlScreen = useMediaQuery({ minWidth: '767px', maxWidth: '1369px' });
  const isSmScreen = useMediaQuery({ minWidth: '250px', maxWidth: '767px' });
  

  const [item,setitem] = useState("...")
  const divStyle = {
    ...(isXlScreen && {
      backgroundImage: `url(${img})`,
      marginLeft: '1.25rem',
      marginRight: '1.25rem',
      height: '38rem',
      backgroundRepeat: 'repeat',
      backgroundSize: 'contain',
    }),
    ...(isSmScreen && {
      marginLeft: '0',
      marginRight: '0',
      
      
    }),
  };
  useEffect(()=>{
    let currentindex=0;

    const inter = setInterval(()=>{
          if(currentindex < about.length){
            let currItem= about[currentindex]
            currentindex++;
            if(currentindex === about.length){
              currentindex=0
            }
            setitem(currItem)
        }},2000)
    return()=>{
      clearInterval(inter)
      
    } 
  },[]
  )



  return (
    
<div id='nav-div' className='sm:bg-blue-500' style={divStyle}   >

<nav >
 <ul id='navbar' className='p-5 flex items-center justify-center text-lg font-bold  uppercase text-white space-x-14 sm:hidden ' >
     <li> About</li>
     <li>Skills</li>
     <li>Coffee with me</li>
 
 </ul>
</nav>
<section className='  sm:p-[2rem]  flex flex-col items-center justify-center'>

    <img className='sm:hidden' alt='p' src={plane}></img>

    <span id='title'  className='font-medium text-white sm:text-5xl  text-7xl' >Ajay Pandey</span><br/>

    <span className='designation  xl:text-white sm:text-xl xl:text-2xl xl:mt-4 font-bold sm:font-light sm:text-white sm:mt-1  '>
    I am {vowelcheck(item)} <span className='font-mono text-white text-3xl sm:text-xl'>{item}.</span> 
    </span><br />

    <button className=' border bottom-1 rounded-full text-white p-3 mt-2'>COFFEE WITH ME</button>

</section>

</div>
        
    

  );
};

export default NavSect;

