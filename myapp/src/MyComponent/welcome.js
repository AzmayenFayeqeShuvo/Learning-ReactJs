import React,{Component} from 'react'

class Welcome extends Component{

    DoThis(a){
        alert(a)
    }
    render(){

    return(
     <div>
     <h2>This is {this.props.name}</h2>
     <button onClick={this.DoThis.bind(this,"this is for test class")}>click here</button>
     </div>
     )
    }
    }

export default Welcome