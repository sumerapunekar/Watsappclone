import React from 'react'
function Message(props){
    return(
      props.me?<div className='flex justify-end'> <div className='px-2 py-2 max-w-max bg-white rounded-br-none rounded-lg '>
        <p>{props.text}</p>
      </div> </div> :
      <div className=' bg-slate-300 rounded-bl-none rounded-lg w-max px-2 py-2 max-w-max'>
        <p>{props.text}</p>
      </div>
    )
}
function Chat() {
    console.log()
  return (
  <div className='h-full flex flex-col justify-end'>
    <div className='mr-2 space-y-3 px-4 py-8 w-full h-full  overflow-y-scroll  '>
    
    <Message text='hi' me={true} />
    <Message text='hello' me={false} />
    <Message text='hi' me={true} />
    <Message text='hello' me={false} />
    <Message text='hi' me={true} />
    <Message text='hello' me={false} />
    <Message text='hi' me={true} />
    <Message text='hello' me={false} />
    <Message text='hi' me={true} />
    <Message text='hello' me={false} />
    <Message text='hi' me={true} />
    <Message text='hello' me={false} />
    <Message text='hi' me={true} />
    <Message text='hello' me={false} />
    
    
    
    
    
    
    </div> 
    <div className='h-32'></div> 
    </div>
  )
}

export default Chat