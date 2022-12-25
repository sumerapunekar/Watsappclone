import React, {useState} from 'react'

import ChatScreen from '../Components/ChatScreen'
import ContactList from '../Components/ContactList'

function Homescreen({user,db,logout}) {
  
  const [active , setActive] = useState(null)



  return (
    <div className='w-full max-w-[80rem] grid grid-cols-4 h-screen bg-slate-400 mx-auto overflow-y-hidden '>
        {/* ContactList */}
        <ContactList user={user} db={db} logout={logout} setContact = {setActive}/>

        {/* ChatScreen */}
       { active ? <ChatScreen db={db} p1={active} /> :<div className='text-white text-5xl font-bold flex justify-center items-center col-span-3'>
        <p>Welcome</p></div> }
    </div>
  )
}

export default Homescreen