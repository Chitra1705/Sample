import React from 'react'
import './home.css'

const Home = () => {
    const data = "jdjaf"

    const box = {
        color:"yellow",
        backgroundColor:"red"
    }
  return (
    <>
        <h1 style={box}>hello</h1>
        <h2 className='' style={{color:"red", backgroundColor:"green"}}>chitra....</h2>
        <p className="app">{data}</p>
    </>
  )
}

export default Home