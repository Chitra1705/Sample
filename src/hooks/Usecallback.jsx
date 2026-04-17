import React, { useCallback, useState } from 'react'

const Usecallback = () => {
    const[count, setCount] = useState(1)

    const handleclick = useCallback(()=>{
        setCount(count + 1)
        
    })
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleclick}>click</button>
    </div>
  )
}

export default Usecallback