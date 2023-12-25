import React from 'react'
import Header from '../components/Header'

export default function About() {
  return (
    <>
     <Header /> 
     <div className='flex flex-col w-full items-center gap-16 pt-16'>

      <div className='w-96 pt-16 text-center font-bold text-[1.7rem] border-b-[1px] drop-shadow-lg md:w-[34rem] lg:w-[42rem]'>About</div>

        <div className='w-96 md:w-[34rem] lg:w-[42rem] '>
          Super Slinky Server is a website for gamers who love to play online with their friends. Originally starting as three friends who grew up together playing games. We decided to create this community to have a place where we could play our favorite games together and invite others to join us, while the website was built to make things easier for all of us.
        </div>

        <div className='w-96 md:w-[34rem] lg:w-[42rem]'>
          Here we are a community of like-minded people who enjoy gaming and having fun. We frequently are in Discord playing games together. We also do gaming nights, but are frequently on the Discord just chatting, or listening to music. Bring on the games, friends.
        </div>

        <div className='w-96 md:w-[34rem] lg:w-[42rem]'>
          We built the website and we are always looking for ways to improve the community and website, make it more user-friendly and enjoyable. We want to make Super Slinky Server an all-in-one place to find people to play games with and have some good laughs. Shoot us some suggestions!
        </div>

        <div className='w-96 md:w-[34rem] lg:w-[42rem] pb-16'>
          If you are looking for a place to play games online with your friends, look no further than Super Slinky Server. Join us today and become part of our awesome community. We can't wait to see you online!
        </div>
     
     </div>
    </>
  )
}


