import React from 'react'


function Contacts(props) {
    console.log(props)
  return (
    <div className='flex justify-between px-2 py-2 items-center border-y border-slate-700 cursor-pointer hover:font-bold '>
         <div className='flex space-x-2'>
            <img className='h-12 w-12 rounded-full ' src={props.Img}></img>
            <div className=''>
            <p className='text-white text-base'>{props.Name}</p>
            <p className='text-gray-400 text-xs'>This message is deleted</p>
            </div>
         </div>

        <div className='text-slate-500 text-xs'>12:00</div>
        
    </div>
  )
}

export default Contacts