// statefull - store,display, handle
//setState - update
import React, { Component } from "react";

class Chitra extends Component{
    constructor(props, newj){
        super()
        this.person={
            name:"chitra",
            grade:"A"
        }

        this.setPerson={
            name:"hghaf"
        }
    }
    render(){
        return(
            <>
            <h1>{this.setPerson.name} {this.person.grade}</h1>
            </>
        )
    }
}
export default Chitra