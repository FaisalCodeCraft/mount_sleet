import React, { useState } from 'react'
import UseContexUse from './trailCreateContext'

const TrailContextProvider = ({children}) => {
    const [trail,setTrail]=useState([])
  return (
    <UseContexUse.Provider value={{trail,setTrail}}>
        {children}
    </UseContexUse.Provider>
  )
}

export default TrailContextProvider