import React, { Component } from "react";

class Login extends Component{
    render(){
        return(
            <>
            <div>
                <form autoComplete="off">
               <input type="text" placeholder="name"/><br/>
               <input type="password" placeholder="password"/><br/>
               <button>submit</button>
               </form>
            </div>

            </>
        )
    }
}
export default Login;