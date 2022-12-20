import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import {useState} from 'react'

function Card() {
 const [card,setCard] = useState({
  name : '???',
  fo : '???',
  f1 : '???',
  desc : '???',
 })
  return (

      <div className='h-full mx-auto w-96  '>
        <img className='rounded-t-lg w-full relative' src='https://media.istockphoto.com/id/1291970234/photo/ant-on-tree-branch-macro.jpg?b=1&s=170667a&w=0&k=20&c=2fSulJ0VfNkk482xuGRsNRfT1QizOqZ10_HVyrVqCpE='/>
            
            <img className='rounded-full border border-black absolute top-52 h-20 w-20 ml-36' src='https://i.pinimg.com/originals/de/99/93/de9993e752fc52646579448542c411d3.jpg'/>       
            <div className='ml-72 text-4xl'>
                <MoreVertIcon fontSize='inherit'/>
            </div>
            <div className='grid col-1  mt-4 justify-items-center space-y-4 px-6'>
              
              <h1 className='font-bold text-2xl '>{card.name}</h1>
              <h3 className='text-gray-400 text-xs'>Ant Collector</h3>
             <div className='flex space-x-8'>
                <div className='flex flex-col items-center'><a className='text-2xl text-sky-400 font-bold'>{card.fo}</a><h3 className='text-gray-400'>Followers</h3></div>
                <div className='flex flex-col items-center'><a className='text-2xl text-sky-400 font-bold'>{card.f1}</a><h3 className='text-gray-400'>Following</h3></div>
             </div>
             <button onClick={()=>setCard({name:'SUMERA',fo:'200',f1:'2000',desc:'Morgan has collected ants since they were six years old and now has many dozens ants but none in their pants.'})} className='bg-yellow-300 text-black w-80 h-10 rounded-full items-center font-bold'>Follow</button>
              <p className='text-gray-500 text-base '>{card.desc}</p>
              
          </div>
        
      
    </div>
    
  )
}

export default Card