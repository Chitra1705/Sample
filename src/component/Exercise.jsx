import React,{Component} from 'react'

class Data extends Component{
    constructor(){
    super()
    this.student={
        name:"pranav",
        subject:"english",
        mark: 75
    }   
}
render(){
  return (
    <div>
        <table style={{color:"black",backgroundColor:"white"}}></table>
        <thead>
            <tr>
                <th style={{border:"1px solid black", padding:"20px"}}>Name</th>
                <th style={{border:"1px solid black", padding:"20px"}}>Subject</th>
                <th style={{border:"1px solid black", padding:"20px"}}>Mark</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td  style={{border:"1px solid black", padding:"20px"}}>{this.student.name}</td>
                <td  style={{border:"1px solid black", padding:"20px"}}>{this.student.subject}</td>
                <td  style={{border:"1px solid black", padding:"20px"}}>{this.student.mark}</td>
            </tr>
        </tbody>
          
       
    </div>
  )
}
}


export default Data