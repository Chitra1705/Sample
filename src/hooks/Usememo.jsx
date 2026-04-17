import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const[number, setNumber] = useState(1)

    const square = useMemo(()=>{
        return number*number
})
  return (
    <div>
        <h1>{square}</h1>
        <input type='number' value={number} onChange={(e)=>setNumber(Number(e.target.value))}></input>
    </div>
  )
}

export default Usememo