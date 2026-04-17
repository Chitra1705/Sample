import React, { useEffect, useState } from 'react'

function Timer(){
    const[time,settime]=useState(0)
useEffect(()=>{
   
        const t= setInterval(()=>{
            settime(prev=>prev+1);
            console.log(time);
        },1000);
        return()=>{
            clearInterval(t)
    }
    
},[])
  return (
    <div>
        {/* <button type="button" onClick={click}>Start</button> */}
        <h2>{time}</h2>
    </div>
  )
}

export default Timer