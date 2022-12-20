import React, {useState} from 'react'

import ChatScreen from '../Components/ChatScreen'
import ContactList from '../Components/ContactList'

function Homescreen({user,logout}) {
  
  const [active , setActive] = useState(null)



  return (
    <div className='w-full max-w-[80rem] grid grid-cols-4 h-screen bg-red-500 mx-auto overflow-y-hidden '>
        {/* ContactList */}
        <ContactList user={user} logout={logout} setContact = {setActive}/>

        {/* ChatScreen */}
       { active ? <ChatScreen p1={active} /> : "" }
    </div>
  )
}

export default Homescreen