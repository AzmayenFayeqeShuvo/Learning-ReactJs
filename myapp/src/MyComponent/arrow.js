import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const MyBtn=(a)=>{
    alert(a)
}
const Arrow=()=>{
    return(
        <button onClick={MyBtn.bind(this,'this is aerrow fun')}className="btn btn-primary m-5">My Button</button>
    );
    }

   export default Arrow;