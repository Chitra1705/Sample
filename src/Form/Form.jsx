import React, { useState } from 'react'

const Form = () => {
    const[formData, setFormdata]=useState({
        username:"",
        email:"",
        password:""
    })

    const[error, setError] = useState({})

    const validate = ()=>{
        const newError = {}

        if(!formData.username) newError.username ="enter username"

        if(!formData.email) newError.email = "enter email"

        else if(!/\S+@\S+.\S/.test(formData.email)) newError.email = "invalid email"

        if(!formData.password) newError.password = "enter password"

        else if(formData.password.length < 7) newError.password="password should contain atlest 7 char"

        else if(!/[A-Z]/.test(formData.password)) newError.password = "password should contain atlest 1 uppercase"

        return newError
    }


    const handleChange =(e)=>{
        const{name, value} = e.target

        setFormdata({
            ...formData,

            [name]:value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        const validation = validate()

        if(Object.keys(validation).length === 0){
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
            <input type='text' name='username' value={formData.username} onChange={handleChange}></input><br></br>
            {error.username && <p style={{color:"red"}}>{error.username}</p>}


             <label>Email</label>
            <input type='text' name='email' value={formData.email} onChange={handleChange}></input><br></br>
            {error.email && <p style={{color:"red"}}>{error.email}</p>}

             <label>Password</label>
            <input type='text' name='password' onChange={handleChange} value={formData.password}></input><br></br>

            {error.password && <p style={{color:"red"}}>{error.password}</p>}
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form