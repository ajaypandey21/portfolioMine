import React from 'react'
import html from "../util/img/html-icon.svg"
import css from "../util/img/css-icon.svg"
import js from "../util/img/javascript.svg"
import react from "../util/img/react-js-icon.svg"
import python from "../util/img/python.svg"
import django from "../util/img/django-icon.svg"

const Skills = () => {
  return (
    <>
      <h1 id="skill" className=' head text-center  p-5'>SKILLS</h1>
    <div className='grid pb-5'>
        <img src={html}  alt='HTML'></img>
        <img src={css} alt='CSS'></img>
        <img src={js} alt='JavaScript'></img>
        <img src={react} alt='React'></img>
        <img src={python} alt='Python'></img>
        <img src={django} alt='Django'></img>
        
    </div>
    </>
     
  )
}

export default Skills