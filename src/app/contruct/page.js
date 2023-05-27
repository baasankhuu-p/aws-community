import React from 'react'
import Header from '../component/Header'
import Contruct from '../screens/contruct'

function page() {
  return (
    <div className="contructbg bg-black min-h-screen min-w-full text-white"
     >
      <Header/>
      <Contruct/>
    </div>
  )
}

export default page
