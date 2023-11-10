import React from 'react'

const Stats = () => {
  return (

    
    <div id="stat" className='flex xl:justify-evenly xl:p-10  sm:flex-col sm:items-center sm:space-y-8  '>
        

    <div id="stats 2"  >
        <h2 className=' sm:flex sm:items-center sm:justify-center'>160000</h2>
        <span>lines of Code</span>
    </div>
    <div >
        <h2 className=' sm:flex sm:items-center sm:justify-center'>301 783 509</h2>
        <span className=' sm:flex sm:items-center sm:justify-center'>pixels rendered</span>
    </div>
    <div>
        <h2 className=' sm:flex sm:items-center sm:justify-center'>1512</h2>
        <span className=' sm:flex sm:items-center sm:justify-center'>cups of coffee drunk</span>
    </div>
    <div>
        <h2 className=' sm:flex sm:items-center sm:justify-center'>26</h2>
        <span  className='sm:flex sm:items-center sm:justify-center'>projects completed</span>
    </div>
    
    </div>
  
  )
}

export default Stats