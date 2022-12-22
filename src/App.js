import React, { useEffect } from 'react'
import ClassScreen from './Screens/ClassScreen'
import Homescreen from './Screens/Homescreen' 
import Login from './Screens/Login'
import {useState} from "react"

import  Card  from './Screens/Card'
import Main from './Screens/Main'
import My from './Screens/My'
import { getAuth,GoogleAuthProvider,onAuthStateChanged ,signOut} from "firebase/auth";
import Firebase from './Firebase'
import { signInWithPopup } from "firebase/auth";
import app from './Firebase'
import { setUserId } from 'firebase/analytics'
import Loader from './Components/Loader'
import firebase from './Firebase'


function App() {
const [user,setUser] = useState(false)
const [load,setLoad] =useState(true)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

async function signUp(){

  await signInWithPopup(auth, provider)
  .then((result) => {
    
    const user = result.user;
    setUser(user)
  }).catch((error) => {
    console.log(error)
  });
}
// async function XY(){
// let value = new Promise (function (A,B){
//    A("700")
//   })
// let ss = await value;
// return ss;
// }

// XY().then(function (ab){
//   console.log(ab)
// })

useEffect(onAuthStateChanged(auth, (u) => {
  if (u) {
    setUser(u)
  } else {
    setUser(null)
  }
}),[user])


async function SignOut(){
  await signOut(auth).then((er) => {console.log(er)}).catch((errr) => {console.log(errr)})
}

setTimeout(()=>{
  setLoad(false)
  },3000)
  
  if (load) return <Loader/>


  
  
  

  


  return (
// // //   //    className="h-screen w-screen bg-slate-900 py-32">
  <div>
       {
        user? <Homescreen user={user} logout={SignOut}/> :<Login login={signUp} />
       }
    </div>
  )

}
// // 
// // }
// const [button,setButton] = useState(false) 
// return (
//   <div>
// {
//   button ? <Card/> : <button onClick={()=>setButton(true)} className='bg-red-400 text-gray-200 h-16 w-16 px-2 py-2 items-center'>Click Me</button>
// }
  
//   </div>
// )
// }


export default App