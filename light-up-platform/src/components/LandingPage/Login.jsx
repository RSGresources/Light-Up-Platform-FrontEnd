import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

/**
 * TODO
 * change the color of the text field labels to white
 * add code to send data to server
 */

const Login = () =>{
    const[userName, setUserName] = useState("")
    const[password, setPassword] = useState("")

    const setUserNameFunc = (e) =>{
        console.log(e.target.value)
        setUserName(e.target.value)
    }
    const setPasswordFunc = (e) =>{
        setPassword(e.target.value)
    }
    const submitInformation = () =>{
        //send data to server for authentication
    }

    return(
        <div>
            <form noValidate autoComplete="off">
                <TextField label="User Name" variant="filled" onChange={(e) => setUserNameFunc(e)}/>
                <TextField label="Password" variant="filled" onChange={(e) => setPasswordFunc(e)}/>
            </form>
            <div style={buttonPosition}>
                <Button variant="contained" color="primary" onClick={() => submitInformation()}>
                    Submit
                </Button>
            </div>
        </div>
    )
}

const buttonPosition = {
    padding:'20px',
    display:'flex',
    justifyContent:'center'
}

export default Login