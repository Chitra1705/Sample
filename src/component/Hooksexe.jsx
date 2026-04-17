import React, { useEffect, useState } from 'react'
function Hooks(){
const[counter,setcounter]=useState(100)
function click(){
    setcounter(counter-3)
}
useEffect(()=>{
    console.log(counter)
},[counter])
 return (
    <div>
        <button type="button" onClick={click}>Decrease</button>
        <h2>{counter}</h2>
    </div>
  )
}

export default Hooks
