import React, { useEffect, useState } from 'react'
import steve from "../util/img/steve-jobs.jpg"
import bill from "../util/img/bill-gates.jpg"
import larry from "../util/img/larry-page.jpg"
import linus from "../util/img/linus-torvalds.jpg"

const Quotes = () => {
  const [activeImageIndex,setActiveimageIndex]=useState(0)
  const [activeLines,setActiveLines]=useState(0)
  const [activeName,setActiveimageName]=useState(0)
  
  const lines = [
    "Because the people who are crazy enough to think  they can change the world are the ones who do",
    "Success is a lousy teacher. It seduces smart people into thinking they can't lose",
    "See, you not only have to be a good coder to create system like Linux, you have to be a sneaky bastard too",
    "If you're changing the world, you're working on important things.You're excited to get up in the morning"
  ]
  const img = [
    steve,bill,larry,linus
  ]
  const names = [
    "Steve Jobs","Bill Gates","Larry Page","Linus Torvalds"
  ]

  
const handlebackSwipe = ()=>{
  if(activeImageIndex===0 || activeLines===0){
    setActiveimageIndex(img.length-1)
    setActiveLines(img.length-1)
    setActiveimageName(names.length-1)
  }
  else{

    setActiveimageIndex(activeImageIndex - 1)
    setActiveLines(activeLines - 1)
    setActiveimageName(activeName - 1)

  }

}   
const handleNextSwipe = ()=>{

  setActiveimageIndex((activeImageIndex + 1) % img.length)
  setActiveLines((activeLines + 1) % lines.length)
  setActiveimageName((activeName + 1) % names.length)

}
useEffect(()=>{
  const timer = setTimeout(()=>{
    handleNextSwipe()
  },5000)

  return()=>{
   clearTimeout(timer)
  }
   // eslint-disable-next-line
},[activeImageIndex])

  
  return (
    <div className='p-4'>
      <div className='relative quote'>
        <button onClick={handlebackSwipe} className='absolute top-[34%] left-[15%]'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H6M12 5l-7 7 7 7"></path>
          </svg>
        </button>
        <button onClick={handleNextSwipe} className='absolute top-[34%] left-[80%]'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h13M12 5l7 7-7 7"></path>
          </svg>
        </button>

     


            <h1 className='pt-6' >Inspiring quotes</h1>
            <section id="quotesline"  className='flex items-center justify-center flex-col p-2'>
                {img.map((url,i)=> <img className={'rounded-full p-5 '+ (activeImageIndex ===i?"block":"hidden")} src={url} alt="steveJobs">

                </img>)}
              {  lines.map((it,i)=><h2 className={'p-7 ' + (activeLines===i?"block":"hidden")} >"{it}."</h2>)
                }
               { names.map((it,i)=> <p className={'p-3 ' +(activeName===i?"block":"hidden")}>by <b >{it}.</b></p>)
               }
                
            </section>
        </div>
        

    </div>
  )
}

export default Quotes