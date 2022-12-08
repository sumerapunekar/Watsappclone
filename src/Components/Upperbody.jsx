import React from 'react'

function Upperbody(props) {
  console.log(props,"hello")
  return (
    <div className='grid col-1  mt-4 justify-items-center space-y-4 px-6'>
              
                <h1 className='font-bold text-2xl '>{props.Name}</h1>
                <h3 className='text-gray-400 text-xs'>Ant Collector</h3>
               <div className='flex space-x-8'>
                  <div className='flex flex-col items-center'><a className='text-2xl text-sky-400 font-bold'>{props.follower}</a><h3 className='text-gray-400'>Followers</h3></div>
                  <div className='flex flex-col items-center'><a className='text-2xl text-sky-400 font-bold'>{props.following}</a><h3 className='text-gray-400'>Following</h3></div>
               </div>
               <button className='bg-yellow-300 text-black w-80 h-10 rounded-full items-center font-bold'>Follow</button>
                <p className='text-gray-500 text-base '>Morgan has collected ants since they were six years old and 
                now has many dozens ants but none in their pants.</p>
            
            </div>
  )
}

export default Upperbody