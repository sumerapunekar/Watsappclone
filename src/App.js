import React from 'react'
import ClassScreen from './Screens/ClassScreen'
import Homescreen from './Screens/Homescreen' 
import Login from './Screens/Login'
import {useState} from "react"

function App() {
const [main,setMain] = useState(false)
  return (
  //    className="h-screen w-screen bg-slate-900 py-32">
  <div>
       {
        main? <Homescreen/> :<Login login={setMain}/>
       }
    </div>
  )
}
// function main(props) {
//   return (
    
//   )
// }

export default App