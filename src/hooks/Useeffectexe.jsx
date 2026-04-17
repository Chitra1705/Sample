import React, { useEffect } from 'react'

const Useeffectexe = () => {
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((data)=>console.log(data));
        
    })
  return (
    <div>Useeffectexe</div>
  )
}

export default Useeffectexe