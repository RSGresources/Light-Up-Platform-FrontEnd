import React from 'react'
import Login from './Login'
import CreateAccount from './CreateAccount'

const Form = (props) =>{
    const form = props.tab

    if(form === 0){
        return(
            //render the login form
            <div>
                <Login/>
            </div>
        )
    }
    else{
        return(
            //render the create account form
            <div>   
                <CreateAccount/>
            </div>
        )
    }
}

export default Form