import React from 'react'

const Loginform = () => {
  return (
    <div>
        <h1>Login Form</h1>
        <form>
            <label>Enter Username</label>
            <input type="text" placeholder='Enter the name'>
            </input><br></br>
            <label>Enter Password</label>
            <input type="password" placeholder='Enter the password'></input>
        </form>
    </div>
  )
}

export default Loginform