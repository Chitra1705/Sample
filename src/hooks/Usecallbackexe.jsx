import React, { useCallback, useState } from 'react'

const Usecallbackexe = () => {
    const[count1, setCount1]=useState(100);
    const[count2,setCount2]=useState(100)
    const handleclick1=useCallback(()=>{
        setCount1(count1 + 1);
    });
    const handleclick2=useCallback(()=>{
        setCount2(count2 - 1)
    })
  return (
    <div>
        <h2>{count1}</h2>
        <button type="button" onClick={handleclick1}>Increase</button>
        <h2>{count2}</h2>
        
        <button type='button' onClick={handleclick2}>Decrease</button>
    </div>
  )
}

export default Usecallbackexe