import React, { useState } from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { collection, addDoc,Timestamp } from "firebase/firestore"; 

function ChatBottom({db,user,...props}) {


  const schema = {
    myMessage : "",
    uid : user?.uid,
    img : user?.photoURL,
    displayName : user?.displayName,
    timeST : Timestamp.fromDate(new Date())
    }
   
  const [message,setMessage] = useState(schema)

  function handleChange(event){
   const {name,value} = event.target;
   setMessage(cm =>  
    ({ ...cm,[name]:value })
   )

  }
    
async function postMessage(){   
  if(message.myMessage === "")return ;                 // Add a new document with a generated id.
// console.log(message)
 await addDoc(collection(db, "grpMsg"),message);
setMessage(schema)
}

  return (
    <div className=' bottom-0 bg-slate-200 w-full absolute flex justify-around space-x-2 items-center h-14 text-2xl text-gray-500 px-2 py-2'>
      <InsertEmoticonIcon fontSize='inherit'/>
      <AttachFileIcon  fontSize='inherit'/>
      <input 
      name='myMessage' 
      value={message.myMessage}
      onChange={handleChange}
      placeholder='Type a message' 
      className='w-full rounded-lg text-base h-full px-2'>

      </input>
      <button onClick={()=>postMessage()} className='bg-gradient-to-br from-red-400 to-yellow-200 rounded-full items-center px-2 py-2text-xs'>Send</button>
      <MicIcon fontSize='inherit'/>

      </div>
  )
}

export default ChatBottom