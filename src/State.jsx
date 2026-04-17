import React, { useState } from 'react'

function State() {
   

   const [counter,setcounter] =useState(0)

   function click(){

    setcounter(counter+3)

    console.log(counter)

   }


let user = true ;

    return (
        
    <div>State
        <button>clickme {user ? "checked" :" fail"}</button>
{/* <h1>{user ? "checked" :" fail"}</h1> */}


<button onClick={click}>inc</button>


<h2>{counter}</h2>

    </div>
  )
}

export default State

