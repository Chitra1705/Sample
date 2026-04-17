import React, { useEffect, useState } from 'react'

const Crudexe = () => {
  const[name, setName ]=useState("")
  const[job, setJob]=useState("")
  const[contact, setContact]=useState("")
  const[user, setUser]=useState([])
  const[editId, setEditId]=useState(null)

  const api_url="https://6979bc43cc9c576a8e178256.mockapi.io/users";

  const fetchUser= async()=>{
      const res=await fetch(api_url)
      const data=await res.json()
      setUser(data)
    }
    useEffect(()=>{
      fetchUser()
    },[])

  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(name===""||job===""||contact==="")
    {
    alert("Fill the fields")
    return
    }
   const obj={name,job,contact}
    try
    {
      if(editId){
        await fetch(`${api_url}/${editId}`,{
          method:"PUT",
          headers:{'content-type':"application/json"},
          body:JSON.stringify(obj)
        })
        .then((res)=>res.json())
        .then((data)=>{
          setEditId(null)
        })
      }
      else{
        await fetch(api_url,{
          method:"POST",
          headers:{'content-type':"application/json"},
          body:JSON.stringify(obj)
        })
    .then((res)=>res.json())
    .then((data)=>{
      alert("Data uploaded")
    })
    }
      setName("")
      setJob("")
      setContact("")
      fetchUser()   
    }
    catch(err){
      console.log(err)
    }
  }
    const handleEdit=(item)=>{
      setName(item.name)
      setJob(item.job)
      setContact(item.contact)
      setEditId(item.id)
    }
    const handleDelete=(id)=>{
      fetch(`${api_url}/${id}`,{
        method:"DELETE"
      })
      alert("Data deleted")
      window.location.reload()
    
    }  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <label>Job</label>
        <input type='text' value={job} onChange={(e)=>setJob(e.target.value)}></input>
        <label>Contact</label>
        <input type='text' value={contact} onChange={(e)=>setContact(e.target.value)}></input>
        <button>Submit</button>
      </form>

      <br/><br/>
      <table style={{ width:"80%"}}>
        <thead>
          <th style={{border:"2px solid black", padding:"20px", textAlign:"center"}}>Name</th>
          <th style={{border:"2px solid black", padding:"20px", textAlign:"center"}}>Job</th>
          <th style={{border:"2px solid black", padding:"20px", textAlign:"center"}}>Contact</th>
          <th style={{border:"2px solid black", padding:"20px", textAlign:"center"}}>Action</th>
        </thead>
        <tbody>
          {
            user.map((item)=>(
          <tr key={item.id}>
            <td style={{border:"2px solid black", padding:"20px", textAlign:"center"}}>{item.name}</td>
            <td style={{border:"2px solid black", padding:"20px", textAlign:"center"}}>{item.job}</td>
            <td style={{border:"2px solid black", padding:"20px", textAlign:"center"}}>{item.contact}</td>
            <td style={{border:"2px solid black", padding:"20px", textAlign:"center"}}><button onClick={()=>handleEdit(item)}>Edit</button><button onClick={()=>handleDelete(item.id)}>Delete</button></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Crudexe