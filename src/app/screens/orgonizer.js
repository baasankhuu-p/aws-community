import Image from 'next/image'
import React from 'react'

function Organize() {
    let organizes=[["Fibo",require('../assets/img/organize/fibo.png')],["cloud community ulaanbaatar",require('../assets/img/organize/cloud.png')]]
  return (
    <div className="mt-20">
      <div className=" text-white text-center text-7xl font-bold">Organizer</div>
      <div className="flex flex-col md:flex-row items-center justify-center my-10">
        <Image src={organizes[0][1]} alt={organizes[0][0]} className="w-60 h-40 my-2 mx-10 rounded-sm"/>
        <Image src={organizes[1][1]} alt={organizes[1][0]}className="w-60 h-40 my-2  mx-10 rounded-sm"/>
      </div>
    </div>
  )
}

export default Organize
