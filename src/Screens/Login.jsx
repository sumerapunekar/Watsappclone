import React from 'react'

function Login(props) {
  console.log(props)
  
  return (
    <div className='max-w-7xl mx-auto my-2 flex flex-col-1 justify-center items-center bg-gradient-to-br from-yellow-400 via-red-500 to-purple-400 rounded-md h-screen'>
      <div className='bg-white rounded-md shadow-2xl shadow-rose-400 px-8 py-8 h-96 space-y-8 text-2xl font-bold'>
       <h1 className='text-4xl font-bold ml-32 text-orange-400'>Login</h1>
       Name : <input placeholder='Enter Name' type='text' className='items-center text-base font-semibold rounded-md px-2 border-2 border-gray-200'/><br/>
       Email : <input placeholder='Enter Email' type='email' className='items-center text-base font-semibold rounded-md px-2 border-2 border-gray-200'/><br/>
       Password : <input placeholder='Enter Password' type='password' className='items-center text-base font-semibold rounded-md px-2 border-2 border-gray-200'/><br/>
       <div className='space-y-2'>
       <button  onClick={props.login} className='rounded-full w-24 bg-orange-400 text-white items-center text-sm ml-32'>LOGIN</button><br/>
       <button className='rounded-full w-24 bg-orange-400 text-white items-center text-sm ml-32'>SIGNUP</button><br/>
       </div>
      </div>
       </div>
    
  )
  }

export default Login