import React, { useEffect } from 'react'
import { useState } from 'react'

const arr = [1,2,3,4,5]

const ComponentA = () => {
    const [count,setCount] = useState(0);
    function changeState(){
        setCount(count+1);
    }
    useEffect(()=>{
        console.log("State changed")
    },[count])
  return (
    <>
        {arr.map(item=>{
            <p>{item}</p>
        })}
        
    </>
  )
}

export default ComponentA