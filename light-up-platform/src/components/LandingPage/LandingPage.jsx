import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import Form from './Form'

import Button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Image1 from '../../resources/images/landingPageImage1.jpg'
import Image2 from '../../resources/images/landingPageImage2.jpg'
import Image3 from '../../resources/images/landingPageImage3.jpg'
import Image4 from '../../resources/images/landingPageImage4.jpg'
import Image5 from '../../resources/images/landingPageImage5.jpg'
let images = [Image1, Image2, Image3, Image4, Image5]
let Image = images[Math.floor(Math.random() * 5)]

/**
 * landing page initial contains a hit button to begin, then a form to login or create an account
 */
const LandingPage = () =>{
    const[pageContext, setPageContext] = useState("enter") // alternative is login
    const [tab, setTab] = useState(0);

    const updatePageState = () =>{
        setPageContext("login")
    }
    const updateTabPosition = (event, newValue) => {
        setTab(newValue);
    };

    if(pageContext === "enter"){
        return(
            <div style={{height:'100vh', backgroundSize:'cover', backgroundImage:"url(" + Image + ")"}}>
                <div style={buttonPos}>
                    <Button variant="contained" color="primary" onClick={() => updatePageState()}>
                        Enter
                    </Button>
                </div>
            </div>
        )
    }
    else{
        return(
            <div style={{height:'100vh', backgroundSize:'cover', backgroundImage:"url(" + Image + ")"}}>
                <div style={contentPosition}>
                    <Tabs style={tabStyle}
                        value={tab}
                        onChange={updateTabPosition}
                        indicatorColor='primary'
                    >
                        <Tab label="Login" />
                        <Tab label="Create Account" />
                    </Tabs>
                </div>
                <div style={contentPosition}>
                    <div style={{
                        marginTop:'50px',
                        padding:'20px',
                        borderRadius:'10px',
                        backgroundColor: '#00000050',
                    }}>
                        <Form tab={tab}/>
                    </div>
                </div>
            </div>
        )
    }
}

const buttonPos = {
    position:'absolute',
    top:'50%',
    left:'50%'
}
const contentPosition={
    display:'flex',
    width:'100%',
    justifyContent:'center'
}
const tabStyle={
    backgroundColor:'#363636',
    color:'white'
}

export default LandingPage