import React from 'react'

const Listexe = () => {
    const employee=[{
        id:1,
        name:"Pranav",
        role:"Web designer"
    },
    {
        id:2,
        name:"Parikshith",
        role:"Developer"

    },
    {
    id:3,
    name:"Raj",
    role:"System Analyst"
    
    },]
  return (
    <div>
        <table>
            <thead>
                <tr>
                    
                    <th style={{border:"1px solid black",paddingLeft:"80px",paddingRight:"80px"}}>Name</th>
                    <th style={{border:"1px solid black",paddingLeft:"80px",paddingRight:"80px"}}>Role</th>
                </tr>
            </thead>
            <tbody>
                {employee.map((item)=>(    
                <tr key={item.id}>
                    
                    <td style={{border:"1px solid black",paddingBottom:"30px"}}>{item.name}</td>
                    <td style={{border:"1px solid black",paddingBottom:"30px"}}>{item.role}</td>
                </tr>
                 ))}
            </tbody>   
        </table>
    </div>
  )
}

export default Listexe