import React, { useEffect, useState } from 'react'

const Crud = () => {
    const[name, setName] = useState("")
    const[phone, setPhone] = useState("")
    const[email, setEmail] = useState("")
    const[user, setUser] = useState([])
    const[editId, setEditId] = useState(null)

    // const api_url = "https://6979bc43cc9c576a8e178256.mockapi.io/users"

    const handleSubmit = async(e) =>{
        e.preventDefault()

        if(name===""|| phone==="" || email===""){
            alert("fill all the fields")
            return
        }

        const obj ={
            name,
            phone,
            email
        }

        try{
            if(editId){
               await fetch(`${api_url}/${editId}`,{
                    method:"PUT",
                    headers:{
                        'content-type':"application/json"
                    },
                    body:JSON.stringify(obj)
                }).then((res)=>res.json()).then((data)=>{
                    setEditId(null)
                })
            }
            else{
               await fetch(api_url,{
                method:"POST",
                headers:{
                    'content-type':"application/json"
                },
                body:JSON.stringify(obj)
               }).then((res)=>res.json()).then((data)=>{
                alert("data uploaded")
               }) 
            }
            setName("")
            setEmail("")
            setPhone("")
            fetchUser()

        }catch(err){
            console.log(err)
        }
    }

    const fetchUser = async()=>{
        const res = await fetch(api_url)
        const data = await res.json()
        setUser(data)
    }

    useEffect(()=>{
        fetchUser()
    },[])

    const handleEdit = (item) =>{
        setName(item.name)
        setPhone(item.phone)
        setEmail(item.email)
        setEditId(item.id)
    }

    const handleDelete = (id) =>{
        fetch(`${api_url}/${id}`,{
            method:"DELETE"
        })
        alert("data deleted")
        window.location.reload()
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}></input>
            <label>Phone</label>
            <input type='number' placeholder='Enter you number'  value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
            <label>Email</label>
            <input type='email' placeholder='Enter your email' value={email}  onChange={(e)=>setEmail(e.target.value)}></input>
            <button>Submit</button>
        </form>

        <br></br><br></br>

        <table style={{border:"10", cellspacing:"5px", cellpadding:"20px", width:"80%"}}>
            <thead>
                <th style={{border:"2px solid black", padding:"20px",textAlign:"center"}}>Name</th>
                <th style={{border:"2px solid black", padding:"20px",textAlign:"center"}}>Phone</th>
                <th style={{border:"2px solid black", padding:"20px",textAlign:"center"}}>Email</th>
                <th style={{border:"2px solid black", padding:"20px",textAlign:"center"}}>Action</th>
            </thead>

            <tbody>
                {user.map((item)=>(
                    <tr key={item.id} >
                        <td style={{border:"2px solid black", padding:"20px"}}>{item.name}</td>
                        <td style={{border:"2px solid black", padding:"20px"}}>{item.phone}</td>
                        <td style={{border:"2px solid black", padding:"20px"}}>{item.email}</td>
                        <td style={{border:"2px solid black", padding:"20px"}}><button onClick={()=>handleEdit(item)}>edit</button> <button onClick={()=>handleDelete(item.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Crud