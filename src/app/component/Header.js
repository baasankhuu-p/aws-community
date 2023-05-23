import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

function Header() {
  return (
    <div className='fixed left-0 right-0 flex flex-row justify-between m-2 lg:mx-52 items-center z-40 ' >
      <Logo/>
      <Nav/>
    </div>
  )
}

export default Header
