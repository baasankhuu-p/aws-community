import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

function Header() {
  return (
    <div className='fixed left-0 right-0 flex flex-row justify-between mx-2 lg:mx-20 items-center'>
      <Logo/>
      <Nav/>
      <a href='#' className='hidden lg:block lg:px-4 lg:py-1 bg-primary text-sm hover:bg-primarydark rounded-full text-white font-bold'>WATCH</a>
    </div>
  )
}

export default Header
