import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-500">
        <div className='flex items-baseline 
        justify-center pt-20'>
        <h2 className='text-white border 
            px-3 p-2 rounded-full
        text-center border-white'>See What's New | <span className='text-sky-300'>AI Diagram</span></h2>

        </div>
  <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 lg:flex  ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl text-sky-300 font-extrabold sm:text-5xl">
      Documents & diagrams
        <strong className="font-extrabold text-white sm:block"> 
        for engineering teams. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-slate-200">
      All-in-one markdown editor, collaborative canvas, and diagram-as-code builder
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
  
       
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero