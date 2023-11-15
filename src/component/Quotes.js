import React from 'react'
import steve from "../util/img/steve-jobs.jpg"

const Quotes = () => {
  return (
    <div className='p-4'  >
        <div className='quote'>
            {/* <h1 className='pt-6' >Inspiring quotes</h1> */}
            <section id="quotesline"  className='flex items-center justify-center flex-col p-2'>
                <img className='rounded-full p-5' src={steve} alt="steveJobs"></img>
               <h2 className='p-7' >"because the people who are crazy enough to think they can
                    change the world<br/> are the ones who do."</h2>
               <p className='p-3'>by <b >Steve Jobs.</b></p>
                
            </section>
        </div>
        

    </div>
  )
}

export default Quotes