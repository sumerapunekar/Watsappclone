import React from 'react'

import ChatHead from './ChatHead';
import Chat from './Chat';
import ChatBottom from './ChatBottom'; 
import useState from "react";

function ChatScreen(props) {
// const [messageArray,setMessageArray] = useState([])

  return (
    <div className='bg-yellow-400 col-span-3 h-screen relative'>
     
       <div>
       <ChatHead p2={props.p1} />
       </div>

       <div className='bg-[url("https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80")] bg-cover bg-center bg-no-repeat h-screen overflow-x-hidden '>
        <Chat/>
       </div>

       <div>
       <ChatBottom/>
       </div>
      
      


    </div>
  )
}

export default ChatScreen