import React from 'react'
import DuoIcon from '@mui/icons-material/Duo';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function ChatHead(props) {
    // console.log(props.p2)
  return (
    <div>
        <div className='sticky top-0 bg-white'>
<div className='flex justify-between bg-gray-600 items-center py-2 px-4'>
        <div className='flex space-x-4'>
        <img className="rounded-full h-9 w-9" src={props.p2?.photoURL}></img>
        <div className='py-1 items-center'>
          <p className='text-lg text-gray-300 font-semibold leading-3'>{props.p2.displayName}</p>
          <p className='text-xs text-gray-300 font-light'>Online</p>
        </div>
        
        </div>
        <div className='flex space-x-6 text-gray-300 text-lg'>
          <DuoIcon fontSize='inherit'/>
          <CallIcon fontSize='inherit'/>
          <SearchIcon fontSize='inherit'/>
          <MoreHorizIcon fontSize='inherit'/>

        </div>

      </div>
      </div>

    </div>
  )
}

export default ChatHead