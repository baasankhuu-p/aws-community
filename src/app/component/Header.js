import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

function Header() {
  return (
    <div className='fixed left-0 right-0 flex flex-row justify-between px-2 lg:px-40 items-center z-20' >
      <Logo/>
      <Nav/>
    </div>
  )
}

export default Header
