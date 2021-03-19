import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavigationBar.css";
import NavBarContext from "../../App";
import Consumer from "../../App";


const NavigationBar = ({localStorageToken}: Props) => {
    const [storageToken, setStorageToken] = useState(localStorageToken);
    // const navBarContext = useContext(NavBarContext);

    // const localStorageToken = localStorage.getItem("token");
    const history = useHistory();
    
    // Force re-render so login becomes logout and vica versa
    const [, updateState] = React.useState({});
    const forceUpdate = React.useCallback(() => setStorageToken(localStorageToken), []);
    console.log("token from navbar component:", localStorageToken);

    const handleLogoutClick = () => {
        history.push("/signedout");
        localStorage.removeItem("token");
        console.log("You logged out successfully.");
        forceUpdate()

    }

/*     useEffect(() => {
        setStorageToken("");
    }, [handleLogoutClick]) */

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
