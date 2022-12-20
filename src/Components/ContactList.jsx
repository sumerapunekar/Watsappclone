import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import CachedIcon from '@mui/icons-material/Cached';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import Contacts from './Contacts';
import RefreshIcon from '@mui/icons-material/Refresh';


function ContactList({user,logout,...props}) {
 const Array = [{name:"Irfan",img:"https://pps.whatsapp.net/v/t61.24694-24/305814467_140632885097825_6270874185595100738_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRrFUziYp5xYKRUd7vfS6UtbHrA-Li9-ABcvYzhVj2HOQ&oe=6398A6FD"},
 {name:"Arbaz",img:"https://pps.whatsapp.net/v/t61.24694-24/202177080_340975597701817_967367736069419974_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQ7qutEwXdDRYeRBecDHXUgt9bpNIgfzf9fZHu8eB1Qaw&oe=63989894"},
 {name:"Arfat",img:"https://pps.whatsapp.net/v/t61.24694-24/312280018_169906322326594_541453286877171405_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdT3AL7EgIKRAUbEJp-7Ei-wOwUA64jlsBk5Q5cO3ccwzQ&oe=639896B0"},
 {name:"Sadie",img:"https://pps.whatsapp.net/v/t61.24694-24/310110404_955288089195524_7301502132524348877_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSKvPNeuwe4lH_woB4vSM57IboZJp086rcPE3wiU5OnlA&oe=63988B74"},
 {name:"Lubna",img:"https://pps.whatsapp.net/v/t61.24694-24/305964501_576567887595090_883276564924387164_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQ8W1TI_FraJRf4gpEokzYKWh9Cr_xjEP6B8c9i_BGFEQ&oe=6398AAD6"},
 {name:"Anmol",img:"https://pps.whatsapp.net/v/t61.24694-24/158723607_419193396439292_5955373819812020282_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTipK79L4NlM4WDo9TpkCBUH_MvLq3A39D65ZzlUxwxHQ&oe=6398A702"},
 {name:"Priya",img:"https://pps.whatsapp.net/v/t61.24694-24/305592966_481023603738680_4717535719581381666_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTIg5rxjShYOAJcDb6PaHNMa5s4qudIxIWtpM8VfxRo_g&oe=639890DD"},
 {name:"Ejaz",img:"https://pps.whatsapp.net/v/t61.24694-24/298328542_766611371246745_4042993338047187675_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSRMKwhVdk2UovpcXbGGvmaRnqMJZ-m0rIxbeHnBzDG_A&oe=6398AEFD"}
]
console.log(props)
function XYZ(x){
  props.setContact(x)
}
  return (
    <div className='h-screen col-span-1 bg-slate-800 border-r border-slate-400 '>
      <div className='flex justify-between bg-gray-600 items-center px-4 py-2'>
        <img className="rounded-full h-9 w-9" src="https://pps.whatsapp.net/v/t61.24694-24/290854331_755582042150294_1901257243929918428_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTZj8UjMvIIlx9_rJbZ7VQEhxyIneNzvtNbDpLERt-0NA&oe=63989DFD"></img>
        <div className='flex items-center space-x-4 text-white'>
          <GroupsIcon fontSize='inherit'/>
          <CachedIcon fontSize='inherit'/>
          <AddIcon fontSize='inherit'/>
          <button onClick={()=>logout()} className='flex items-center'><RefreshIcon  fontSize='inherit'/></button>
          <MoreHorizIcon fontSize='inherit'/>

        </div>

      </div>


      <div className=' text-gray-300 text-lg space-x-2 items-center flex mx-2 '>
         <div className='flex bg-gray-600 space-x-2 px-4 rounded-md w-full py-2 ml-2 items-center h-8 my-2'>
          <SearchIcon fontSize='inherit'/>
          <input className='bg-transparent text-xs w-full ' placeholder='Search or Start new chat'/>
         </div>
       <KeyboardDoubleArrowDownIcon fontSize='inherit'/>
      </div>

      <div className='mt-4 overflow-y-scroll max-h-[32rem]'>
        {
        Array.map((element,index) =><button onClick={()=>XYZ(element)} key={index} className='w-full' ><Contacts  Name={element.name} Img={element.img}/></button>)
        }
      </div>
    </div>
  )
}

export default ContactList