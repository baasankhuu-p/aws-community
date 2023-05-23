import React from 'react'
import Header from '../component/Header'
import Contruct from '../screens/contruct'

function page() {
  return (
    <div className="bg-black min-h-screen min-w-full text-white"
    style={{
      zIndex: 0,
      overflow: "hidden",
      backgroundImage: `url(/bg1.svg)`,
      backgroundSize: "cover",
      backgroundPosition: "center -200px",
      backgroundRepeat: "no-repeat",
    }}>
      <Header/>
      <Contruct/>
    </div>
  )
}

export default page
