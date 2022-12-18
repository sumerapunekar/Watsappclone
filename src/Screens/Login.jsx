import React from 'react'

function Login(props) {
  console.log(props)
  
  return (
    <div className='max-w-7xl mx-auto my-2 flex flex-col-1 justify-center items-center bg-gradient-to-br from-yellow-400 via-red-500 to-purple-400 rounded-md h-screen '>
      <div className='bg-white rounded-md shadow-2xl shadow-rose-400 px-8 py-4 h-96 space-y-8 text-2xl font-bold'>
       <h1 className='text-4xl font-bold ml-32 text-orange-400'>Login</h1>
       Name : <input placeholder='Enter Name' type='text' className='items-center text-base font-semibold rounded-md px-2 border-2 border-gray-200'/><br/>
       Email : <input placeholder='Enter Email' type='email' className='items-center text-base font-semibold rounded-md px-2 border-2 border-gray-200'/><br/>
       Password : <input placeholder='Enter Password' type='password' className='items-center text-base font-semibold rounded-md px-2 border-2 border-gray-200'/><br/>
       <div className='space-y-2'>
       <button  onClick={()=>props.login()} className=' flex rounded-full w-28 bg-orange-400 text-white items-center text-sm ml-32'><img className='h-8 w-10 rounded-full items-center px-2 py-2' src="https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/c6/3f/03/c63f032b-a9f1-8bb8-ff28-21040b3e5a8d/logo_gsa_ios_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220-0.png/1200x600wa.png"/>GOOGLE</button><br/>
       <button className='rounded-full w-28 bg-orange-400 text-white items-center text-sm ml-32'>SIGNUP</button><br/>
       </div>
      </div>
       </div>
    
  )
  }

export default Login