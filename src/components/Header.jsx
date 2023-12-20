import React from 'react'
import SSLogo from '/src/assets/SSLogo.png'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className='flex bg-teal-800 text-white text-lg font-bold h-20 shadow-md'>
        <Link to='/' className='w-20 flex flex-col justify-center' ><img src={SSLogo}></img></Link>
        <div className="flex pl-6 w-full justify-between">
            <div className="self-center flex gap-8">
                <Link to='/servers' className='hover:text-xl'>
                    Servers
                </Link>

                <Link to='/about' className='hover:text-xl' >
                    About
                </Link>

                <Link to='/contact' className='hover:text-xl'>
                    Contact
                </Link>
            </div>

            <a href='https://chat.superslinkyserver.com' className='self-center pr-6 hover:text-xl'>
                Chat
            </a>
        </div>
    </div>
  )
}
