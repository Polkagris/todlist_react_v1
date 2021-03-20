import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavigationBar.css";


const NavigationBar = ({localStorageToken}: Props) => {
    const [storageToken, setStorageToken] = useState(localStorageToken);
    const history = useHistory();
    

    const [, updateState] = React.useState({});
    const forceUpdate = React.useCallback(() => setStorageToken(localStorageToken), []);


    const handleLogoutClick = () => {
        history.push("/signedout");
        localStorage.removeItem("token");
        console.log("You logged out successfully.");
        forceUpdate()

    }


    return (
            <div className="navWrapper">
                <div className="navigationTabsContainer">
                    <div className="navItem"><Link to="/todos">My Todos</Link></div>
                    <div className="navItem"><Link to="/">Home</Link></div>
                    
                    {storageToken ? <div onClick={handleLogoutClick} className="navItem">Logout</div> : <div className="navItem"><Link to="/login">Login</Link></div> }
    {/*                 <div className="navItem"><Link to="/login">{localStorageToken ? "Logout" : "Login"}</Link></div> */}
    
                </div>
            </div>

    )
}

interface Props {
    localStorageToken: string | null
}

export default NavigationBar
