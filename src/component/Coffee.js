

const Coffee = () => {


  return (
    <div className='flex justify-center items-center flex-col p-5  text-grayy'>
        <h1 className='text-5xl sm:text-4xl font-serif p-4' >Coffee With Me</h1>
        <p className='p-5 text-xl font-sans  text-silver'>I am always excited to work on some awesome projects, message me and let's discuss over coffee.</p>
        <section className='mr-'>
        <h1 className='font-sans  text-2xl p-4'>Write a message for me below</h1>
        <form >
          <input name="query" type='text'  className=' focus:outline-none bg-gray-300 sm:w-[20rem] w-[32rem] h-14 px-2'></input>
          <button className='p-4 border-r  bg-gray-300 rounded-r-full'>Submit</button>
        </form>
        </section>
    </div>
  )
}

export default Coffee