import React from 'react'
import dp from "../util/img/IMG.jpg"
import linkedin from "../util/img/linkedin-48.png"
import github from "../util/img/github-48.png"
import gmail from "../util/img/gmail-48.png"
import insta from "../util/img/insta-48.png"


const Aboutme = () => {
  return (
    <div className='flex items-center justify-center pt-10 sm:flex sm:flex-col'>
        <div className='flex flex-col '>
            <img className='h-[18rem] w-[14rem] rounded-full' alt='profile pic' src={dp}></img>

            <div  className='flex justify-evenly pt-2'>

            <a href="link_to_image_1">
                <img src={insta} alt="Instagram" />
            </a>

            <a href="link_to_image_2">
                <img src={github} alt="Github" />
            </a>

            <a href="link_to_image_3">
                <img src={linkedin} alt="Linkedin" />
            </a>

            <a href="link_to_image_4">
                <img src={gmail} alt="Gmail" />
            </a>

            </div>
            
        </div>
        <div className='pl-14 w-[646px] sm:w-auto sm:flex sm:flex-col sm:p-5 sm:justify-center sm:items-center'>
            <h1 id="head" className=' sm:mb-2'>About me.</h1>
            <p id='paragraph' className="mb-4">
                Hi, I am Ajay Pandey, a 22-year-old Web developer and a Tech enthusiast living in Delhi NCR, India.
                I am a Computer Science Engineer, currently looking for an opportunity.
            </p>

            <p id='paragraph'>
                Have a look at my skills on GitHub or just connect with me on LinkedIn.
                I am always excited to do business with like-minded people, let's discuss over coffee.
            </p>

        </div>
    </div>
  )
}

export default Aboutme