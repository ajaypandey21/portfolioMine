import React from 'react'
import foot from "../util/img/foot.jpg"

const Footer = () => {
  return (
    <>
     <section id='coffeee' className='pt-4 flex justify-center  items-center '>
      <div className='p-2'>
      <p className='p-5 font-semibold text-lg  text-silver'>No ©️ copyright issues.Feel free to copy.<br/>
         If you need any help, ping me !</p>
      </div>
    
      <div className='p-2'>
      <p className='name'>Ajay Pandey</p>
      </div>
    </section>
    <footer className='flex flex-col justify-center items-center'>
    
        <h1 className='font-serif text-lg'>Made with💓in india</h1>
      <img alt='foot' src={foot}/>

    </footer>

    </>
   
  )
}

export default Footer