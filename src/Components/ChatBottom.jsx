import React, { useState } from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
 
function ChatBottom(props) {
  const schema = {
    uid : "irfan",
    myMessage : "",
  }
   
  const [text,setText] = useState(schema)

  function handleChange(event){
    console.log(event)
    const {value} = event.target;
    setText({uid:"1234",myMessage:value})

  }
    
  return (
    <div className=' bottom-0 bg-slate-200 w-full absolute flex justify-around space-x-2 items-center h-14 text-2xl text-gray-500 px-2 py-2'>
      <InsertEmoticonIcon fontSize='inherit'/>
      <AttachFileIcon  fontSize='inherit'/>
      <input 
      name='myMessage' 
      value={text.myMessage}
      onChange={handleChange}
      placeholder='Type a message' 
      className='w-full rounded-lg text-base h-full px-2'>

      </input>
      <MicIcon fontSize='inherit'/>

      </div>
  )
}

export default ChatBottom