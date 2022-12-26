import React from 'react'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect,useState } from 'react';


function Message({data,me}){
    return(
      me?<div className='flex justify-end'> <div className='px-2 py-2 max-w-max bg-white rounded-br-none rounded-lg '>
        <p>{data.myMessage}</p>
      </div> </div> :
      <div className='flex space-x-2'>
        <img src ={data.img} className='rounded-full h-8 w-8' />
        <div className=' bg-slate-300 rounded-bl-none rounded-lg w-max px-2 py-2 max-w-max'>
        <p className='text-xs text-red-600'>{data.displayName}</p>
        <p>{data.myMessage}</p>
      </div>
      </div>
    )
}
function Chat({user,db,...props}) {
  const [messages,setMessages] = useState([])

  useEffect(()=>{
    onSnapshot(collection(db, "grpMsg"), (querySnapshot) => {
    const tempMessagesArr = [];
    querySnapshot.forEach((doc) => {
    tempMessagesArr.push(doc.data());
      });
     setMessages(tempMessagesArr) 
    });

  },[db])
    console.log(messages)

  return (
  <div className='h-full flex flex-col justify-end overflow-y-scroll'>
    <div className='mr-2 space-y-3 px-4 py-8 w-full h-full    '>
    {messages.map((message,index) => <Message me={message.uid === user.uid} data={message} key={index}/>)}
    {/* <Message text='hi' me={true} /> */}
    
    
    
    </div> 
    <div className='h-32'></div> 
    </div>
  )
}

export default Chat