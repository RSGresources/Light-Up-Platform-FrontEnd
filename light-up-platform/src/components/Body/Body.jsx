import React from 'react';
import {useHistory} from 'react-router-dom'
import css from './Body.module.css';


const Body = ({ children }) => {
    const history = useHistory()

    if(history.location.pathname === "/LandingPage"){
        //set body to have no border
        return(
            <main className={css.BodyNoPadding}>
                {children}
            </main>
        )
    }
    else{
        return (
            <main className={css.Body}>
                {children}
            </main>
        )
    }

    
};

export default Body;