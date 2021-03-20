import { Button } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import NavigationBar from '../../components/navigation/NavigationBar';
import "./NotLoggedInDisclaimer.css";

const NotLoggedInDisclaimer = () => {
   
    const localStorageToken = localStorage.getItem("token");

    return (

    <div className="disclaimerWrapper">
        <NavigationBar localStorageToken={localStorageToken}/>
        <div className="disclaimerContainer">
            <h2 className="notLoggedInTitle">You need to be logged in to see this page.</h2>
                <div className="buttonContainer">
                    <Button width="100px" colorScheme="green"><Link to="/register">Sign up</Link></Button>
                    <Button width="100px" colorScheme="blue"><Link to="/login">Login</Link></Button>
                </div>
        </div>
    </div>
    )
}

export default NotLoggedInDisclaimer
