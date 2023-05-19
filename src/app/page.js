import Image from 'next/image'
import Header from './component/Header'
import About from './screens/about'

export default function Home() {
  return (
    <div className='bg-black min-h-screen'>
    <Header/>
    <About/>
    </div>
  )
}
