import React from 'react'

const Coffee = () => {
  return (
    <div className='flex justify-center items-center flex-col p-5  text-grayy'>
        <h1 className='text-5xl sm:text-4xl font-serif'>Coffee With Me</h1>
        <p className='p-5 text-xl font-sans  text-silver'>I am always excited to work on some awesome projects, message me and let's discuss over coffee.</p>
        <section className='mr-'>
        <h1 className='font-sans  text-lg pt-4'>Write a message for me below</h1>
        <input className=' focus:outline-none bg-gray-300 sm:w-[20rem] w-[32rem] h-14 px-2'></input>
        </section>
    </div>
  )
}

export default Coffee