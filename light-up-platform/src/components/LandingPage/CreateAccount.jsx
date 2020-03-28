import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

/**
 * TODO
 * update colors for textfields 
 */

const CreateAccount = () =>{
    const[EmailAddress, setEmailAddress] = useState("")
    const[FirstName, setFirstName] = useState("")
    const[SurName, setSurName] = useState("")
    const[UserName, setUserName] = useState("")
    const[Password, setPassword] = useState("")
    const[Phone, setPhone] = useState("")

    const setEmailFunc = (e) =>{
        setEmailAddress(e.target.value)
    }
    const setFirstNameFunc = (e) =>{
        setFirstName(e.target.value)
    }
    const setSurNameFunc = (e) =>{
        setSurName(e.target.value)
    }
    const setUserNameFunc = (e) =>{
        setUserName(e.target.value)
    }
    const setPasswordFunc = (e) =>{
        setPassword(e.target.value)
    }
    const setPhoneFunc = (e) =>{
        setPhone(e.target.value)
    }

    const submitInformation = () =>{
        //send data to server for authentication
    }

    return(
        <div>
            <form noValidate autoComplete="off">
                <TextField label="Email Address" variant="filled" onChange={(e) => setEmailFunc(e)}/><br/>
                <TextField label="First Name" variant="filled" onChange={(e) => setFirstNameFunc(e)}/><br/>
                <TextField label="Sur-Name" variant="filled" onChange={(e) => setSurNameFunc(e)}/><br/>
                <TextField label="Choose A Username" variant="filled" onChange={(e) => setUserNameFunc(e)}/><br/>
                <TextField label="Password" variant="filled" onChange={(e) => setPasswordFunc(e)}/><br/>
                <TextField label="Phone Number (Optional)" variant="filled" onChange={(e) => setPhoneFunc(e)}/>
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

export default CreateAccount