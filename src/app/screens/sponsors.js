import Image from 'next/image'
import React from 'react'

function Sponsors() {
  return (
    <section id='sponsors' className='min-h-screen relative flex flex-row justify-center items-center' style={{
        zIndex: 0,
        overflow: "hidden",
        backgroundImage: 'url("https://kazhackstan.kz/partners.svg")',
        backgroundSize: "auto 60% ",
        backgroundPosition:'center',
        backgroundRepeat: "no-repeat"
      }}>
      <h1 className='z-1 relative pt-60 text-center text-5xl font-bold uppercase xl:text-7xl text-white'>Sponsors</h1>
      <div>
        
      </div>
    </section>
  )
}

export default Sponsors
