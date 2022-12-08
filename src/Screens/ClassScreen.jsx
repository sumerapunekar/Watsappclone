import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Upperbody from '../Components/Upperbody';
import { ListItem } from '@mui/material';

function ClassScreen(props) {
    const arr = [{name:"Morgan Sweeney",Followers:12,Following:1000},
    {name:"Morgan",Followers:12,Following:1000}
  ]

  return (
    <div className='bg-rose-300 h-max w-96 mx-auto px-4 py-4'>
        <div className='bg-white rounded-lg h-max w-full pb-4'>
        
            <img className='rounded-t-lg w-full relative' src='https://media.istockphoto.com/id/1291970234/photo/ant-on-tree-branch-macro.jpg?b=1&s=170667a&w=0&k=20&c=2fSulJ0VfNkk482xuGRsNRfT1QizOqZ10_HVyrVqCpE='/>
            
            <img className='rounded-full border border-black absolute top-52 h-20 w-20 ml-36' src='https://i.pinimg.com/originals/de/99/93/de9993e752fc52646579448542c411d3.jpg'/>       
            <div className='ml-72 text-4xl'>
                <MoreVertIcon fontSize='inherit'/>
            </div>
            
            {
            arr.map((item,index) => <Upperbody key={index} data={item} Name={item.name} follower={item.Followers} following={item.Following}/>)
            }
            
            
        </div>
    </div>
  )
}

export default ClassScreen

    
  


