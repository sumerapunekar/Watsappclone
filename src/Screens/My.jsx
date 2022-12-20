import React from 'react'
import {useState} from 'react'

import ClassScreen from './ClassScreen'
import Main from './Main'

function My() {
    const [my,setMy] = useState(false)
  return (
    <div>
{
    my ? <ClassScreen/> : <Main b2={setMy}/>
}

    </div>
  )
}

export default My