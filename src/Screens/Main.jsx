import React from 'react'

function Main(props) {
  return (
    <div>
    
            <div className=' border-2 border-black flex flex-col mx-auto justify-end h-screen w-96 px-40 py-8'>
              
              
              <button onClick={props.b2} className='bg-gradient-to-r from-indigo-300 to-pink-300  py-2 items-center rounded-lg border-2 border-black h-8 w-16'>Click</button>
          </div>
    </div>
  )
}

export default Main