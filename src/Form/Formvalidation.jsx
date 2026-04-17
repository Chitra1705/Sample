import React, { useState } from 'react'

const Formvalidation = () => {
    const[formData,setFormdata]=useState({
        username:"",
        email:"",
        password:""

    })
    const[error,setError]=useState({})

    const validate=()=>{
        const newError={}

        if(!formData.username) newError.username="Please enter your username"

        if(!formData.email) newError.email="Please enter your email"

        else if(!/\S+@\S+.\S/.test(formData.email)) newError.email="Please enter your valid email"

        if(!formData.password) newError.password="Please enter the password"

        else if(formData.password.length<7) newError.password="Password must be above 7 characters"

        else if(!/[A-Z]/.test(formData.password)) newError.password="Password must contain atleast one uppercase"
        return newError  
    } 
        const handleChange= (e) =>{
            const{name, value}=e.target

            setFormdata({
                ...formData,

                [name]:value
            })   
        }
        const handleSubmit=(e)=>{
            e.preventDefault()

            const validation=validate()
            if(Object.keys(validation).length===0){
                console.log(formData)

                setFormdata({
                    username:"",
                    email:"",
                    password:""
                })
                setError({})
            }
            else{
                setError(validation)
            }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <label>Username</label>
            <input type='text' name='username' value={formData.username} onChange={handleChange}></input><br />
            {error.username && <p style={{color:"red"}}>{error.username}</p>}
            <label>Email</label>
            <input type='email' name='email' value={formData.email} onChange={handleChange}></input><br />
            {error.email && <p style={{color:"red"}}>{error.email}</p>}
            <label>Password</label>
            <input type='password'name='password' value={formData.password} onChange={handleChange}></input><br />
            {error.password && <p style={{color:"red"}}>{error.password}</p>}
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Formvalidation